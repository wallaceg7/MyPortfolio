# Portfólio Profissional — Wallace Gonçalves

Este é o projeto de portfólio pessoal e profissional de Wallace Gonçalves, Engenheiro da Computação, Analista de Sistemas e Desenvolvedor Backend. O site foi construído sob uma identidade visual *dark mode* minimalista, moderna e tecnológica, com foco em alta performance, acessibilidade (WCAG AA), responsividade e SEO.

## 🛠️ Stack Utilizada

- **React 19** com **TypeScript**
- **Vite** (bundler ultrarrápido)
- **Tailwind CSS v4** (estilização baseada em utility tokens e plugins no CSS)
- **React Icons** (`si`, `fa`, `vsc`) para carregamento de logotipos oficiais com cores de marca
- **Lucide React** (para ícones gerais da interface)
- **Oxlint** (análise estática de código de alta performance)

---

## 📁 Estrutura de Diretórios

```text
src/
├── assets/          # Imagens e mídias estáticas (foto de perfil)
├── components/      # Componentes React
│   ├── layout/      # Sidebar, MobileHeader, Footer
│   ├── sections/    # Hero, About, Experience, Education, Technologies, Projects, Certifications, Contact
│   └── ui/          # BrandIcons, ProjectCard, SectionTitle
├── data/            # Arquivos de dados e personalizações
│   ├── certifications.ts
│   ├── education.ts
│   ├── experience.ts
│   ├── profile.ts
│   ├── projects.ts
│   └── technologies.tsx
├── utils/           # Utilitários (dateUtils.ts para cálculo dinâmico de período)
├── styles/          # Importações globais do Tailwind v4
│   └── tailwind.css
├── App.tsx          # Loop de renderização e IntersectionObserver para tracking de rolagem
└── main.tsx         # Arquivo de bootstrap do React
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
Instale o **Node.js** (versão 18 ou superior).

### 1. Instalar as Dependências
Abra o terminal no diretório do projeto e execute:
```bash
npm install
```
*(Nota: No Windows PowerShell, se houver problemas de permissão com scripts do NPM, utilize `npm.cmd install`)*.

### 2. Iniciar o Servidor de Desenvolvimento
Inicie o servidor de testes:
```bash
npm run dev
```
Abra o endereço retornado (geralmente [http://localhost:5173/](http://localhost:5173/)) no navegador.

### 3. Gerar a Build de Produção
Para compilar e minificar o projeto final na pasta `/dist`:
```bash
npm run build
```

---

## ✍️ Onde Editar Seus Dados

Todo o conteúdo pessoal está isolado na pasta `src/data/` para facilitar atualizações:

1. **Dados Gerais e Contato**: Edite em [`profile.ts`](file:///C:/Users/walla/OneDrive/Documentos/Projeto%20Catalago/src/data/profile.ts).
2. **Histórico Profissional**: Modifique em [`experience.ts`](file:///C:/Users/walla/OneDrive/Documentos/Projeto%20Catalago/src/data/experience.ts). As durações dos cargos são calculadas dinamicamente de forma automática pelo arquivo `src/utils/dateUtils.ts`.
3. **Formação Acadêmica**: Altere em [`education.ts`](file:///C:/Users/walla/OneDrive/Documentos/Projeto%20Catalago/src/data/education.ts).
4. **Tecnologias**: Cadastre novas linguagens, observações (como *"uso profissional"*) e seus ícones em [`technologies.tsx`](file:///C:/Users/walla/OneDrive/Documentos/Projeto%20Catalago/src/data/technologies.tsx).
5. **Projetos**: Gerencie em [`projects.ts`](file:///C:/Users/walla/OneDrive/Documentos/Projeto%20Catalago/src/data/projects.ts). Caso o projeto não possua repositório/deploy público, deixe os campos `repositoryUrl` e `demoUrl` em branco `""` para desabilitar o link no card de maneira acessível.
6. **Certificações**: Insira novas credenciais e URLs de emissão em [`certifications.ts`](file:///C:/Users/walla/OneDrive/Documentos/Projeto%20Catalago/src/data/certifications.ts).

---

## ⚠️ Dados Ainda Pendentes

Os seguintes dados são provisórios ou estão ausentes e devem ser inseridos/substituídos por você:

1. **Currículo Profissional (PDF)**:
   - Adicione o PDF do seu currículo na pasta `/public/` com o nome exato **`curriculo-wallace-goncalves.pdf`**.
   - Assim que o arquivo for detectado e colocado na pasta, ative o botão de download mudando a constante `isResumeAvailable = true` nos arquivos de componente [`Hero.tsx`](file:///C:/Users/walla/OneDrive/Documentos/Projeto%20Catalago/src/components/sections/Hero.tsx#L9) e [`Contact.tsx`](file:///C:/Users/walla/OneDrive/Documentos/Projeto%20Catalago/src/components/sections/Contact.tsx#L10).
2. **URL Canônica Final**:
   - Altere a URL nos metadados de compartilhamento (canonical, open graph, sitemap) de `https://wallace.dev/` para o domínio real que você utilizar (como seu subdomínio do GitHub Pages `https://wallaceg7.github.io/`).
