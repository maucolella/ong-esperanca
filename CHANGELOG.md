# Changelog

Todas as alterações relevantes deste projeto são documentadas aqui.
O projeto segue Semantic Versioning (SemVer) e utiliza Conventional Commits como referência.

## [1.0.0] - 2026-09-24

### Adicionado
- SPA com navegação por hash.
- Templates dinâmicos para Início, Projetos e Cadastro.
- Grid de 12 colunas, Flexbox e cinco breakpoints responsivos.
- Formulário com validação HTML5, JavaScript e máscaras de CPF, telefone e CEP.
- Persistência não sensível com `localStorage` para interesses, última rota e alto contraste.
- Menu hambúrguer, submenu, modal, toast, badge e alerta de sucesso.
- Recursos de acessibilidade: landmarks, skip link, foco visível, WAI-ARIA, `aria-live`, `aria-invalid`, foco preso no modal e movimento reduzido.
- Modo de alto contraste persistente.
- Imagem principal responsiva em WebP com fallback PNG otimizado.
- Documentação para GitFlow, GitHub Pages e práticas de produção.

### Otimizado
- Imagem principal original de aproximadamente 3,24 MB substituída por variantes WebP responsivas e fallback PNG otimizado.
- Preparação para minificação de HTML, CSS e JavaScript sem bundler ou frameworks.
