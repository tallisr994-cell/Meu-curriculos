// ========================================
// DADOS PESSOAIS E LOCALSTORAGE
// ========================================
const dadosPadrao = {
  nome: "Tallis Rafael",
  cargo: "Desenvolvedor de sites",
  cidade: "Juiz De fora ",
  curso: "Desenvolvimento Web",
  objetivo: "Primeira oportunidade em tecnologia",
  descricao:
    "sou um adolescente de 17 anos,que procura novas oportunidades para aprendizado, e quero fazer diferente que outros programadores mostrando que estou preparado para qualquer situação.",
};
let dadosPessoais =
  JSON.parse(localStorage.getItem("dadosPessoais")) || dadosPadrao;
function salvarNoNavegador(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}
function atualizarDadosNaTela() {
  document.getElementById("nome-hero").textContent = dadosPessoais.nome;
  document.getElementById("nome-rodape").textContent = dadosPessoais.nome;
  document.getElementById("descricao-hero").textContent =
    dadosPessoais.descricao;
  document.getElementById("descricao-sobre").textContent =
    dadosPessoais.descricao;
  document.getElementById("info-cidade").textContent = dadosPessoais.cidade;
  document.getElementById("contato-cidade").textContent = dadosPessoais.cidade;
  document.getElementById("info-curso").textContent = dadosPessoais.curso;
  document.getElementById("info-objetivo").textContent = dadosPessoais.objetivo;
}

// ========================================
// MENU E ROLAGEM
// ========================================
const botaoMenu = document.getElementById("botao-menu"),
  menu = document.getElementById("menu");
botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", menu.classList.contains("aberto"));
});
document
  .querySelectorAll(".menu a")
  .forEach((link) =>
    link.addEventListener("click", () => menu.classList.remove("aberto")),
  );
const secoes = document.querySelectorAll("main section[id]");
window.addEventListener("scroll", () => {
  let id = "inicio";
  secoes.forEach((secao) => {
    if (scrollY >= secao.offsetTop - 160) id = secao.id;
  });
  document
    .querySelectorAll(".menu a")
    .forEach((link) =>
      link.classList.toggle("ativo", link.getAttribute("href") === "#" + id),
    );
});

// ========================================
// TEMA
// ========================================
const botaoTema = document.getElementById("botao-tema");
function aplicarTema(tema) {
  document.body.classList.toggle("escuro", tema === "escuro");
  botaoTema.textContent = tema === "escuro" ? "☀️" : "🌙";
  botaoTema.title = tema === "escuro" ? "Ativar tema claro" : "Ativar tema escuro";
  botaoTema.setAttribute("aria-label", botaoTema.title);
  localStorage.setItem("tema", tema);
}
botaoTema.addEventListener("click", () =>
  aplicarTema(document.body.classList.contains("escuro") ? "claro" : "escuro"),
);
aplicarTema(localStorage.getItem("tema") || "claro");

// ========================================
// EFEITO DE DIGITAÇÃO
// ========================================
const cargos = [
  dadosPessoais.cargo,
  "Estudante de programação",
  "Desenvolvedor iniciante",
  "Futuro profissional de tecnologia",
];
let indiceCargo = 0,
  indiceLetra = 0,
  apagando = false;
function digitarCargo() {
  const atual = cargos[indiceCargo];
  document.getElementById("texto-digitacao").textContent = atual.slice(
    0,
    indiceLetra,
  );
  if (!apagando) {
    indiceLetra++;
    if (indiceLetra > atual.length) {
      apagando = true;
      setTimeout(digitarCargo, 1300);
      return;
    }
  } else {
    indiceLetra--;
    if (indiceLetra < 0) {
      apagando = false;
      indiceCargo = (indiceCargo + 1) % cargos.length;
      indiceLetra = 0;
    }
  }
  setTimeout(digitarCargo, apagando ? 35 : 75);
}