3. **Foto Profissional**:
   - Salve sua foto de perfil em formato circular/quadrado na pasta `/src/assets/` com o nome **`profile.webp`**. O site ativará a foto no cabeçalho automaticamente (caso não exista, continuará exibindo o avatar visual com as iniciais "WG").

---

## 📂 Projetos Cadastrados

Os três principais projetos de destaque do portfólio foram importados diretamente dos repositórios públicos de Wallace Gonçalves:

### 1. Plataforma de Empréstimo de Livros
- **Linguagem Principal**: C#
- **Tecnologias**: .NET, ASP.NET MVC, Entity Framework Core, SQL Server, Swagger, Bootstrap, JS.
- **Repositório**: [EmprestimoLivros_AspNet](https://github.com/wallaceg7/EmprestimoLivros_AspNet)

### 2. API de Cadastro de Livros
- **Linguagem Principal**: C#
- **Tecnologias**: .NET, ASP.NET Web API, Entity Framework Core, SQL Server, Swagger, DTOs.
- **Repositório**: [WebApi-CRUD-livros](https://github.com/wallaceg7/WebApi-CRUD-livros)

### 3. WhatsApp Bot para Google Chrome
- **Linguagem Principal**: Java
- **Tecnologias**: Java Swing, Selenium WebDriver, Google Chrome, Maven.
- **Repositório**: [whatsapp-bot](https://github.com/wallaceg7/whatsapp-bot)

As ilustrações vetorizadas em formato SVG desses projetos estão salvas em `/src/assets/projects/` (`emprestimo-livros.svg`, `api-cadastro-livros.svg`, `whatsapp-bot.svg`).

---

## 🌐 Publicação (Deploy)

Você pode publicar este site de forma totalmente gratuita em plataformas como:

### GitHub Pages
1. Instale a dependência de deploy: `npm install -D gh-pages`.
2. Configure seu `base` no arquivo `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/nome-do-repositorio/',
     plugins: [react(), tailwindcss()],
   })
   ```
3. Adicione estes scripts em `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Execute `npm run deploy`.

### Vercel / Netlify
Basta conectar seu repositório do GitHub e configurar:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- A publicação é automática a cada alteração na branch `main`.

---

## 🔒 Segurança

Como a aplicação é um site estático compilado via React e Vite, não existe backend ativo nem armazenamento de dados dinâmicos de usuários. Ainda assim, o projeto segue as melhores práticas de segurança da OWASP para aplicações frontend:

### 1. Política de Controle de Recursos (Content Security Policy)
O site foi configurado para suportar cabeçalhos de segurança restritivos. Não são permitidos scripts ou estilos externos não mapeados.
- **CSP Implementada**:
  `default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests`
- **Clickjacking**: O cabeçalho `X-Frame-Options: DENY` e a diretiva `frame-ancestors 'none'` previnem a incorporação do portfólio em iframes de terceiros.
- **Vazamento de Referrer**: Configurado `Referrer-Policy: strict-origin-when-cross-origin` para limitar o compartilhamento de dados de navegação em cliques externos.
- **Permissions-Policy**: Recursos de hardware desnecessários (câmera, microfone, localização, bluetooth) foram bloqueados no cabeçalho.

### 2. Validação e Sanitização de Links Externos
Todos os redirecionamentos externos e links de credenciais passam pelo utilitário centralizado [`security.ts`](file:///C:/Users/walla/OneDrive/Documentos/Projeto%20Catalago/src/utils/security.ts) e pelo componente [`ExternalLink.tsx`](file:///C:/Users/walla/OneDrive/Documentos/Projeto%20Catalago/src/components/ui/ExternalLink.tsx).
- Links inválidos ou com esquemas inseguros (ex: `javascript:`, `data:`, `vbscript:`) não são renderizados.
- Apenas o protocolo seguro `https:` e o `mailto:` (específico para e-mail) são permitidos.
- Todos os links externos carregam os atributos `target="_blank" rel="noopener noreferrer"` para evitar ataques de manipulação de contexto (`tabnabbing`).

### 3. Proteção contra XSS
O código foi auditado e não faz uso de inserções diretas de HTML, como `dangerouslySetInnerHTML`, `innerHTML`, `document.write` ou funções de execução dinâmica (`eval`, `new Function`). Todo o texto é tratado e escapado pelo React nativamente.

### 4. Configuração nos Provedores de Hospedagem
Arquivos de configuração foram incluídos na raiz do projeto para aplicar os cabeçalhos de segurança automaticamente no deploy:
- **Netlify / Cloudflare**: Configurado via [`netlify.toml`](file:///C:/Users/walla/OneDrive/Documentos/Projeto%20Catalago/netlify.toml) e pelo arquivo [`_headers`](file:///C:/Users/walla/OneDrive/Documentos/Projeto%20Catalago/public/_headers).
- **Vercel**: Configurado via [`vercel.json`](file:///C:/Users/walla/OneDrive/Documentos/Projeto%20Catalago/vercel.json).
