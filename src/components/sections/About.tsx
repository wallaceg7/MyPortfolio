import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { 
  Server, 
  Activity, 
  Building2, 
  Workflow, 
  Database, 
  Wrench, 
  Cpu, 
  Binary, 
  ClipboardList 
} from 'lucide-react';

export const About: React.FC = () => {
  const expertAreas = [
    { name: "Desenvolvimento Backend", icon: <Server size={14} className="text-accent-blue" /> },
    { name: "Sistemas Hospitalares", icon: <Activity size={14} className="text-accent-cyan" /> },
    { name: "Aplicações Corporativas", icon: <Building2 size={14} className="text-accent-blue" /> },
    { name: "Integração de Sistemas", icon: <Workflow size={14} className="text-accent-cyan" /> },
    { name: "Banco de Dados", icon: <Database size={14} className="text-accent-blue" /> },
    { name: "Suporte Técnico", icon: <Wrench size={14} className="text-accent-cyan" /> },
    { name: "Automação Industrial", icon: <Cpu size={14} className="text-accent-blue" /> },
    { name: "Sistemas Embarcados", icon: <Binary size={14} className="text-accent-cyan" /> },
    { name: "Análise de Requisitos", icon: <ClipboardList size={14} className="text-accent-blue" /> },
  ];

  return (
    <section 
      id="about" 
      className="py-20 px-6 max-w-5xl mx-auto w-full relative"
      aria-label="Sobre mim e áreas de atuação"
    >
      <SectionTitle title="Sobre mim" subtitle="Perfil & Trajetória" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 items-start">
        
        {/* Left side: Bio */}
        <div className="lg:col-span-7 space-y-6 animate-fade-in text-left">
          <div className="space-y-5 text-text-secondary text-sm leading-relaxed">
            <p>
              Sou Analista de Sistemas formado em Engenharia da Computação, com experiência em desenvolvimento backend, integração de sistemas e suporte técnico. Trabalho com C# e .NET, PL/SQL, Node.js e React, criando soluções que otimizam processos internos, aumentam a performance e garantem estabilidade aos sistemas.
            </p>
            <p>
              Também tenho experiência com Java Swing e projetos desenvolvidos em Python, JavaScript e Ladder voltados à automação industrial. Minha formação e experiência reforçam minha capacidade analítica, meu raciocínio lógico e minha habilidade para resolver problemas.
            </p>
          </div>
        </div>

        {/* Right side: Areas of Expertise */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary text-left pb-2 border-b border-border-subtle/40 select-none">
            Áreas de Atuação
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {expertAreas.map((area, index) => (
              <div 
                key={index} 
                className="py-3 px-4 rounded-xl bg-bg-card/30 border border-border-subtle/85 hover:border-accent-blue/20 transition-all duration-300 flex items-center gap-3 text-left group"
              >
                <div className="shrink-0 p-1 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <span className="text-xs font-semibold text-text-secondary group-hover:text-text-primary transition-colors">
                  {area.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
