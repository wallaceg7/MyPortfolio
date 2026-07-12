export interface Certification {
  id: string;
  name: string;
  institution: string;
  issueDate?: string; // Optional since one is not provided
  credentialUrl: string;
}

export const certificationsData: Certification[] = [
  {
    id: "network-defense-cisco",
    name: "Network Defense",
    institution: "Cisco",
    issueDate: "Abril de 2025",
    credentialUrl: "https://www.credly.com/badges/1758600c-a08f-4b42-8096-9d2835158cb8/linked_in_profile"
  },
  {
    id: "arquitetura-redes-udemy",
    name: "Arquitetura de Redes",
    institution: "Udemy (Gabriel Torres)",
    issueDate: "Fevereiro de 2025",
    credentialUrl: "https://www.udemy.com/certificate/UC-ebd0d2c4-d995-41ed-8e9a-83857b1a1dd6/"
  },
  {
    id: "java-jdbc-alura",
    name: "Java e JDBC: trabalhando com um banco de dados",
    institution: "Alura",
    issueDate: "Setembro de 2023",
    credentialUrl: "https://cursos.alura.com.br/user/wallaceGoncalves07/course/java-jdbc-banco-dados/certificate"
  },
  {
    id: "csharp-oo-alura",
    name: "C# com Orientação a Objetos",
    institution: "Alura",
    issueDate: "Março de 2023",
    credentialUrl: "https://cursos.alura.com.br/user/wallaceGoncalves07/degree-c-sharp-orientacao-objetos-v519337-519337/certificate"
  },
  {
    id: "sql-mysql-alura",
    name: "SQL com MySQL: manipule e consulte dados",
    institution: "Alura",
    issueDate: "Janeiro de 2023",
    credentialUrl: "https://cursos.alura.com.br/user/wallaceGoncalves07/course/mysql-manipule-dados-com-sql/certificate"
  },
  {
    id: "fundamentos-informatica-ibsec",
    name: "Fundamentos em Informática",
    institution: "IBSEC — Instituto Brasileiro de Cibersegurança",
    credentialUrl: "https://certs.ibsec.com.br/?cert_hash=ac0a4d67a3361c10"
  }
];