// ========================================
// LINHA DO TEMPO
// ========================================
const eventosPadrao = [
  {
    periodo: "2026",
    titulo: "Início dos estudos",
    descricao: "Primeiros passos na programação.",
    icone: "🚀",
    cor: "#ff1ede",
    usuario: false,
  },
  {
    periodo: "2026",
    titulo: "Aprendizado linguagem de programação",
    descricao: "Escolhas, e melhora.",
    icone: "🏗️",
    cor: "#0e16ff",
    usuario: false,
  },
  {
    periodo: "2026",
    titulo: "Aprendizado de python",
    descricao: "atenção, e criatividade.",
    icone: "🎨",
    cor: "#7808ff",
    usuario: false,
  },
  {
    periodo: "2026",
    titulo: "Introdução ao java",
    descricao: "paciencia, e logica.",
    icone: "⚡",
    cor: "#42eb00",
    usuario: false,
  },
  {
    periodo: "2026",
    titulo: "Primeiro projeto",
    descricao: "Uma aplicação completa.",
    icone: "💻",
    cor: "#ef7000",
    usuario: false,
  },
  {
    periodo: "Futuro",
    titulo: "Próximos objetivos",
    descricao: "melhorar meu conhecimento,e procurar uma oportunidade de experiencia",
    icone: "🎯",
    cor: "#ff0c0c",
    usuario: false,
  },
];
let eventosUsuario = JSON.parse(localStorage.getItem("eventosUsuario")) || [];
function carregarLinhaDoTempo() {
  const area = document.getElementById("linha-do-tempo");
  area.innerHTML = "";
  [...eventosPadrao, ...eventosUsuario].forEach((evento, indice) => {
    const item = document.createElement("article");
    item.className = "evento";
    item.innerHTML = `<div class="evento-icone" style="background:${evento.cor}">${evento.icone}</div><small>${evento.periodo}</small><h3>${evento.titulo}</h3><p>${evento.descricao}</p>${evento.usuario ? `<button class="excluir-evento" data-indice="${indice - eventosPadrao.length}">Excluir</button>` : ""}`;
    area.appendChild(item);
  });
  document.querySelectorAll(".excluir-evento").forEach((botao) =>
    botao.addEventListener("click", () => {
      eventosUsuario.splice(Number(botao.dataset.indice), 1);
      salvarNoNavegador("eventosUsuario", eventosUsuario);
      carregarLinhaDoTempo();
    }),
  );
}
document
  .getElementById("form-trajetoria")
  .addEventListener("submit", (evento) => {
    evento.preventDefault();
    const formulario = evento.currentTarget;
    eventosUsuario.push({
      periodo: formulario.periodo.value,
      titulo: formulario.titulo.value,
      descricao: formulario.descricao.value,
      icone: "⭐",
      cor: "#c10000",
      usuario: true,
    });
    salvarNoNavegador("eventosUsuario", eventosUsuario);
    formulario.reset();
    carregarLinhaDoTempo();
  });

// ========================================
// HABILIDADES
// ========================================
const habilidades = [
  { nome: "HTML", porcentagem: 20, categoria: "tecnologia" },
  { nome: "CSS", porcentagem: 5, categoria: "tecnologia" },
  { nome: "JavaScript", porcentagem: 55, categoria: "tecnologia" },
  { nome: "Git", porcentagem: 0, categoria: "tecnologia" },
  { nome: "GitHub", porcentagem: 13, categoria: "tecnologia" },
  { nome: "Lógica", porcentagem: 80, categoria: "tecnologia" },
  { nome: "Comunicação", porcentagem: 99, categoria: "pessoal" },
  { nome: "Trabalho em equipe", porcentagem: 100, categoria: "pessoal" },
  { nome: "Python", porcentagem: 8, categoria: "tecnologia" },
];
function carregarHabilidades(filtro = "todas") {
  const area = document.getElementById("lista-habilidades");
  area.innerHTML = "";
  habilidades
    .filter((item) => filtro === "todas" || item.categoria === filtro)
    .forEach((item) => {
      area.innerHTML += `<article class="habilidade"><div class="habilidade-topo"><span>${item.nome}</span><span>${item.porcentagem}%</span></div><div class="barra"><span data-largura="${item.porcentagem}%"></span></div><small>${item.categoria}</small></article>`;
    });
  setTimeout(
    () =>
      document
        .querySelectorAll(".barra span")
        .forEach((barra) => (barra.style.width = barra.dataset.largura)),
    50,
  );
}
document.querySelectorAll("#filtros-habilidades button").forEach((botao) =>
  botao.addEventListener("click", () => {
    document
      .querySelectorAll("#filtros-habilidades button")
      .forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");
    carregarHabilidades(botao.dataset.filtro);
  }),
);

// ========================================
// PROJETOS
// ========================================
const projetos = [
  {
    titulo: "Contador",
    imagem: "img/projeto-contador.svg",
    descricao:
      "Contador com valores positivos, negativos e controle de estado.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    link: "projetos/contador/index.html",
    github: "https://github.com/",
    data: "julho de 2026",
    aprendizados: "Eventos de clique, funções e manipulação do DOM.",
  },
  {
    titulo: "Lista de tarefas",
    imagem: "img/projeto-tarefas.svg",
    descricao: "Organizador de tarefas com filtros e armazenamento local.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    link: "projetos/lista-tarefas/index.html",
    github: "https://github.com/",
    data: " outubro de 2026",
    aprendizados: "Arrays, objetos, filtros e LocalStorage.",
  },
  {
    titulo: "Calculadora",
    imagem: "img/projeto-calculadora.svg",
    descricao: "Calculadora responsiva para operações do cotidiano.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    link: "projetos/calculadora/index.html",
    github: "https://github.com/",
    data: "Maio de 2026",
    aprendizados: "Operadores, validações e tratamento de erros.",
  },
  {
    titulo: "Aplicativo de clima",
    imagem: "img/projeto-clima.svg",
    descricao: "Protótipo visual de uma aplicação de previsão do tempo.",
    tecnologias: ["HTML", "CSS"],
    link: "#",
    github: "https://github.com/",
    data: "Em planejamento",
    aprendizados:
      "Planejamento de interface, responsividade e componentes visuais.",
  },
];
function carregarProjetos(filtro = "todos") {
  const area = document.getElementById("lista-projetos");
  area.innerHTML = "";
  projetos
    .filter((p) => filtro === "todos" || p.tecnologias.includes(filtro))
    .forEach((p) => {
      const indice = projetos.indexOf(p);
      area.innerHTML += `<article class="projeto-card"><img src="${p.imagem}" alt="Ilustração do projeto ${p.titulo}"><div class="projeto-corpo"><h3>${p.titulo}</h3><p>${p.descricao}</p><div class="tags">${p.tecnologias.map((t) => `<span class="tag">${t}</span>`).join("")}</div><div class="projeto-acoes"><a class="botao primario" href="${p.link}" ${p.link === "#" ? 'aria-disabled="true"' : ""}>Abrir projeto</a><button class="botao detalhes" data-indice="${indice}">Detalhes</button></div></div></article>`;
    });
  document
    .querySelectorAll(".detalhes")
    .forEach((botao) =>
      botao.addEventListener("click", () =>
        abrirDetalhes(projetos[Number(botao.dataset.indice)]),
      ),
    );
}
document.querySelectorAll("#filtros-projetos button").forEach((botao) =>
  botao.addEventListener("click", () => {
    document
      .querySelectorAll("#filtros-projetos button")
      .forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");
    carregarProjetos(botao.dataset.filtro);
  }),
);

