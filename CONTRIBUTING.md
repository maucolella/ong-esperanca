# Contribuindo

## Fluxo de branches

- `main`: versão estável e pronta para produção.
- `develop`: integração do desenvolvimento.
- `feature/*`: novas funcionalidades criadas a partir de `develop`.
- `hotfix/*`: correções urgentes criadas a partir de `main`.

## Commits

Use mensagens curtas seguindo Conventional Commits:

- `feat:` nova funcionalidade
- `fix:` correção
- `docs:` documentação
- `refactor:` reorganização sem mudança funcional
- `chore:` manutenção

## Pull requests

Antes de integrar uma branch:
1. teste navegação e formulário;
2. valide teclado e foco;
3. confirme que não há dados pessoais no `localStorage`;
4. revise acessibilidade e responsividade;
5. descreva claramente o que foi alterado.
