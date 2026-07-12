import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Cpu, Calendar, Send, GraduationCap, Award } from 'lucide-react';
import { SocialLinks } from '../ui/SocialLinks';

interface MobileHeaderProps {
  activeSection: string;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Início', icon: <Home size={18} /> },
    { id: 'about', label: 'Sobre', icon: <User size={18} /> },
    { id: 'experience', label: 'Experiência', icon: <Calendar size={18} /> },
    { id: 'education', label: 'Formação', icon: <GraduationCap size={18} /> },
    { id: 'technologies', label: 'Tecnologias', icon: <Cpu size={18} /> },
    { id: 'projects', label: 'Projetos', icon: <Briefcase size={18} /> },
    { id: 'certifications', label: 'Certificações', icon: <Award size={18} /> },
    { id: 'contact', label: 'Contato', icon: <Send size={18} /> },
  ];

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Listen to Escape key to close mobile drawer
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // height of mobile header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-20 border-b border-border-subtle bg-bg-sidebar/90 backdrop-blur-md z-40 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 select-none">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/30 text-accent-cyan font-bold text-base">
            W
          </div>
          <span className="text-text-primary font-bold text-md tracking-tight">
            Wallace<span className="text-accent-cyan">.dev</span>
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-text-primary hover:text-accent-cyan hover:bg-bg-card rounded-lg transition-colors border border-transparent hover:border-border-subtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Drawer Overlay Backdrop */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer Panel */}
      <div
        id="mobile-navigation"
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[280px] max-w-[85vw] bg-bg-sidebar border-l border-border-subtle z-50 p-6 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Menu móvel"
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
            <span className="text-text-primary font-bold tracking-tight select-none">Navegação</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-text-secondary hover:text-accent-cyan hover:bg-bg-card rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
              aria-label="Fechar menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="my-6">
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleLinkClick(e, item.id)}
                      className={`flex items-center gap-4 px-4 py-2.5 rounded-xl transition-all duration-200 font-medium ${
                        isActive
                          ? 'bg-accent-blue/10 text-text-primary border-l-2 border-accent-blue pl-[14px]'
                          : 'hover:bg-bg-card hover:text-text-primary border-l-2 border-transparent'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className={isActive ? 'text-accent-cyan' : 'text-text-muted'}>
                        {item.icon}
                      </span>
                      <span className="text-xs">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="border-t border-border-subtle pt-4 flex flex-col gap-3 shrink-0">
          <div className="text-[10px] text-text-muted select-none uppercase tracking-wider">Contatos rápidos</div>
          <SocialLinks iconSize={18} />
        </div>
      </div>
    </>
  );
};
