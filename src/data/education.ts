export interface EducationItem {
  id: string;
  course: string;
  institution?: string;
  type?: string;
  period?: string;
  status: 'Concluído' | 'Concluída' | 'Em andamento';
}

export const educationData: EducationItem[] = [
  {
    id: "especializacao-redes",
    course: "Especialização em Estrutura e Gestão de Redes de Computadores",
    institution: "UNINTER — Centro Universitário Internacional",
    type: "Pós-graduação lato sensu",
    period: "Março de 2025 — Setembro de 2025",
    status: "Concluída"
  },
  {
    id: "especializacao-ia-dados",
    course: "Especialização em Ciências de Dados e Inteligência Artificial",
    institution: "UNINTER — Centro Universitário Internacional",
    type: "Pós-graduação lato sensu",
    period: "Setembro de 2024 — Março de 2025",
    status: "Concluída"
  },
  {
    id: "engenharia-computacao",
    course: "Engenharia de Computação",
    institution: "Uniube — Universidade de Uberaba",
    type: "Bacharelado",
    period: "Fevereiro de 2018 — Dezembro de 2023",
    status: "Concluído"
  }
];
