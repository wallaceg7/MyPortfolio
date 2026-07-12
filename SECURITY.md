# Política de Segurança — Portfólio

Este documento detalha a política de segurança aplicada ao portfólio profissional de Wallace Gonçalves.

## Versões Suportadas

Apenas a versão ativa publicada no branch principal é mantida e recebe atualizações de segurança:

| Versão | Suportada |
| ------ | --------- |
| 1.0.x  | ✅ Sim     |

## Como Reportar uma Vulnerabilidade

Caso identifique alguma falha de segurança no site, por favor **não abra uma issue pública** no GitHub. Em vez disso, envie um e-mail descrevendo os detalhes do problema para:
**wallacegoncalves0011@gmail.com**

Responderemos o mais breve possível com a correção ou esclarecimento aplicável.

## Medidas de Segurança Implementadas

Como este é um portfólio de site estático compilado via Vite/React, a superfície de ataque é reduzida, mas as seguintes defesas ativas foram implementadas:

1. **Protocolo Estrito HTTPS**: Toda redireção externa é sanitizada via utilitário centralizado (`src/utils/security.ts`), restringindo a navegação a links seguros e bloqueando links dinâmicos como `javascript:`, `data:`, ou `vbscript:`.
2. **Prevenção de XSS**: Excluído qualquer uso de funções perigosas como `dangerouslySetInnerHTML`, `eval`, ou `innerHTML` para inserção de dados. O React cuida da renderização de textos de forma nativa e segura.
3. **Cabeçalhos de Segurança HTTP (CSP, Clickjacking e Referrer)**: Configurações preparadas e prontas para hosts como Vercel (`vercel.json`), Netlify (`netlify.toml` / `_headers`) e Cloudflare Pages (`_headers`).
4. **Sem Exposição de Dados Sensíveis**: Garantia de exclusão de chaves de API, segredos corporativos, caminhos de compilação locais do computador ou variáveis de ambiente expostas no build final.
5. **Navegação com Sandbox Acessível**: Todos os links externos utilizam o componente `<ExternalLink>` que força os atributos `target="_blank" rel="noopener noreferrer"` para proteger o contexto de navegação da aba de origem.
6. **Copiar E-mail Seguro**: A funcionalidade de cópia lê unicamente o valor fixo tipado nas configurações internas e previne falhas em ambientes sem HTTPS por meio de um fallback clássico e seguro.
