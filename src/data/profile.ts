export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  bio: string;
  bioSecondary: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  resumeUrl: string;
  avatarInitials: string;
}

export const profileData: Profile = {
  name: "Wallace Gonçalves",
  firstName: "Wallace",
  lastName: "Gonçalves",
  role: "Analista de Sistemas | Desenvolvedor Backend",
  tagline: "Olá, eu sou",
  bio: "Analista de Sistemas formado em Engenharia da Computação, com experiência em desenvolvimento backend, integração de sistemas e suporte técnico. Trabalho com C# e .NET, PL/SQL, Node.js e React, desenvolvendo soluções para otimizar processos internos, melhorar a performance e garantir a estabilidade dos sistemas.",
  bioSecondary: "Experiência com sistemas hospitalares, automação industrial e desenvolvimento de aplicações corporativas.",
  email: "wallacegoncalves0011@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/wallace-goncalves/",
  githubUrl: "https://github.com/wallaceg7",
  resumeUrl: "curriculo-wallace-goncalves.pdf",
  avatarInitials: "WG"
};
