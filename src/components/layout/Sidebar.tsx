import React from 'react';
import { Home, User, Briefcase, Cpu, Calendar, Send, GraduationCap, Award } from 'lucide-react';
import { SocialLinks } from '../ui/SocialLinks';

interface SidebarProps {
  activeSection: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const menuItems = [
    { id: 'home', label: 'Início', icon: <Home size={16} /> },
    { id: 'about', label: 'Sobre', icon: <User size={16} /> },
    { id: 'experience', label: 'Experiência', icon: <Calendar size={16} /> },
    { id: 'education', label: 'Formação', icon: <GraduationCap size={16} /> },
    { id: 'technologies', label: 'Tecnologias', icon: <Cpu size={16} /> },
    { id: 'projects', label: 'Projetos', icon: <Briefcase size={16} /> },
    { id: 'certifications', label: 'Certificações', icon: <Award size={16} /> },
    { id: 'contact', label: 'Contato', icon: <Send size={16} /> },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 0;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside 
      className="hidden lg:flex flex-col justify-between fixed top-0 left-0 w-64 h-screen border-r border-border-subtle bg-bg-sidebar z-30 py-6 px-5 text-text-secondary overflow-y-auto"
      aria-label="Navegação Lateral Principal"
    >
      {/* Brand logo */}
      <div className="flex items-center gap-3 shrink-0">
        <div 
          className="flex items-center justify-center w-9 h-9 rounded-xl bg-accent-blue/10 border border-accent-blue/30 text-accent-cyan font-bold text-lg select-none"
          title="Wallace Gonçalves"
        >
          W
        </div>
        <span className="text-text-primary font-bold text-base tracking-tight select-none">
          Wallace<span className="text-accent-cyan">.dev</span>
        </span>
      </div>

      {/* Navigation menu - minimized vertical gaps to support 8 options */}
      <nav className="flex-1 my-6" aria-label="Menu principal">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all duration-300 font-medium relative group focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan ${
                    isActive
                      ? 'bg-accent-blue/10 text-text-primary border-l-2 border-accent-blue pl-[12px]'
                      : 'hover:bg-bg-card hover:text-text-primary border-l-2 border-transparent'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className={`transition-colors duration-300 ${isActive ? 'text-accent-cyan' : 'text-text-muted group-hover:text-text-secondary'}`}>
                    {item.icon}
                  </span>
                  <span className="text-xs">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sidebar Footer with Social Links */}
      <div className="border-t border-border-subtle pt-4 flex flex-col gap-3 shrink-0">
        <div className="text-[10px] text-text-muted uppercase tracking-wider select-none">
          Redes Sociais
        </div>
        <SocialLinks iconSize={16} />
      </div>
    </aside>
  );
};
