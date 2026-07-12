export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string; // Format: "YYYY-MM"
  endDate: string | null; // Format: "YYYY-MM" or null for present
  isCurrent: boolean;
  description: string;
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "analista-sistemas-jr",
    role: "Analista de Sistemas Jr.",
    company: "Uniube — Universidade de Uberaba",
    location: "Uberaba, Minas Gerais, Brasil",
    startDate: "2025-06",
    endDate: null,
    isCurrent: true,
    description: "Atuação como analista de sistemas hospitalares, com desenvolvimento, manutenção, integração e suporte a sistemas utilizados em ambiente hospitalar. Trabalho com análise de requisitos, correção de falhas, banco de dados, integrações e melhoria contínua das aplicações.",
    technologies: ["C#", ".NET", "PL/SQL", "Node.js", "React", "Banco de dados", "Integração de sistemas"]
  },
  {
    id: "analista-suporte-ti",
    role: "Analista de Suporte de TI",
    company: "Uniube — Universidade de Uberaba",
    location: "Uberaba, Minas Gerais, Brasil",
    startDate: "2024-07",
    endDate: "2025-06",
    isCurrent: false,
    description: "Suporte técnico a usuários, sistemas e infraestrutura de TI, diagnóstico e resolução de incidentes, acompanhamento de solicitações e apoio à continuidade dos serviços tecnológicos.",
    technologies: ["Suporte Técnico", "Infraestrutura de TI", "Sistemas Corporativos", "Diagnóstico de Incidentes"]
  },
  {
    id: "auxiliar-projetos-industriais",
    role: "Auxiliar de Projetos Industriais",
    company: "Jormary Automação Industrial",
    location: "Uberaba, Minas Gerais, Brasil",
    startDate: "2023-10",
    endDate: "2024-05",
    isCurrent: false,
    description: "Programação de controladores lógicos programáveis, interfaces homem-máquina, relatórios técnicos, sistemas supervisórios e bancos de dados. Desenvolvimento de scripts para automação de planilhas Google e aplicações internas em Python e Java. Manipulação de bancos Firebird, MySQL e SQL Server, além de suporte à manutenção de computadores.",
    technologies: ["CLP", "IHM", "Ladder", "Sistemas Supervisórios", "Python", "Java", "Automação de planilhas Google", "Firebird", "MySQL", "SQL Server", "Suporte Técnico"]
  },
  {
    id: "estagiario-automacao",
    role: "Estagiário",
    company: "Jormary Automação Industrial",
    location: "Uberaba, Minas Gerais, Brasil",
    startDate: "2023-03",
    endDate: "2023-10",
    isCurrent: false,
    description: "Participação em projetos de automação industrial, programação de CLPs e IHMs, elaboração de relatórios técnicos, desenvolvimento de sistemas supervisórios e atividades relacionadas a bancos de dados.",
    technologies: ["CLP", "IHM", "Sistemas Supervisórios", "Automação Industrial", "Banco de dados"]
  }
];
