import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SocialLinks } from '../ui/SocialLinks';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-border-subtle bg-bg-sidebar/50 py-12 px-6 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Branding & Quote */}
        <div className="text-center md:text-left select-none">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="flex items-center justify-center w-6 h-6 rounded bg-accent-blue/10 border border-accent-blue/30 text-accent-cyan font-bold text-xs">
              W
            </div>
            <span className="text-text-primary font-bold text-sm tracking-tight">
              Wallace<span className="text-accent-cyan">.dev</span>
            </span>
          </div>
          <p className="text-xs text-text-muted italic">
            &ldquo;Construído com código, lógica e propósito&rdquo;
          </p>
        </div>

        {/* Social Navigation */}
        <div className="flex flex-col items-center gap-2">
          <SocialLinks iconSize={18} />
          <p className="text-[11px] text-text-muted mt-1 select-none">
            &copy; {currentYear} Wallace. Todos os direitos reservados.
          </p>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 bg-bg-card border border-border-subtle hover:border-accent-blue hover:text-accent-cyan text-text-secondary text-xs font-semibold rounded-xl transition-all duration-300 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
          aria-label="Voltar ao topo da página"
        >
          <span>Voltar ao topo</span>
          <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>

      </div>
    </footer>
  );
};
