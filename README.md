# Currículo e Portfólio Interativo

Projeto didático completo para alunos iniciantes praticarem HTML5, CSS3, JavaScript puro e LocalStorage. O site apresenta informações pessoais, trajetória, habilidades, projetos e contato, além de três miniprojetos funcionais.

## Estrutura

```text
curriculo-js/
├── index.html, style.css, script.js e README.md
├── img/ (avatar e ilustrações SVG)
└── projetos/
    ├── contador/
    ├── lista-tarefas/
    └── calculadora/
```

Cada miniprojeto possui seus próprios arquivos `index.html`, `style.css` e `script.js`.

## Como abrir no VS Code

1. Abra o VS Code.
2. Clique em **Arquivo > Abrir Pasta** e escolha `curriculo-js`.
3. Para executar sem extensão, dê dois cliques em `index.html` ou abra-o no navegador.

### Usando o Live Server

1. Abra a área **Extensões** do VS Code.
2. Pesquise por **Live Server**, de Ritwick Dey, e clique em **Instalar**.
3. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.

Não é necessário instalar Node.js, bibliotecas ou banco de dados.

## Como personalizar

- **Nome e informações:** use o botão **Editar informações** no site. Os dados ficam no LocalStorage. Para alterar os valores iniciais, edite `dadosPadrao` no começo de `script.js`.
- **Foto:** substitua `img/perfil.svg` por outra imagem com o mesmo nome ou altere o caminho no `index.html`.
- **Cores:** altere as variáveis dentro de `:root` no início de `style.css`.
- **Habilidades:** adicione um novo objeto ao array `habilidades` em `script.js`, informando nome, porcentagem e categoria.
- **Linha do tempo:** use o formulário da página ou edite o array `eventosPadrao` em `script.js`.
- **Projetos:** adicione um objeto ao array `projetos`. Inclua título, imagem, descrição, tecnologias, link, GitHub, data e aprendizados. Se criar uma nova pasta, mantenha HTML, CSS e JavaScript separados.

Para apagar personalizações salvas e voltar ao exemplo inicial, abra as ferramentas do navegador, entre em **Aplicativo/Armazenamento > LocalStorage** e limpe os dados do site.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie todos os arquivos da pasta `curriculo-js`.
2. No repositório, abra **Settings > Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `main`, pasta `/ (root)` e clique em **Save**.
5. Aguarde alguns minutos e abra o endereço informado pelo GitHub.

## Conceitos de JavaScript praticados

- variáveis com `const` e `let`;
- arrays e objetos;
- funções e eventos;
- `forEach`, `filter` e métodos de arrays;
- manipulação do DOM;
- criação dinâmica de elementos;
- validação de formulários;
- modais, filtros, menu responsivo e tema;
- animações com `IntersectionObserver`;
- persistência com LocalStorage.

Os comentários e títulos de seção em `script.js` ajudam a localizar cada funcionalidade. Experimente mudar uma parte por vez e teste no navegador.

## Atividades sugeridas

1. Alterar o nome e a descrição.
2. Trocar a foto de perfil.
3. Adicionar uma habilidade.
4. Adicionar um item na linha do tempo.
5. Criar um novo projeto.
6. Alterar as cores do site.
7. Implementar um novo filtro.
8. Adicionar novas validações ao formulário.
9. Criar outra funcionalidade usando LocalStorage.
10. Publicar o currículo no GitHub Pages.

## Ideias de evolução

Criar o aplicativo de clima, permitir editar habilidades, adicionar busca de projetos, criar uma galeria de certificados, melhorar a acessibilidade e permitir exportar o currículo para impressão.
