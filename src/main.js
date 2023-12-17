import {
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
  diminuirColuna
} from "./jogo.js"

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    aumentarColuna()
  }

  if (event.key === 'ArrowLeft') {
    diminuirColuna()
  }
});

const docColunaPlayer = document.querySelector('#coluna_player');
setDocColunaPlayer(docColunaPlayer)

const docPontuacaoPlayer = document.querySelector('#pontuacao_player');
setDocPontuacaoPlayer(docPontuacaoPlayer)

const docDadoPlayer = document.querySelector('#dado_player');
setDocDadoPlayer(docDadoPlayer)

const docTabelaPlayer = document.querySelectorAll('#t_player .numero');

const docSomaPlayer = document.querySelectorAll('#s_player .numero');

const docCelulasPlayer = document.querySelectorAll('#t_player .celula');


const docPontuacaoEnemy = document.querySelector('#pontuacao_enemy');

const docDadoEnemy = document.querySelector('#dado_enemy');

const docTabelaEnemy = document.querySelectorAll('#t_enemy .numero');

const docSomaEnemy = document.querySelectorAll('#s_enemy .numero');

const docCelulasEnemy = document.querySelectorAll('#t_enemy .celula');

atualizaDadoJogador()