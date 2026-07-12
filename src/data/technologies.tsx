import React from 'react';
import { 
  SiSharp, 
  SiDotnet, 
  SiGo, 
  SiNodedotjs, 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiPostgresql, 
  SiCplusplus, 
  SiDocker, 
  SiSwagger, 
  SiPython, 
  SiMysql
} from 'react-icons/si';
import { 
  FaJava, 
  FaDatabase, 
  FaMicrochip, 
  FaDesktop, 
  FaNetworkWired 
} from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

export interface Technology {
  id: string;
  name: string;
  color: string; // Brand hex color
  icon: React.ReactNode;
  observation?: 'uso profissional' | 'experiência' | 'em estudo' | 'conhecimento em sistemas embarcados' | string;
}

export interface TechnologyCategory {
  title: string;
  items: Technology[];
}

export const technologiesData: TechnologyCategory[] = [
  {
    title: "Backend",
    items: [
      { id: "csharp", name: "C#", color: "#854cc7", icon: <SiSharp />, observation: "uso profissional" },
      { id: "dotnet", name: ".NET", color: "#512bd4", icon: <SiDotnet />, observation: "uso profissional" },
      { id: "golang", name: "Golang", color: "#00ADD8", icon: <SiGo />, observation: "em estudo" },
      { id: "nodejs", name: "Node.js", color: "#339933", icon: <SiNodedotjs />, observation: "uso profissional" },
      { id: "java", name: "Java", color: "#ED8B00", icon: <FaJava />, observation: "experiência" }
    ]
  },
  {
    title: "Frontend",
    items: [
      { id: "react", name: "React", color: "#61DAFB", icon: <SiReact />, observation: "uso profissional" },
      { id: "typescript", name: "TypeScript", color: "#3178C6", icon: <SiTypescript />, observation: "experiência" },
      { id: "javascript", name: "JavaScript", color: "#F7DF1E", icon: <SiJavascript />, observation: "experiência" },
      { id: "html5", name: "HTML5", color: "#E34F26", icon: <SiHtml5 />, observation: "experiência" }
    ]
  },
  {
    title: "Banco de Dados",
    items: [
      { id: "sql", name: "SQL", color: "#00758F", icon: <FaDatabase />, observation: "experiência" },
      { id: "plsql", name: "PL/SQL", color: "#EA1B22", icon: <FaDatabase />, observation: "uso profissional" },
      { id: "postgresql", name: "PostgreSQL", color: "#4169E1", icon: <SiPostgresql />, observation: "experiência" },
      { id: "oracle", name: "Oracle", color: "#EA1B22", icon: <FaDatabase />, observation: "experiência" },
      { id: "sqlserver", name: "SQL Server", color: "#CC292B", icon: <FaDatabase />, observation: "experiência" },
      { id: "mysql", name: "MySQL", color: "#00758F", icon: <SiMysql />, observation: "experiência" },
      { id: "firebird", name: "Firebird", color: "#E32F2F", icon: <FaDatabase />, observation: "experiência" }
    ]
  },
  {
    title: "Desenvolvimento e Infraestrutura",
    items: [
      { id: "cpp", name: "C++", color: "#00599C", icon: <SiCplusplus />, observation: "conhecimento em sistemas embarcados" },
      { id: "docker", name: "Docker", color: "#2496ED", icon: <SiDocker />, observation: "experiência" },
      { id: "vscode", name: "VS Code", color: "#007ACC", icon: <VscVscode />, observation: "experiência" },
      { id: "swagger", name: "Swagger", color: "#85EA2D", icon: <SiSwagger />, observation: "experiência" },
      { id: "python", name: "Python", color: "#3776AB", icon: <SiPython />, observation: "experiência" }
    ]
  },
  {
    title: "Tecnologias Adicionais",
    items: [
      { id: "javaswing", name: "Java Swing", color: "#ED8B00", icon: <FaJava />, observation: "experiência" },
      { id: "ladder", name: "Ladder", color: "#FF5400", icon: <FaNetworkWired />, observation: "experiência" },
      { id: "clp", name: "CLP", color: "#94A3B8", icon: <FaMicrochip />, observation: "conhecimento em sistemas embarcados" },
      { id: "ihm", name: "IHM", color: "#00599C", icon: <FaDesktop />, observation: "conhecimento em sistemas embarcados" }
    ]
  }
];

export const mainTechnologies: Omit<Technology, 'icon'>[] = [
  { id: "csharp", name: "C#", color: "#854cc7", observation: "uso profissional" },
  { id: "dotnet", name: ".NET", color: "#512bd4", observation: "uso profissional" },
  { id: "golang", name: "Golang", color: "#00ADD8", observation: "em estudo" },
  { id: "cpp", name: "C++", color: "#00599C", observation: "conhecimento em sistemas embarcados" },
  { id: "react", name: "React", color: "#61DAFB", observation: "uso profissional" },
  { id: "nodejs", name: "Node.js", color: "#339933", observation: "uso profissional" },
  { id: "plsql", name: "PL/SQL", color: "#EA1B22", observation: "uso profissional" },
  { id: "sql", name: "SQL", color: "#00758F", observation: "experiência" }
];
