import React from 'react';
import { GithubIcon } from './BrandIcons';
import { ExternalLink } from './ExternalLink';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
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

  return (
    <article 
      className="rounded-2xl bg-bg-card border border-border-subtle/80 overflow-hidden flex flex-col justify-between h-full transition-all duration-300 hover:border-accent-blue/30 hover:shadow-lg hover:shadow-black/40 hover:-translate-y-1 group relative"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Featured Star/Label Badge */}
      {project.featured && (
        <span className="absolute top-3 left-3 text-[8px] uppercase font-black tracking-widest bg-accent-blue/80 backdrop-blur-sm text-text-primary px-2.5 py-1 rounded-md border border-accent-blue/20 shadow-md z-10 select-none">
          Destaque
        </span>
      )}

      <div>
        {/* Card Header Illustration */}
        <div 
          className="h-40 w-full bg-bg-sidebar flex items-center justify-center relative overflow-hidden select-none border-b border-border-subtle/40"
          aria-hidden="true"
        >
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.imagePlaceholderGradient}`} />
          )}
          
          <span className="absolute bottom-3 right-3 text-[9px] uppercase font-bold tracking-widest bg-black/70 backdrop-blur-sm text-accent-cyan px-2.5 py-1 rounded-md border border-accent-cyan/20 z-10">
            {translateCategory(project.category)}
          </span>
        </div>

        {/* Content body */}
        <div className="p-5 text-left">
          <h3 
            id={`project-title-${project.id}`} 
            className="text-base font-bold text-text-primary mb-2 line-clamp-1 group-hover:text-accent-cyan transition-colors"
          >
            {project.title}
          </h3>
          <p className="text-xs text-text-secondary leading-relaxed mb-5 line-clamp-3">
            {project.shortDescription}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0 text-left">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5" aria-label="Tecnologias principais">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] font-semibold text-text-secondary px-2.5 py-1 rounded-md bg-bg-deep/80 border border-border-subtle/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links and Actions */}
        <div className="flex items-center gap-3 border-t border-border-subtle/40 pt-4">
          <ExternalLink
            href={project.repositoryUrl}
            ariaLabel={`Abrir o código da ${project.title} no GitHub`}
            className="flex-1 py-2 px-3 bg-bg-deep border border-border-subtle hover:border-accent-blue text-text-secondary hover:text-text-primary text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <GithubIcon size={14} />
            <span>Código</span>
          </ExternalLink>

          <button
            onClick={() => onViewDetails(project)}
            className="flex-1 py-2 px-3 bg-accent-blue/10 border border-accent-blue/20 hover:border-accent-blue text-accent-cyan hover:text-text-primary text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan cursor-pointer"
            aria-label={`Ver detalhes e funcionalidades da ${project.title}`}
          >
            <span>Detalhes</span>
          </button>
        </div>
      </div>
    </article>
  );
};
