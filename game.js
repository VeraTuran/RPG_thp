class Game {
  constructor (turnsLeft = 10, newTurn = -1){
    turnsLeft = turnsLeft + newTurn;
  }

}

console.log(turnsLeft);