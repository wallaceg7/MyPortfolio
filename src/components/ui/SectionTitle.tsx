import React from 'react';

interface SectionTitleProps {
  id?: string;
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ id, title, subtitle }) => {
  return (
    <div id={id} className="mb-10 text-left select-none animate-fade-in-up">
      <div className="flex items-center gap-3">
        <span className="h-1 w-8 rounded-full bg-accent-blue" aria-hidden="true" />
        <h2 className="text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-2 text-sm font-medium tracking-wide text-accent-cyan uppercase md:text-xs">
          {subtitle}
        </p>
      )}
    </div>
  );
};
