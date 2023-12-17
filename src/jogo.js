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

let docCelulasPlayer
const setDocCelulasPlayer = (val) => {
  docCelulasPlayer = val
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

let docCelulasEnemy
const setDocCelulasEnemy = (val) => {
  docCelulasEnemy = val
}

// FIM DAS VARIÁVEIS

const rodada = () => {

}

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

const jogadaPlayer = () => {
  let linhaVazia = encontraLinhaVazia(coluna_player, tabela_player)

  if (linhaVazia != -1) {
    tabela_player = atualizaTabela(dado_player, linhaVazia, coluna_player, tabela_player)
    atualizaDocTabelaPlayer(linhaVazia, coluna_player, dado_player)

    atualizaDadoJogador()

    return
  }

  alert(`Coluna ${coluna_player + 1} já está cheia. Selecione outra coluna.`)
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


export {
  setDocCelulasEnemy,
  setDocCelulasPlayer,
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