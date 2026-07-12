export type ProjectCategory =
  | "backend"
  | "api"
  | "desktop"
  | "automation";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory;
  tags: string[]; // Tech labels shown on the compact card
  technologies: string[]; // Complete technologies list for modal details
  features: string[]; // Core features of the project
  repositoryUrl: string;
  demoUrl?: string;
  image?: string;
  featured: boolean;
  status: "Concluído" | "Projeto educacional" | "Estudo" | string;
  imagePlaceholderGradient: string; // Styling color scheme fallback
}

export const projectsData: Project[] = [
  {
    id: "emprestimo-livros",
    title: "Plataforma de Empréstimo de Livros",
    shortDescription: "Sistema web para gerenciamento de empréstimos de livros entre usuários, com operações de cadastro, consulta, edição e exclusão.",
    fullDescription: "Aplicação desenvolvida em C# e .NET para gerenciar empréstimos de livros entre usuários. O sistema permite cadastrar usuários e empréstimos, consultar registros, atualizar informações e excluir empréstimos, seguindo os princípios de uma aplicação CRUD.",
    category: "backend",
    tags: ["C#", ".NET", "Entity Framework", "SQL Server", "Swagger"],
    technologies: [
      "C#",
      ".NET",
      "ASP.NET MVC",
      "Entity Framework",
      "SQL Server",
      "Swagger",
      "MVC Architecture",
      "Bootstrap",
      "JavaScript",
      "HTML",
      "Entity Framework Migrations",
      "Logs"
    ],
    features: [
      "Cadastro e autenticação de usuários (Login) com controle de sessão",
      "Cadastro de empréstimos contendo recebedor, fornecedor, nome do livro e data",
      "Consulta detalhada de empréstimo por identificador único",
      "Listagem e visualização tabular completa de todos os empréstimos",
      "Edição, atualização e sincronização de dados de empréstimo",
      "Exclusão segura de registros",
      "Persistência relacional no SQL Server com abordagem Code-First",
      "Gerenciamento de alterações no banco via Entity Framework Migrations",
      "Documentação interativa e ambiente de testes com Swagger",
      "Armazenamento de senhas em formato seguro hash (criptografadas)",
      "Logs estruturados para depuração e auditoria de erros"
    ],
    repositoryUrl: "https://github.com/wallaceg7/EmprestimoLivros_AspNet",
    demoUrl: "",
    image: "/src/assets/projects/emprestimo-livros.svg",
    featured: true,
    status: "Concluído",
    imagePlaceholderGradient: "from-blue-600 to-indigo-900"
  },
  {
    id: "api-cadastro-livros",
    title: "API de Cadastro de Livros",
    shortDescription: "API REST para gerenciamento de livros e autores, com operações completas de cadastro, consulta, atualização e exclusão.",
    fullDescription: "API desenvolvida em C# e .NET para gerenciar livros e autores. O projeto implementa operações CRUD, utiliza DTOs para transferência de dados, Entity Framework para persistência e Swagger para documentação e testes dos endpoints.",
    category: "api",
    tags: ["C#", ".NET", "Entity Framework", "SQL Server", "Swagger"],
    technologies: [
      "C#",
      ".NET",
      "ASP.NET Web API",
      "Entity Framework",
      "SQL Server",
      "Swagger",
      "DTOs (Data Transfer Objects)",
      "Migrations",
      "Logs"
    ],
    features: [
      "Cadastro, listagem, consulta por ID, edição e exclusão de Livros",
      "Cadastro, listagem, consulta por ID, edição e exclusão de Autores",
      "Uso de DTOs (Data Transfer Objects) para desacoplar entidades e camadas de transporte",
      "Persistência relacional robusta em banco de dados SQL Server",
      "Mapeamento de tabelas automático via Entity Framework Core",
      "Documentação de endpoints de API e ambiente de testes interativo via Swagger",
      "Controle de modificação do banco de dados utilizando Migrations",
      "Rastreabilidade operacional por meio de Logs de servidor"
    ],
    repositoryUrl: "https://github.com/wallaceg7/WebApi-CRUD-livros",
    demoUrl: "",
    image: "/src/assets/projects/api-cadastro-livros.svg",
    featured: true,
    status: "Concluído",
    imagePlaceholderGradient: "from-teal-500 to-emerald-900"
  },
  {
    id: "whatsapp-bot",
    title: "WhatsApp Bot para Google Chrome",
    shortDescription: "Aplicação desktop em Java para automatizar o envio de mensagens pelo WhatsApp Web por meio da interação com o Google Chrome.",
    fullDescription: "Software desktop desenvolvido em Java, utilizando Swing para a interface gráfica e Selenium WebDriver para automatizar interações com o WhatsApp Web no navegador Google Chrome.",
    category: "automation",
    tags: ["Java", "Java Swing", "Selenium", "Automação"],
    technologies: [
      "Java",
      "Java Swing",
      "Selenium WebDriver",
      "Google Chrome",
      "Maven Dependency Management",
      "ChromeDriver Automation"
    ],
    features: [
      "Interface gráfica de usuário desktop nativa construída com Java Swing",
      "Automação e controle programático do navegador Chrome com Selenium WebDriver",
      "Identificação e mapeamento dinâmico de elementos por meio de seletores XPath",
      "Login via varredura física do QR Code do WhatsApp Web no navegador controlado",
      "Envio automatizado de mensagens de texto a contatos configurados",
      "Gerenciamento e leitura de lista de contatos em arquivos do projeto",
      "Acompanhamento do log e fluxo do robô diretamente no painel de console Swing",
      "Código estritamente acadêmico para demonstração de conceitos de automação"
    ],
    repositoryUrl: "https://github.com/wallaceg7/whatsapp-bot",
    demoUrl: "",
    image: "/src/assets/projects/whatsapp-bot.svg",
    featured: true,
    status: "Projeto educacional",
    imagePlaceholderGradient: "from-emerald-600 to-teal-950"
  }
];
