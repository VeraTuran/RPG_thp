class Turn {
  constructor (startTurn = 10, whichTurn){
    // let whichTurn = 1;
  
  }

  newTurn(){
    
  }

  attack(){

  }

  dealDamage(){

  }

  haveDamage(paf){
    this.hp -= paf;
    if (this.hp <= 0){
      this.dead = true;
      this.hp = 0
      console.log('${this.name} est foutu');
    }
  }


  //same as printStats ? :
  watchStats(){

  }


 // 
 // announceTurn
}