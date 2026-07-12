import React, { useState, useEffect, useRef } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ProjectCard } from '../ui/ProjectCard';
import { projectsData, type Project } from '../../data/projects';
import { X, AlertTriangle, Cpu, Tag, Info } from 'lucide-react';
import { ExternalLink } from '../ui/ExternalLink';
import { GithubIcon } from '../ui/BrandIcons';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);

  const filters = ['Todos', 'Backend', 'APIs', 'Desktop', 'Automação'];

  // Match projects according to criteria
  const filteredProjects = activeFilter === 'Todos'
    ? projectsData
    : projectsData.filter((project) => {
      const cat = project.category;
      if (activeFilter === 'Backend') {
        return cat === 'backend' || cat === 'api';
      }
      if (activeFilter === 'APIs') {
        return cat === 'api' || cat === 'backend';
      }
      if (activeFilter === 'Desktop') {
        return cat === 'desktop' || cat === 'automation';
      }
      if (activeFilter === 'Automação') {
        return cat === 'automation';
      }
      return false;
    });

  // Category translator helper
  const translateCategory = (cat: string) => {
    switch (cat) {
      case 'backend': return 'Backend';
      case 'api': return 'API';
      case 'desktop': return 'Desktop';
      case 'automation': return 'Automação';
      default: return cat;
    }
  };

  // Manage body scroll and track last focused element
  useEffect(() => {
    if (selectedProject) {
      lastFocusedElementRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      if (lastFocusedElementRef.current) {
        lastFocusedElementRef.current.focus();
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProject]);

  // Focus trap inside the modal
  useEffect(() => {
    if (!selectedProject || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex="0"]'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else { // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleTabKey);
    return () => {
      window.removeEventListener('keydown', handleTabKey);
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-5xl mx-auto w-full relative"
      aria-label="Projetos desenvolvidos"
    >
      <SectionTitle title="Projetos" subtitle="Portfólio de Trabalho" />

      {/* Screen reader aria-live counts announcer */}
      <span className="sr-only" aria-live="polite">
        Mostrando {filteredProjects.length} projeto(s) na categoria {activeFilter}.
      </span>


      {/* Filter controls */}
      <div
        className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-border-subtle/30 overflow-x-auto"
        role="tablist"
        aria-label="Filtros de Projetos"
      >
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              role="tab"
              aria-selected={isActive}
              aria-pressed={isActive}
              tabIndex={0}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all duration-300 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan cursor-pointer ${isActive
                  ? 'bg-accent-blue/10 border-accent-blue/50 text-accent-cyan shadow-sm shadow-accent-blue/5'
                  : 'bg-bg-card/50 border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-blue/30'
                }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Grid listing */}
      {filteredProjects.length > 0 ? (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in"
          role="region"
          aria-label="Lista de projetos filtrados"
        >
          {filteredProjects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} onViewDetails={setSelectedProject} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-bg-card/25 rounded-2xl border border-dashed border-border-subtle select-none">
          <p className="text-sm text-text-muted">Nenhum projeto encontrado nesta categoria.</p>
        </div>
      )}

      {/* Details modal overlay */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            ref={modalRef}
            className="w-full max-w-2xl bg-bg-card border border-border-subtle rounded-2xl overflow-hidden shadow-2xl relative my-8 text-left flex flex-col max-h-[85vh] animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-border-subtle/50 flex items-center justify-between bg-bg-sidebar select-none shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-accent-blue/15 border border-accent-blue/20 text-accent-cyan">
                  <Cpu size={18} />
                </div>
                <div>
                  <h3 id="modal-title" className="text-base font-bold text-text-primary">
                    Detalhes do Projeto
                  </h3>
                  <span className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">
                    {translateCategory(selectedProject.category)}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-bg-deep border border-border-subtle hover:border-accent-blue hover:text-accent-cyan text-text-secondary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan cursor-pointer"
                aria-label="Fechar detalhes do projeto"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body - Scrollable content */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1">

              {/* Title & Status */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-xl font-black text-text-primary tracking-tight">
                    {selectedProject.title}
                  </h4>
                  {selectedProject.status && (
                    <span className="px-3 py-1 rounded-full text-[9px] font-bold bg-bg-deep border border-border-subtle text-accent-cyan uppercase tracking-wider select-none">
                      {selectedProject.status}
                    </span>
                  )}
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Disclaimer for WhatsApp Bot */}
              {selectedProject.id === 'whatsapp-bot' && (
                <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex gap-3 text-left">
                  <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                  <p className="text-[10px] text-amber-400/90 leading-relaxed font-semibold">
                    Projeto educacional. O uso de automações deve respeitar os termos da plataforma, a privacidade dos usuários e o consentimento dos destinatários.
                  </p>
                </div>
              )}

              {/* Core Features */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-text-primary pb-1 border-b border-border-subtle/30 flex items-center gap-2 select-none">
                  <Info size={12} className="text-accent-blue" />
                  <span>Funcionalidades Implementadas</span>
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary list-disc pl-4 leading-relaxed">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="marker:text-accent-cyan">
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Technologies list */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-text-primary pb-1 border-b border-border-subtle/30 flex items-center gap-2 select-none">
                  <Tag size={12} className="text-accent-blue" />
                  <span>Tecnologias & Arquiteturas</span>
                </h5>
                <div className="flex flex-wrap gap-1.5" aria-label="Lista completa de tecnologias utilizadas">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-bold text-text-muted px-2.5 py-1 rounded-md bg-bg-deep border border-border-subtle/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-border-subtle/50 bg-bg-sidebar/90 flex justify-end gap-3 shrink-0">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 bg-bg-deep border border-border-subtle hover:border-accent-blue text-text-secondary hover:text-text-primary text-xs font-bold rounded-xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan cursor-pointer"
              >
                Fechar
              </button>

              <ExternalLink
                href={selectedProject.repositoryUrl}
                ariaLabel={`Abrir o código do projeto ${selectedProject.title} no GitHub`}
                className="px-5 py-2.5 bg-accent-blue hover:bg-accent-blue/90 text-text-primary text-xs font-bold rounded-xl flex items-center gap-2 transition-colors shadow-lg shadow-accent-blue/15 hover:shadow-accent-blue/25"
              >
                <GithubIcon size={14} />
                <span>Ver repositório</span>
              </ExternalLink>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
