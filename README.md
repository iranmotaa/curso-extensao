# 🎬 CineMatch — Workshop de 4 horas

Projeto para alunos de ensino médio **sem experiência em programação**.
Ao final, cada aluno terá um site que sorteia uma série de verdade, usando dados da internet.

## 📁 Arquivos

| Arquivo      | Papel                                   | Analogia           |
|--------------|-----------------------------------------|--------------------|
| `index.html` | Estrutura (o que existe na página)      | O esqueleto        |
| `style.css`  | Aparência (cores, tamanhos, sombras)    | A roupa            |
| `script.js`  | Comportamento (o que acontece ao clicar)| O cérebro          |

**API usada:** [TVMaze](https://api.tvmaze.com/shows) — gratuita, sem cadastro e sem chave.

## 🧰 Preparação (antes da aula)

- [ ] Computadores com navegador (Chrome/Edge/Firefox) e **VS Code** instalado.
- [ ] Extensão **Live Server** no VS Code (opcional, mas ajuda muito).
- [ ] Internet funcionando (testar `https://api.tvmaze.com/shows` no navegador).
- [ ] Ter a versão final pronta para mostrar no início ("é isso que vamos construir").
- [ ] Projetor para codar ao vivo junto com a turma.

---

## ⏱️ Roteiro da aula (4h)

### 🟢 Bloco 1 — Abertura e conceitos (0:00 – 0:30)
- Mostrar o CineMatch final funcionando. Gerar curiosidade: *"como ele sabe essas séries?"*
- Explicar a analogia **esqueleto (HTML) / roupa (CSS) / cérebro (JS)**.
- Abrir o link da API no navegador e mostrar o JSON: *"isso é o cardápio que o garçom (API) nos entrega"*.
- Criar a pasta `cinematch` e os 3 arquivos vazios no VS Code.

### 🟡 Bloco 2 — HTML: o esqueleto (0:30 – 1:15)
- Estrutura básica: `<!DOCTYPE>`, `<head>`, `<body>` (atalho `!` + Tab no VS Code).
- Construir passo a passo: logo `<h1>` → card `<section>` → `<img>` → `<h2>`, `<span>`, `<p>` → `<button>`.
- Explicar **`id`** (nome único que o JS usará) e **`class`** (nome para o CSS estilizar).
- ✅ **Checkpoint:** abrir no navegador — página feia, mas com tudo no lugar.

### ☕ Intervalo (1:15 – 1:30)

### 🔴 Bloco 3 — CSS: a roupa (1:30 – 2:30)
- Ligar o CSS com `<link>` e testar com `body { background: red; }` (todo mundo vê o efeito!).
- Ordem sugerida: variáveis de cor → `body` (fundo #141414 + centralização com flexbox) → logo → card (sombra, borda arredondada) → botão + `:hover`.
- Mostrar o **DevTools (F12)** para inspecionar e testar estilos ao vivo.
- 💡 **Momento criativo:** cada aluno escolhe a própria cor do botão/logo trocando as variáveis em `:root`.
- ✅ **Checkpoint:** visual estilo Netflix pronto (ainda sem funcionar).

### 🔵 Bloco 4 — JavaScript: o cérebro (2:30 – 3:30)
Ir **em pequenos passos, testando cada um no Console (F12)**:
1. `console.log("Olá!")` — provar que o JS está ligado.
2. `getElementById` — pegar o título e mudar o texto pelo console.
3. `addEventListener` — fazer o botão mostrar um `alert` ao clicar.
4. `fetch` + `async/await` — buscar a lista e dar `console.log` nela (explorar o objeto!).
5. `Math.random()` — sortear uma posição da lista.
6. `mostrarSerie()` — preencher capa, título, nota, gênero e sinopse.
7. `try/catch` e estado de "carregando" (se der tempo).
- ✅ **Checkpoint:** clicar no botão e ver uma série aparecer! 🎉

### 🟣 Bloco 5 — Personalização e encerramento (3:30 – 4:00)
- Desafios livres (escolher 1 ou 2):
  - ⭐ Mostrar também o **idioma** (`serie.language`) ou **ano** (`serie.premiered`).
  - ⭐ Adicionar um link "Ver mais" usando `serie.url`.
  - ⭐⭐ Só sortear séries com nota maior que 7 (usar `.filter()`).
  - ⭐⭐ Botão de "Favoritar" que guarda o nome numa lista na tela.
  - ⭐⭐⭐ Usar a busca da API: `https://api.tvmaze.com/search/shows?q=batman`.
- Rodada de apresentação: alunos mostram o que fizeram.
- Sugestão: publicar grátis no **GitHub Pages** ou **Netlify Drop** (arrastar a pasta).

---

## 🆘 Problemas comuns

| Sintoma                         | Causa provável                                              |
|---------------------------------|-------------------------------------------------------------|
| CSS não aplica                  | Nome do arquivo errado no `<link href="...">`              |
| Botão não faz nada              | Erro no JS — abrir o **Console (F12)** e ler a mensagem em vermelho |
| `null` no console               | O `id` no HTML está diferente do usado no `getElementById` |
| Acentos estranhos (Ã©)          | Falta `<meta charset="UTF-8">`                              |
| "Ops! Não foi possível carregar"| Sem internet ou rede da escola bloqueando a API             |
| Mudanças não aparecem           | Salvar o arquivo (Ctrl+S) e recarregar a página (F5)        |

## ▶️ Como rodar
Basta abrir o `index.html` no navegador (duplo clique) ou usar **Live Server** no VS Code.
