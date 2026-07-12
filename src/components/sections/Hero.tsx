import React, { useState } from 'react';
import { ArrowRight, Download, User as UserIcon } from 'lucide-react';
import { profileData } from '../../data/profile';
import { mainTechnologies } from '../../data/technologies';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(true); // Default to true since photo does not exist yet
  const profileImgPath = '/src/assets/profile.webp';
  
  // Set to true once the real PDF is placed in public/curriculo-wallace-goncalves.pdf
  const isResumeAvailable = false; 

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-between pt-24 md:pt-32 pb-12 px-6 relative overflow-hidden"
      aria-label="Introdução e Resumo Profissional"
    >
      {/* Background glow effects */}
      <div className="glow-spot top-1/4 right-10 animate-pulse-glow" aria-hidden="true" />
      <div className="glow-spot bottom-1/4 left-10" aria-hidden="true" style={{ animationDelay: '1.5s' }} />

      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-5xl mx-auto w-full z-10 my-auto">
        
        {/* Bio information */}
        <div className="flex-1 text-left animate-fade-in">
          <span className="text-accent-cyan text-sm font-semibold tracking-wider uppercase mb-3 block select-none">
            {profileData.tagline}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-text-primary tracking-tight leading-tight select-none mb-3">
            {profileData.name}
          </h1>
          <h2 className="text-lg md:text-xl font-bold text-accent-blue tracking-wide mb-6">
            {profileData.role}
          </h2>
          <div className="space-y-4 max-w-2xl mb-8">
            <p className="text-text-secondary text-base leading-relaxed">
              {profileData.bio}
            </p>
            <p className="text-accent-cyan/95 text-xs font-semibold uppercase tracking-wider">
              {profileData.bioSecondary}
            </p>
          </div>

          {/* Action triggers */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3.5 bg-accent-blue hover:bg-accent-blue/95 text-text-primary font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-accent-blue/20 hover:shadow-accent-blue/35 hover:-translate-y-0.5 flex items-center gap-2 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan cursor-pointer"
            >
              <span>Ver projetos</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => handleScrollTo('about')}
              className="px-6 py-3.5 bg-bg-card hover:bg-bg-card/85 text-text-secondary hover:text-text-primary border border-border-subtle hover:border-accent-blue font-semibold text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan cursor-pointer"
            >
              <UserIcon size={16} />
              <span>Sobre mim</span>
            </button>

            {isResumeAvailable ? (
              <a
                href={`/${profileData.resumeUrl}`}
                download="Curriculo_Wallace_Goncalves.pdf"
                className="px-6 py-3.5 bg-transparent hover:bg-bg-card text-text-secondary hover:text-text-primary border border-border-subtle font-semibold text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
                aria-label="Baixar currículo de Wallace Gonçalves em PDF"
              >
                <Download size={16} />
                <span>Baixar CV</span>
              </a>
            ) : (
              <button
                disabled
                title="O currículo estará disponível em breve"
                className="px-6 py-3.5 bg-transparent text-text-muted/60 border border-border-subtle/50 font-semibold text-sm rounded-xl flex items-center gap-2 cursor-not-allowed select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-cyan"
                aria-label="Baixar currículo (Indisponível no momento)"
              >
                <Download size={16} />
                <span>Baixar CV (Em breve)</span>
              </button>
            )}
          </div>
        </div>

        {/* Profile Image with Fallback Initials */}
        <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 relative flex items-center justify-center select-none animate-fade-in-up">
          {/* Animated decorative outer border */}
          <div className="absolute inset-0 rounded-full border border-dashed border-accent-cyan/30 animate-spin" style={{ animationDuration: '60s' }} />
          <div className="absolute inset-2 rounded-full border border-accent-blue/40 animate-pulse" />
          
          <div className="w-[88%] h-[88%] rounded-full overflow-hidden border-2 border-border-subtle bg-bg-card flex items-center justify-center relative shadow-xl shadow-black/50">
            {!imgError ? (
              <img
                src={profileImgPath}
                alt="Foto de perfil de Wallace Gonçalves"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            ) : (
              // Premium WG Initials visual fallback
              <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-bg-card to-bg-sidebar text-text-primary relative">
                <span className="text-4xl md:text-5xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue">
                  {profileData.avatarInitials}
                </span>
                <span className="text-[9px] text-text-muted mt-1.5 uppercase tracking-widest font-semibold font-mono">
                  &lt;Backend /&gt;
                </span>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Technologies Horizontal Marquee */}
      <div className="w-full max-w-5xl mx-auto mt-16 md:mt-24 border-t border-border-subtle pt-8 overflow-hidden z-10 select-none">
        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-text-muted mb-6">
          Tecnologias em Foco
        </p>
        
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 before:bg-gradient-to-r before:from-bg-deep before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 after:bg-gradient-to-l after:from-bg-deep after:to-transparent after:z-10">
          <div className="flex w-max animate-marquee">
            {/* Render tech icons list twice for seamless infinite scrolling */}
            {[...mainTechnologies, ...mainTechnologies].map((tech, idx) => (
              <div 
                key={`${tech.id}-${idx}`} 
                className="flex items-center gap-2.5 mx-8 py-2 px-4 rounded-xl bg-bg-card/40 border border-border-subtle/50 hover:border-accent-blue/30 transition-colors duration-300"
              >
                {/* Visual marker in marquee */}
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tech.color }} />
                <span className="text-xs font-bold text-text-primary">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
