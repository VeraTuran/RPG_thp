class Character {
  constructor(hp, dmg){
    this.hp = hp;
    this.dmg = dmg;
  }
  printStats(){
    console.log("Points de vie : " + this.hp);
    console.log("Dommages : " + this.dmg);
  }
}

class Fighter extends Character {
  constructor(hp = 12, dmg = 4){
    super(hp, dmg)
  }
}

class Paladin extends Character {
  constructor(hp = 16, dmg = 3){
    super(hp, dmg)
  }
}

