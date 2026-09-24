# Relatório de validação do pacote final

## Escopo revisado

O pacote foi consolidado com base nas atividades realizadas ao longo das quatro experiências práticas.

## Funcionalidades confirmadas

- HTML5 semântico e SPA por hash.
- CSS3 com Design System, Grid de 12 colunas, Flexbox e cinco breakpoints.
- JavaScript puro modular com roteamento, templates, validação, persistência e feedback.
- Formulário com `required`, `type`, `pattern`, máscaras simples e mensagens de erro acessíveis.
- `localStorage` somente para preferências não sensíveis.
- Menu hambúrguer, submenu, cards, badge, modal, alerta e toast.
- Alto contraste funcional e persistente.
- Navegação por teclado, foco visível, skip link, WAI-ARIA e foco preso no modal.
- Suporte a `prefers-reduced-motion`.
- Imagens responsivas WebP com fallback PNG otimizado.
- Templates de Issue e Pull Request para uso no GitHub.
- README, CHANGELOG e CONTRIBUTING.

## Validação de JavaScript

Todos os módulos JavaScript de desenvolvimento e produção foram verificados com `node --check` sem erros de sintaxe.

## Minificação

Arquivos principais avaliados: `index.html`, `css/style.css` e módulos `js/*.js`.

- Fonte legível: aproximadamente 43,7 KB.
- Produção em `docs/`: aproximadamente 34,1 KB.
- Redução aproximada: **22%**.

A minificação foi feita sem bundler e sem introduzir dependências na aplicação.

## Otimização da imagem principal

- Original recebido: aproximadamente 3,24 MB.
- `ong-600.webp`: aproximadamente 51 KB.
- `ong-900.webp`: aproximadamente 87 KB.
- `ong-1200.webp`: aproximadamente 124 KB.
- Fallback `ong.png`: aproximadamente 419 KB.

O navegador escolhe a variante WebP mais adequada à viewport por `srcset`.

## Itens que dependem do GitHub e devem ser concluídos pelo autor

O ZIP não contém histórico Git artificial. Para concluir a atividade no GitHub, ainda é necessário:

1. publicar o repositório;
2. criar/usar `develop` e `feature/*` conforme o fluxo real;
3. registrar commits reais com Conventional Commits;
4. criar Issues, Milestone e Pull Requests reais;
5. criar a tag/release `v1.0.0` após validação;
6. ativar GitHub Pages em `main` + `/docs`;
7. validar a URL pública final.
