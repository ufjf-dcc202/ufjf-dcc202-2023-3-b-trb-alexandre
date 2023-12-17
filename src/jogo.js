const tabela_player = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
const linha_soma_player = [0, 0, 0]
const dado_player = 0
const pontuacao_player = 0
const coluna_player = 1

const tabela_enemy = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
const linha_soma_enemy = [0, 0, 0]
const dado_enemy = 0
const pontuacao_enemy = 0

const rola_dado = () => {
  return Math.floor(Math.random() * 6) + 1
}