// ========================================
// MODAIS
// ========================================
function abrirModal(modal) {
  modal.classList.add("aberto");
  modal.setAttribute("aria-hidden", "false");
  modal.querySelector("input,button").focus();
}
function fecharModal(modal) {
  modal.classList.remove("aberto");
  modal.setAttribute("aria-hidden", "true");
}
const modalDados = document.getElementById("modal-dados"),
  modalProjeto = document.getElementById("modal-projeto");
document.getElementById("editar-dados").addEventListener("click", () => {
  const f = document.getElementById("form-dados");
  Object.keys(dadosPessoais).forEach(
    (chave) => (f.elements[chave].value = dadosPessoais[chave]),
  );
  abrirModal(modalDados);
});
document.getElementById("form-dados").addEventListener("submit", (evento) => {
  evento.preventDefault();
  const f = evento.currentTarget;
  Object.keys(dadosPessoais).forEach(
    (chave) => (dadosPessoais[chave] = f.elements[chave].value.trim()),
  );
  salvarNoNavegador("dadosPessoais", dadosPessoais);
  cargos[0] = dadosPessoais.cargo;
  atualizarDadosNaTela();
  fecharModal(modalDados);
});
function abrirDetalhes(p) {
  document.getElementById("detalhes-projeto").innerHTML =
    `<h2>${p.titulo}</h2><p>${p.descricao}</p><h3>Aprendizados</h3><p>${p.aprendizados}</p><p><strong>Tecnologias:</strong> ${p.tecnologias.join(", ")}</p><p><strong>Criação:</strong> ${p.data}</p><div class="acoes"><a class="botao primario" href="${p.link}">Abrir projeto</a><a class="botao detalhes" href="${p.github}" target="_blank" rel="noopener">GitHub</a></div>`;
  abrirModal(modalProjeto);
}
document
  .querySelectorAll(".fechar-modal")
  .forEach((botao) =>
    botao.addEventListener("click", () => fecharModal(botao.closest(".modal"))),
  );
document.querySelectorAll(".modal").forEach((modal) =>
  modal.addEventListener("click", (evento) => {
    if (evento.target === modal) fecharModal(modal);
  }),
);
document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape")
    document.querySelectorAll(".modal.aberto").forEach(fecharModal);
});

// ========================================
// FORMULÁRIO, ANIMAÇÕES E INICIALIZAÇÃO
// ========================================
document.getElementById("form-contato").addEventListener("submit", (evento) => {
  evento.preventDefault();
  const f = evento.currentTarget,
    mensagem = document.getElementById("mensagem-form");
  if (!f.checkValidity()) {
    mensagem.textContent = "Preenche isso direito orelha seca.";
    return;
  }
  mensagem.textContent =
    "Mensagem validada com sucesso! obrigado pela mensagem,iremos entrar em contato assim que for possivel.";
  f.reset();
  setTimeout(() => (mensagem.textContent = ""), 5000);
});
const voltarTopo = document.getElementById("voltar-topo");
window.addEventListener("scroll", () =>
  voltarTopo.classList.toggle("visivel", scrollY > 500),
);
voltarTopo.addEventListener("click", () =>
  scrollTo({ top: 0, behavior: "smooth" }),
);
const observador = new IntersectionObserver(
  (entradas) =>
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) entrada.target.classList.add("visivel");
    }),
  { threshold: 0.12 },
);
document
  .querySelectorAll(".revelar")
  .forEach((item) => observador.observe(item));
document.getElementById("ano-atual").textContent = new Date().getFullYear();
atualizarDadosNaTela();
carregarLinhaDoTempo();
carregarHabilidades();
carregarProjetos();
digitarCargo();
