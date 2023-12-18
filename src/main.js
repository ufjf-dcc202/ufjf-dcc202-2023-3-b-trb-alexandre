import {
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
} from "./jogo.js"

const docColunaPlayer = document.querySelector('#coluna_player');
setDocColunaPlayer(docColunaPlayer)

const docTabela = document.querySelector('#t_player');
docTabela.dataset.coluna = diminuirColuna()

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    docTabela.dataset.coluna = aumentarColuna()
  }

  if (event.key === 'ArrowLeft') {
    docTabela.dataset.coluna = diminuirColuna()
  }

  if (event.key === ' ') {
    jogadaPlayer()
  }
});


const docPontuacaoPlayer = document.querySelector('#pontuacao_player');
setDocPontuacaoPlayer(docPontuacaoPlayer)

const docDadoPlayer = document.querySelector('#dado_player');
setDocDadoPlayer(docDadoPlayer)

const docTabelaPlayer = document.querySelectorAll('#t_player .numero');
setDocTabelaPlayer(docTabelaPlayer)

const docSomaPlayer = document.querySelectorAll('#s_player .numero');
setDocSomaPlayer(docSomaPlayer)

const docPontuacaoEnemy = document.querySelector('#pontuacao_enemy');
setDocPontuacaoEnemy(docPontuacaoEnemy)

const docDadoEnemy = document.querySelector('#dado_enemy');
setDocDadoEnemy(docDadoEnemy)

const docTabelaEnemy = document.querySelectorAll('#t_enemy .numero');
setDocTabelaEnemy(docTabelaEnemy)

const docSomaEnemy = document.querySelectorAll('#s_enemy .numero');
setDocSomaEnemy(docSomaEnemy)

atualizaDadoJogador()