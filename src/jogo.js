let tabela_player = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
let linha_soma_player = [0, 0, 0]
let dado_player = 0
let pontuacao_player = 0
let coluna_player = 0

let tabela_enemy = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
let linha_soma_enemy = [0, 0, 0]
let dado_enemy = 0
let pontuacao_enemy = 0

let docColunaPlayer
const setDocColunaPlayer = (val) => {
  docColunaPlayer = val
}

let docPontuacaoPlayer
const setDocPontuacaoPlayer = (val) => {
  docPontuacaoPlayer = val
}

let docDadoPlayer
const setDocDadoPlayer = (val) => {
  docDadoPlayer = val
}

let docTabelaPlayer
const setDocTabelaPlayer = (val) => {
  docTabelaPlayer = val
}

let docSomaPlayer
const setDocSomaPlayer = (val) => {
  docSomaPlayer = val
}

let docPontuacaoEnemy
const setDocPontuacaoEnemy = (val) => {
  docPontuacaoEnemy = val
}

let docDadoEnemy
const setDocDadoEnemy = (val) => {
  docDadoEnemy = val
}

let docTabelaEnemy
const setDocTabelaEnemy = (val) => {
  docTabelaEnemy = val
}

let docSomaEnemy
const setDocSomaEnemy = (val) => {
  docSomaEnemy = val
}

// FIM DAS VARIÁVEIS

const encontraLinhaVazia = (coluna, tabela) => {
  for (let i = 0; i < 3; i++) {
    if (tabela[i][coluna] == 0)
      return i
  }

  return -1
}

const atualizaTabela = (valor, linha, coluna, tabela) => {
  tabela[linha][coluna] = valor

  return tabela
}

const atualizaDocTabelaPlayer = (linha, coluna, valor) => {
  docTabelaPlayer[linha * 3 + coluna].innerHTML = valor
}

const atualizaDocTabelaEnemy = (linha, coluna, valor) => {
  docTabelaEnemy[linha * 3 + coluna].innerHTML = valor
}

const atualizaDocSoma = (docSomaPlayer, linha_soma_player) => {
  linha_soma_player.forEach((valor, index) => {
    docSomaPlayer[index].innerHTML = valor
  })
}

const atualizaDocPontuacao = (docPontuacao, soma) => {
  docPontuacao.innerHTML = soma
}

const contabilizaPontosColunas = (tabela) => {
  const pontosColunas = [0, 0, 0];

  for (let coluna = 0; coluna < 3; coluna++) {
    const valoresColuna = tabela.map(linha => linha[coluna]);

    valoresColuna.forEach(valor => {
      const quantidade = valoresColuna.filter(v => v === valor).length;

      pontosColunas[coluna] += valor * quantidade;
    });
  }

  return pontosColunas
}

const retiraPossiveisValoresDaTabela = (coluna, valor, tabela) => {
  for (let i = 0; i < 3; i++) {
    if (tabela[i][coluna] === valor) {
      tabela[i][coluna] = 0;
    }
  }

  for (let linha = 1; linha < tabela.length; linha++) {
    if (tabela[linha][coluna] !== 0) {
      for (let i = linha; i > 0 && tabela[i - 1][coluna] === 0; i--) {
        tabela[i - 1][coluna] = tabela[i][coluna];
        tabela[i][coluna] = 0;
      }
    }
  }

  return tabela
}

const atualizaPlayer = () => {
  docTabelaPlayer.forEach((span, index) => {
    const linha = Math.floor(index / 3);
    const coluna = index % 3;
    span.innerHTML = tabela_player[linha][coluna];
  });
}

const atualizaEnemy = () => {
  docTabelaEnemy.forEach((span, index) => {
    const linha = Math.floor(index / 3);
    const coluna = index % 3;
    span.innerHTML = tabela_enemy[linha][coluna];
  });
}

const checaFimDeJogo = (tabela) => {
  let fimDeJogo = true

  tabela.forEach((linha) => {
    linha.forEach((valor) => {
      if (valor == 0) {
        fimDeJogo = false
      }
    })
  })

  return fimDeJogo
}

const terminaJogo = () => {
  if (pontuacao_player > pontuacao_enemy) {
    window.location.href = "https://ufjf-dcc202.github.io/ufjf-dcc202-2023-3-b-trb-alexandre/vitoria.html";
  }
  else {
    window.location.href = "../derrota.html"
  }
}

