import React, { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Mail, Copy, Check, Download, ExternalLink as ExternalLinkIcon, XCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { profileData } from '../../data/profile';
import { ExternalLink } from '../ui/ExternalLink';
import { sanitizeMailtoUrl } from '../../utils/security';

export const Contact: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Set to true once the real PDF is placed in public/curriculo-wallace-goncalves.pdf
  const isResumeAvailable = false; 

  const mailtoUrl = sanitizeMailtoUrl(profileData.email);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const emailToCopy = profileData.email; // Only copy the static email from profile data
    
    // Check if navigator clipboard is supported and execution context is secure
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(emailToCopy);
        setCopyStatus('success');
        setTimeout(() => setCopyStatus('idle'), 2500);
        return;
      } catch {
        // Fail over to fallback block
      }
    }
    
    // Fallback approach using document.execCommand
    try {
      const textArea = document.createElement("textarea");
      textArea.value = emailToCopy;
      // Position out of screen viewport bounds
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      
      if (successful) {
        setCopyStatus('success');
      } else {
        setCopyStatus('error');
      }
      setTimeout(() => setCopyStatus('idle'), 2500);
    } catch {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 2500);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: profileData.linkedinUrl,
      icon: <LinkedinIcon size={20} />,
      username: 'wallace-goncalves'
    },
    {
      name: 'GitHub',
      url: profileData.githubUrl,
      icon: <GithubIcon size={20} />,
      username: 'wallaceg7'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 px-6 max-w-5xl mx-auto w-full relative"
      aria-label="Canais de contato"
    >
      <div className="glow-spot bottom-10 right-1/4 animate-pulse-glow" aria-hidden="true" style={{ animationDelay: '2.5s' }} />

      <SectionTitle title="Contato" subtitle="Fale Comigo" />

      {/* Screen reader aria-live status alert */}
      <span className="sr-only" aria-live="polite">
        {copyStatus === 'success' && "E-mail copiado com sucesso para a área de transferência."}
        {copyStatus === 'error' && "Não foi possível copiar o e-mail automaticamente. Por favor, copie manualmente."}
      </span>

      <div className="max-w-3xl mx-auto text-center mt-12 space-y-10 z-10 relative">
        <h3 className="text-xl md:text-3xl font-black tracking-tight text-text-primary max-w-2xl mx-auto leading-tight select-none">
          Vamos conversar sobre projetos, tecnologia e oportunidades?
        </h3>

        {/* Email action block */}
        <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle max-w-xl mx-auto shadow-xl shadow-black/30">
          <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
            E-mail Profissional
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-xl bg-bg-deep border border-border-subtle/60">
            {mailtoUrl ? (
              <a 
                href={mailtoUrl}
                className="flex items-center gap-3 overflow-hidden w-full select-all text-left group/email focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan rounded-lg p-1"
                aria-label={`Enviar e-mail para ${profileData.email}`}
              >
                <Mail className="text-accent-cyan shrink-0 transition-transform duration-300 group-hover/email:scale-105" size={18} />
                <span className="text-sm font-semibold text-text-primary truncate group-hover/email:text-accent-blue transition-colors">
                  {profileData.email}
                </span>
                <ExternalLinkIcon size={10} className="text-text-muted/60 opacity-0 group-hover/email:opacity-100 transition-opacity" />
              </a>
            ) : (
              <div className="flex items-center gap-3 overflow-hidden w-full text-left p-1 text-text-muted">
                <Mail size={18} />
                <span className="text-sm font-semibold truncate">E-mail indisponível</span>
              </div>
            )}
            
            <button
              onClick={handleCopyEmail}
              className={`w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan cursor-pointer ${
                copyStatus === 'success'
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                  : copyStatus === 'error'
                  ? 'bg-rose-500/10 border border-rose-500/30 text-rose-400'
                  : 'bg-accent-blue/10 border border-accent-blue/20 hover:border-accent-blue text-accent-cyan hover:text-text-primary'
              }`}
              aria-label="Copiar endereço de e-mail para a área de transferência"
            >
              {copyStatus === 'success' ? (
                <>
                  <Check size={14} />
                  <span>Copiado!</span>
                </>
              ) : copyStatus === 'error' ? (
                <>
                  <XCircle size={14} />
                  <span>Erro ao copiar</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Other contact buttons & resume download */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 pt-6">
          {socialLinks.map((link) => (
            <ExternalLink
              key={link.name}
              href={link.url}
              ariaLabel={`Visitar Wallace Gonçalves no ${link.name}`}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-bg-card/40 border border-border-subtle hover:border-accent-blue text-text-secondary hover:text-text-primary text-xs font-semibold transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="text-accent-cyan">{link.icon}</span>
              <div className="text-left leading-tight">
                <p className="text-[10px] text-text-muted font-bold uppercase">{link.name}</p>
                <p className="text-xs text-text-secondary">{link.username}</p>
              </div>
            </ExternalLink>
          ))}

          {isResumeAvailable ? (
            <a
              href={`/${profileData.resumeUrl}`}
              download="Curriculo_Wallace_Goncalves.pdf"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-bg-card/40 border border-border-subtle hover:border-accent-blue text-text-secondary hover:text-text-primary text-xs font-semibold transition-all duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
              aria-label="Baixar currículo profissional de Wallace Gonçalves em PDF"
            >
              <span className="text-accent-blue"><Download size={20} /></span>
              <div className="text-left leading-tight">
                <p className="text-[10px] text-text-muted font-bold uppercase">Currículo</p>
                <p className="text-xs text-text-secondary">Baixar PDF</p>
              </div>
            </a>
          ) : (
            <div
              title="O currículo estará disponível em breve"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-bg-card/20 border border-border-subtle/50 text-text-muted/50 text-xs font-semibold cursor-not-allowed select-none"
              aria-label="Baixar currículo profissional (Indisponível no momento)"
            >
              <span className="text-text-muted/40"><Download size={20} /></span>
              <div className="text-left leading-tight">
                <p className="text-[10px] text-text-muted/40 font-bold uppercase">Currículo</p>
                <p className="text-xs text-text-muted/50">Em breve</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
