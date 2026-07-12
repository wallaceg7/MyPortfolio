import React, { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Award, ExternalLink as ExternalLinkIcon, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { certificationsData } from '../../data/certifications';
import { ExternalLink } from '../ui/ExternalLink';

export const Certifications: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Initially show only the first 4 certifications
  const visibleCertifications = showAll 
    ? certificationsData 
    : certificationsData.slice(0, 4);

  return (
    <section 
      id="certifications" 
      className="py-20 px-6 max-w-5xl mx-auto w-full relative"
      aria-label="Certificações obtidas"
    >
      <SectionTitle title="Certificações" subtitle="Cursos & Credenciais" />

      {/* Grid listing */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 z-10 relative transition-all duration-300"
        role="region"
        aria-live="polite"
      >
        {visibleCertifications.map((cert) => (
          <article 
            key={cert.id}
            className="p-5 rounded-2xl bg-bg-card/30 border border-border-subtle/80 hover:border-accent-blue/20 transition-all duration-300 flex flex-col justify-between text-left group"
          >
            <div className="flex gap-4">
              {/* Icon */}
              <div 
                className="p-3 bg-accent-blue/5 border border-accent-blue/10 text-accent-cyan rounded-xl shrink-0 h-fit"
                aria-hidden="true"
              >
                <Award size={20} />
              </div>

              {/* Text */}
              <div className="space-y-1.5 flex-1">
                <h3 className="text-sm font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs text-text-secondary">
                  {cert.institution}
                </p>
                {cert.issueDate && (
                  <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
                    <Calendar size={10} />
                    <span>Emissão: {cert.issueDate}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Link Button */}
            <div className="mt-5 pt-4 border-t border-border-subtle/30 flex justify-end">
              <ExternalLink
                href={cert.credentialUrl}
                ariaLabel={`Ver credencial oficial da certificação ${cert.name} emitida por ${cert.institution}`}
                className="flex items-center gap-1.5 py-1.5 px-3 bg-bg-deep border border-border-subtle hover:border-accent-blue text-text-secondary hover:text-text-primary text-[10px] font-bold rounded-lg transition-colors"
              >
                <span>Ver credencial</span>
                <ExternalLinkIcon size={10} />
              </ExternalLink>
            </div>
          </article>
        ))}
      </div>

      {/* Expand/Collapse Trigger */}
      {certificationsData.length > 4 && (
        <div className="flex justify-center mt-10 z-10 relative">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-3 bg-bg-card border border-border-subtle hover:border-accent-blue text-text-secondary hover:text-accent-cyan text-xs font-bold rounded-xl transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan cursor-pointer"
            aria-expanded={showAll}
            aria-controls="certifications-grid"
          >
            <span>{showAll ? 'Mostrar menos' : 'Ver todas'}</span>
            {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>
      )}
    </section>
  );
};