const jogadaPlayer = () => {
  let linhaVazia = encontraLinhaVazia(coluna_player, tabela_player)

  if (linhaVazia != -1) {
    tabela_player = atualizaTabela(dado_player, linhaVazia, coluna_player, tabela_player)
    atualizaDocTabelaPlayer(linhaVazia, coluna_player, dado_player)
    linha_soma_player = contabilizaPontosColunas(tabela_player)
    pontuacao_player = arraySoma(linha_soma_player)
    atualizaDocPontuacao(docPontuacaoPlayer, pontuacao_player)
    atualizaDocSoma(docSomaPlayer, linha_soma_player)

    tabela_enemy = retiraPossiveisValoresDaTabela(coluna_player, dado_player, tabela_enemy)
    atualizaEnemy()
    linha_soma_enemy = contabilizaPontosColunas(tabela_enemy)
    pontuacao_enemy = arraySoma(linha_soma_enemy)
    atualizaDocPontuacao(docPontuacaoEnemy, pontuacao_enemy)
    atualizaDocSoma(docSomaEnemy, linha_soma_enemy)

    if (checaFimDeJogo(tabela_player)) {
      terminaJogo()
      return
    }

    atualizaDadoEnemy()
    jogadaEnemy()

    atualizaDadoJogador()
    return
  }

  alert(`Coluna ${coluna_player + 1} já está cheia. Selecione outra coluna.`)
}

const jogadaEnemy = () => {
  let linhaVazia = -1
  let colunaAleatoria

  while (linhaVazia == -1) {
    colunaAleatoria = geraColunaAleatoria()
    linhaVazia = encontraLinhaVazia(colunaAleatoria, tabela_enemy)
  }

  tabela_enemy = atualizaTabela(dado_enemy, linhaVazia, colunaAleatoria, tabela_enemy)
  atualizaDocTabelaEnemy(linhaVazia, colunaAleatoria, dado_enemy)

  linha_soma_enemy = contabilizaPontosColunas(tabela_enemy)
  pontuacao_enemy = arraySoma(linha_soma_enemy)
  atualizaDocPontuacao(docPontuacaoEnemy, pontuacao_enemy)
  atualizaDocSoma(docSomaEnemy, linha_soma_enemy)

  tabela_player = retiraPossiveisValoresDaTabela(colunaAleatoria, dado_enemy, tabela_player)
  atualizaPlayer()
  linha_soma_player = contabilizaPontosColunas(tabela_player)
  pontuacao_player = arraySoma(linha_soma_player)
  atualizaDocPontuacao(docPontuacaoPlayer, pontuacao_player)
  atualizaDocSoma(docSomaPlayer, linha_soma_player)

  if (checaFimDeJogo(tabela_enemy)) {
    terminaJogo()
    return
  }
}

const geraColunaAleatoria = () => {
  return Math.floor(Math.random() * 3)
}

const rolarDado = () => {
  return Math.floor(Math.random() * 6) + 1
}

const atualizaDadoJogador = () => {
  dado_player = rolarDado()
  docDadoPlayer.innerHTML = dado_player
}

const atualizaDadoEnemy = () => {
  dado_enemy = rolarDado()
  docDadoEnemy.innerHTML = dado_enemy
}

const aumentarColuna = () => {
  if (coluna_player < 2)
    coluna_player += 1
  docColunaPlayer.innerHTML = coluna_player + 1
}

const diminuirColuna = () => {
  if (coluna_player > 0)
    coluna_player -= 1
  docColunaPlayer.innerHTML = coluna_player + 1
}

const arraySoma = (arr) => {
  let soma = 0

  arr.forEach((val) => {
    soma += val
  })

  return soma
}

export {
  setDocColunaPlayer,
  setDocDadoEnemy,
  setDocDadoPlayer,
  setDocPontuacaoEnemy,
  setDocPontuacaoPlayer,
  setDocSomaEnemy,
  setDocSomaPlayer,
  setDocTabelaEnemy,
  setDocTabelaPlayer,
  atualizaDadoJogador,
  aumentarColuna,
  diminuirColuna,
  jogadaPlayer
} 