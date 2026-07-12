import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../../data/experience';
import { formatExperienceDuration, formatTimelineDate } from '../../utils/dateUtils';

export const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-20 px-6 max-w-5xl mx-auto w-full relative"
      aria-label="Experiência profissional"
    >
      <SectionTitle title="Experiência" subtitle="Histórico de Trabalho" />

      {/* Timeline Container */}
      <div className="relative border-l border-border-subtle md:ml-6 mt-12 text-left space-y-12">
        {experienceData.map((exp) => {
          const durationText = formatExperienceDuration(exp.startDate, exp.endDate);
          const startDateFormatted = formatTimelineDate(exp.startDate);
          const endDateFormatted = exp.endDate ? formatTimelineDate(exp.endDate) : "Presente";

          return (
            <article 
              key={exp.id} 
              className="relative pl-8 md:pl-10 group animate-fade-in-up"
            >
              {/* Timeline Point Indicator */}
              <div 
                className={`absolute top-1.5 -left-[9px] w-[18px] h-[18px] rounded-full border-4 border-bg-deep transition-all duration-300 ${
                  exp.isCurrent
                    ? 'bg-accent-cyan ring-4 ring-accent-cyan/20 animate-pulse'
                    : 'bg-text-muted group-hover:bg-accent-blue'
                }`} 
                aria-hidden="true"
              />

              {/* Timeline content box */}
              <div className={`p-6 rounded-2xl bg-bg-card/30 border transition-all duration-300 ${
                exp.isCurrent
                  ? 'border-accent-cyan/40 hover:border-accent-cyan/60 shadow-lg shadow-accent-cyan/5'
                  : 'border-border-subtle/80 hover:border-accent-blue/20'
              }`}>
                
                {/* Header: Role and Period */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-text-secondary font-medium mt-1">
                      {exp.company}
                    </p>
                    {exp.location && (
                      <div className="flex items-center gap-1 text-[10px] text-text-muted mt-1 select-none">
                        <MapPin size={10} />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Period & Dynamic Duration Badges */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold bg-bg-deep text-text-secondary border border-border-subtle/60">
                      <Calendar size={10} />
                      <div className="flex items-center gap-1">
                        <time dateTime={exp.startDate}>{startDateFormatted}</time>
                        <span>—</span>
                        <time dateTime={exp.endDate || undefined}>{endDateFormatted}</time>
                      </div>
                    </div>
                    
                    {durationText && (
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold w-fit ${
                        exp.isCurrent
                          ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30'
                          : 'bg-bg-deep text-text-muted border border-border-subtle/50'
                      }`}>
                        {durationText}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-text-secondary leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Technologies list */}
                <div className="flex flex-wrap gap-1.5" aria-label="Tecnologias utilizadas no cargo">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[9px] font-bold text-text-muted px-2 py-0.5 rounded-md bg-bg-deep/50 border border-border-subtle/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
