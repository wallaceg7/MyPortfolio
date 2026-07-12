import React, { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { technologiesData, type Technology } from '../../data/technologies';

interface TechItemProps {
  tech: Technology;
}

const TechItem: React.FC<TechItemProps> = ({ tech }) => {
  const [hovered, setHovered] = useState(false);

  // Dynamic border and glow colors matching the brand
  const dynamicStyle = hovered
    ? {
        borderColor: tech.color === '#FFFFFF' ? 'rgba(255,255,255,0.3)' : `${tech.color}45`,
        boxShadow: `0 0 12px ${tech.color === '#FFFFFF' ? 'rgba(255,255,255,0.06)' : tech.color + '12'}`,
        backgroundColor: 'rgba(11, 19, 41, 0.4)'
      }
    : {};

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={dynamicStyle}
      className="flex items-center gap-3 py-3 px-4 rounded-xl bg-bg-card/30 border border-border-subtle/70 transition-all duration-300 select-none cursor-default text-left group"
      aria-label={`Tecnologia: ${tech.name} (${tech.observation || ''})`}
    >
      <div 
        className="transition-transform duration-300 group-hover:scale-110 shrink-0 text-xl"
        style={{
          color: tech.color,
          filter: hovered ? 'grayscale(0) brightness(1.1)' : 'grayscale(0.3) opacity(0.85)',
          transition: 'filter 0.3s ease, transform 0.3s ease'
        }}
      >
        {tech.icon}
      </div>
      
      <div className="flex flex-col leading-tight overflow-hidden">
        <span className="text-xs font-bold text-text-primary truncate">
          {tech.name}
        </span>
        {tech.observation && (
          <span className="text-[9px] text-text-muted mt-0.5 truncate uppercase tracking-wider font-semibold font-mono">
            {tech.observation}
          </span>
        )}
      </div>
    </div>
  );
};

export const Technologies: React.FC = () => {
  return (
    <section 
      id="technologies" 
      className="py-20 px-6 max-w-5xl mx-auto w-full relative"
      aria-label="Tecnologias e ferramentas"
    >
      {/* Background radial glow */}
      <div className="glow-spot top-1/2 left-1/4 animate-pulse-glow" aria-hidden="true" style={{ width: '400px', height: '400px' }} />

      <SectionTitle title="Tecnologias & Ferramentas" subtitle="Conhecimento Técnico" />

      {/* Grid of skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 z-10 relative">
        {technologiesData.map((category) => (
          <div 
            key={category.title} 
            className="p-6 rounded-2xl bg-bg-card/20 border border-border-subtle/70 flex flex-col"
          >
            <h3 className="text-xs font-bold tracking-widest text-text-primary uppercase mb-6 pb-2 border-b border-border-subtle/40 select-none">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {category.items.map((tech) => (
                <TechItem key={tech.id} tech={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
