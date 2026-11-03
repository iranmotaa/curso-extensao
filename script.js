// ============================================================
// CineMatch - Arquivo de COMPORTAMENTO (JavaScript)
// ============================================================
// Aqui o site ganha "vida". O que este código faz:
//   1. Busca uma lista de séries na internet (API da TVMaze).
//   2. Quando o usuário clica no botão, sorteia uma série.
//   3. Coloca as informações da série dentro do card.
// ============================================================


// ---------- 1. ENDEREÇO DA API ----------
// Uma API é como um "garçom": pedimos algo (séries) e ela nos entrega
// os dados em formato JSON (um texto organizado que o JS entende).
// "const" cria uma variável que NÃO muda de valor.
const URL_API = "https://api.tvmaze.com/shows";


// ---------- 2. PEGANDO OS ELEMENTOS DO HTML ----------
// document.getElementById("id") encontra o elemento com aquele id.
// Guardamos cada um numa variável para usar depois.
const card = document.getElementById("card");
const capa = document.getElementById("capa");
const titulo = document.getElementById("titulo");
const nota = document.getElementById("nota");
const genero = document.getElementById("genero");
const sinopse = document.getElementById("sinopse");
const botao = document.getElementById("botao-sortear");


// ---------- 3. LISTA DE SÉRIES ----------
// Começa vazia. Vamos guardar as séries aqui depois da primeira busca,
// assim não precisamos baixar tudo de novo a cada clique.
// "let" cria uma variável que PODE mudar de valor.
let listaDeSeries = [];


// ---------- 4. FUNÇÃO QUE BUSCA AS SÉRIES NA API ----------
// "async" indica que a função vai esperar algo demorado (a internet).
// "await" significa: "espere essa resposta chegar antes de continuar".
async function buscarSeries() {
  // fetch() faz o pedido para a API
  const resposta = await fetch(URL_API);

  // Converte a resposta (texto JSON) em uma lista que o JS entende
  const dados = await resposta.json();

  return dados; // devolve a lista de séries
}


// ---------- 5. FUNÇÃO QUE SORTEIA UM ITEM DA LISTA ----------
// Math.random() gera um número entre 0 e 0.999...
// Multiplicamos pelo tamanho da lista e arredondamos para baixo
// com Math.floor(). Resultado: uma posição válida da lista!
function sortear(lista) {
  const posicao = Math.floor(Math.random() * lista.length);
  return lista[posicao];
}


// ---------- 6. FUNÇÃO QUE MOSTRA A SÉRIE NO CARD ----------
function mostrarSerie(serie) {
  // Dica: use console.log(serie) para ver TODOS os dados que a API envia!
  console.log(serie);

  // CAPA: algumas séries não têm imagem, então usamos uma reserva.
  // O "?." evita erro caso "image" não exista.
  // O "||" significa "OU": se o da esquerda não existir, usa o da direita.
  capa.src = serie.image?.original || "https://placehold.co/300x420/222/555?text=Sem+Imagem";
  capa.alt = "Capa de " + serie.name;

  // TÍTULO
  titulo.textContent = serie.name;

  // NOTA: vem em serie.rating.average (de 0 a 10)
  const valorNota = serie.rating?.average || "Sem nota";
  nota.textContent = "⭐ " + valorNota;

  // GÊNERO: vem como uma lista, ex: ["Drama", "Ação"].
  // .join(" • ") junta os itens em um único texto: "Drama • Ação"
  if (serie.genres.length > 0) {
    genero.textContent = serie.genres.join(" • ");
  } else {
    genero.textContent = "Sem gênero";
  }

  // SINOPSE: a API envia o texto com tags HTML, como "<p>...</p>".
  // O .replace() com essa "expressão regular" remove todas as tags.
  const textoLimpo = (serie.summary || "Sinopse não disponível.").replace(/<[^>]*>/g, "");
  sinopse.textContent = textoLimpo;
}


// ---------- 7. O QUE ACONTECE AO CLICAR NO BOTÃO ----------
async function aoClicar() {
  // Desativa o botão e mostra que está carregando
  botao.disabled = true;
  botao.textContent = "⏳ Sorteando...";
  card.classList.add("carregando"); // ativa o efeito visual do CSS

  // try/catch: "tente fazer isso; se der erro, faça aquilo"
  try {
    // Só busca na API se a lista ainda estiver vazia (primeiro clique)
    if (listaDeSeries.length === 0) {
      listaDeSeries = await buscarSeries();
    }

    const serieSorteada = sortear(listaDeSeries);
    mostrarSerie(serieSorteada);
  } catch (erro) {
    // Se algo der errado (ex: sem internet), avisamos o usuário
    console.error("Erro ao buscar séries:", erro);
    titulo.textContent = "Ops! Não foi possível carregar 😢";
    sinopse.textContent = "Verifique sua conexão com a internet e tente novamente.";
  }

  // Volta o botão e o card ao normal (um pequeno atraso deixa a animação visível)
  setTimeout(function () {
    card.classList.remove("carregando");
    botao.disabled = false;
    botao.textContent = "🎬 Sortear Série/Filme";
  }, 300);
}


// ---------- 8. LIGANDO O BOTÃO À FUNÇÃO ----------
// addEventListener = "fique de olho": quando acontecer um "click"
// no botão, execute a função aoClicar.
botao.addEventListener("click", aoClicar);
