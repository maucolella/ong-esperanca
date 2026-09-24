# ONG Esperança

Plataforma web acadêmica para apresentar ações sociais da ONG Esperança, divulgar projetos, receber cadastros de voluntários e demonstrar práticas de desenvolvimento front-end, acessibilidade, versionamento e preparação para produção.

## Tecnologias

A aplicação utiliza exclusivamente tecnologias nativas do front-end:

- HTML5 semântico
- CSS3 (Design System, Grid, Flexbox e responsividade)
- JavaScript ES6 Modules (Vanilla JavaScript)
- Web Storage (`localStorage` e `sessionStorage`)
- Git e GitHub para versionamento e publicação

Não há React, Bootstrap, jQuery, Node.js como dependência da aplicação, NPM, CDN ou bibliotecas externas.

## Estrutura

```text
ong-esperanca/
├── index.html
├── README.md
├── RELATORIO_VALIDACAO.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── .gitignore
├── .github/
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── ISSUE_TEMPLATE/
├── css/
│   └── style.css
├── imagens/
│   ├── ong.png
│   ├── ong-600.webp
│   ├── ong-900.webp
│   └── ong-1200.webp
├── js/
│   ├── main.js
│   ├── router.js
│   ├── templates.js
│   ├── validacao.js
│   ├── storage.js
│   └── feedback.js
├── html/
│   ├── inicio.html
│   ├── projetos.html
│   └── cadastro.html
└── docs/
    ├── index.html
    ├── css/style.css
    ├── js/*.js
    └── imagens/
```


A pasta `html/` contém versões semânticas de referência. A aplicação de desenvolvimento utiliza `index.html` como entrada da SPA e renderiza o conteúdo no `<main id="app">`. A pasta `docs/` contém a versão de produção minificada e otimizada, pronta para publicação no GitHub Pages.

## Funcionalidades implementadas

- SPA com rotas `#inicio`, `#projetos` e `#cadastro`.
- Templates dinâmicos com Template Literals e `map()`.
- Grid de 12 colunas, Flexbox e cinco breakpoints (`480`, `768`, `1024`, `1280` e `1440px`).
- Menu hambúrguer e submenu acessível.
- Cards, badges, modal, alerta e toast.
- Formulário com validações nativas e JavaScript.
- Máscaras simples de CPF, telefone e CEP.
- Persistência somente de preferências não sensíveis: interesses, última rota e alto contraste.
- Modo de alto contraste persistente.
- Imagem responsiva com `srcset` em WebP e fallback PNG.

## Acessibilidade

Boas práticas aplicadas com base em WCAG 2.1:

- landmarks semânticos (`header`, `nav`, `main`, `section`, `footer`);
- hierarquia lógica de títulos;
- texto alternativo na imagem principal;
- labels associados aos controles do formulário;
- `role="status"` e `aria-live="polite"` para feedback dinâmico;
- `aria-expanded`, `aria-controls`, `aria-current` e `aria-pressed`;
- modal com `role="dialog"`, `aria-modal`, título e descrição associados;
- foco preso dentro do modal durante sua abertura e devolvido ao elemento de origem ao fechar;
- `aria-invalid` e `aria-describedby` nos erros de formulário;
- link para ir direto ao conteúdo principal;
- foco visível para navegação por teclado;
- suporte a `prefers-reduced-motion`;
- modo de alto contraste com preferência persistida.

## Imagens e performance

A imagem original enviada para o projeto possuía **3.09 MB**. A versão final usa variantes responsivas WebP:

| Arquivo | Tamanho aproximado |
| --- | ---: |
| `ong-600.webp` | 51 KB |
| `ong-900.webp` | 87 KB |
| `ong-1200.webp` | 124 KB |
| `ong.png` (fallback otimizado) | 419 KB |

Em navegadores modernos, o arquivo WebP adequado à viewport é selecionado automaticamente, reduzindo significativamente a transferência de dados.

## Minificação

O projeto não utiliza bundler. A estratégia de produção adotada é minificação direta dos arquivos HTML, CSS e JavaScript, preservando a arquitetura de módulos ES6 e sem adicionar dependências à aplicação. Na versão final deste repositório, a preparação conservadora para produção reduziu o conjunto principal de HTML, CSS e JavaScript de aproximadamente **43,7 KB para 34,1 KB**, uma redução de cerca de **22%**. O código-fonte legível permanece na raiz e a versão de produção está em `docs/`.

## Executando localmente

A aplicação usa módulos ES6. Para testes locais, abra a pasta em um servidor estático (por exemplo, Live Server do editor). Isso é apenas uma ferramenta de teste e não faz parte da tecnologia da aplicação.

Quando publicada no GitHub Pages, não é necessária instalação de dependências.

## Versionamento

Estratégia GitFlow:

- `main`: versão estável;
- `develop`: integração contínua;
- `feature/*`: novas funcionalidades;
- `hotfix/*`: correções urgentes.

Conventional Commits sugeridos:

- `chore: estrutura inicial do projeto`
- `feat: implementa navegação SPA por hash`
- `feat: adiciona templates dinâmicos de projetos`
- `feat: adiciona validação do formulário`
- `feat: adiciona persistência com localStorage`
- `feat: adiciona modo de alto contraste`
- `refactor: modulariza código JavaScript`
- `fix: corrige eventos após renderização da SPA`
- `docs: adiciona documentação do projeto`

A primeira release estável é documentada como **v1.0.0**.

> Observação: o ZIP não contém histórico Git artificial. Os commits, branches, issues, milestone e pull requests devem ser criados no GitHub durante o fluxo real de versionamento.

## GitHub Pages

Após publicar o repositório no GitHub:

1. acesse **Settings > Pages**;
2. em **Build and deployment**, selecione **Deploy from a branch**;
3. escolha a branch **main**;
4. selecione a pasta **/docs**;
5. salve e aguarde a URL pública.

Como a SPA utiliza navegação por hash, as rotas funcionam no GitHub Pages sem configuração especial de servidor.

## Privacidade

CPF, telefone, e-mail, endereço e demais dados do formulário **não são armazenados** no `localStorage`. A aplicação armazena apenas preferências simples do navegador.
