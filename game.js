class Game {
  play = () => {
    console.log("Joyeux RPG, et puisse le sort vous être favorable. ")
    console.log("Nos combattants.")
  }
  constructor (turnsLeft = 10){
    this.turnsLeft;
  }

  newTurn = () => {
    this.turnsLeft -= 1
    //if (newTurn > 0) {
      //Game.new
      //console.log("Veux-tu retenter ta chance ?")
    //} else {
      
    //}
  }
}

