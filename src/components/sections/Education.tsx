import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { educationData } from '../../data/education';

export const Education: React.FC = () => {
  return (
    <section 
      id="education" 
      className="py-20 px-6 max-w-5xl mx-auto w-full relative"
      aria-label="Formação acadêmica"
    >
      <div className="glow-spot top-1/3 right-1/4 animate-pulse-glow" aria-hidden="true" style={{ width: '350px', height: '350px' }} />

      <SectionTitle title="Formação Acadêmica" subtitle="Estudos e Qualificações" />

      {/* Grid listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 z-10 relative">
        {educationData.map((edu) => {
          const isOngoing = edu.status === "Em andamento";
          
          return (
            <article 
              key={edu.id}
              className={`p-6 rounded-2xl bg-bg-card/30 border transition-all duration-300 flex gap-4 text-left ${
                isOngoing
                  ? 'border-accent-cyan/40 hover:border-accent-cyan/60 shadow-lg shadow-accent-cyan/5'
                  : 'border-border-subtle/80 hover:border-accent-blue/20'
              }`}
            >
              {/* Icon indicator */}
              <div 
                className={`p-3 rounded-xl border shrink-0 h-fit ${
                  isOngoing
                    ? 'bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan ring-2 ring-accent-cyan/10 animate-pulse'
                    : 'bg-accent-blue/5 border-accent-blue/10 text-accent-blue'
                }`}
                aria-hidden="true"
              >
                {isOngoing ? <BookOpen size={20} /> : <GraduationCap size={20} />}
              </div>

              {/* Text content */}
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-text-primary">
                    {edu.course}
                  </h3>
                  
                  {/* Status Badge */}
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold ${
                    isOngoing
                      ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20'
                      : 'bg-bg-deep text-text-secondary border border-border-subtle/60'
                  }`}>
                    {edu.status}
                  </span>
                </div>

                {edu.institution && (
                  <p className="text-xs text-text-secondary font-semibold">
                    {edu.institution}
                  </p>
                )}

                {edu.type && (
                  <p className="text-[10px] text-text-muted font-medium uppercase tracking-wider">
                    {edu.type}
                  </p>
                )}

                {edu.period && (
                  <div className="flex items-center gap-1.5 text-[10px] text-text-muted pt-1">
                    <Calendar size={10} />
                    <span>{edu.period}</span>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
