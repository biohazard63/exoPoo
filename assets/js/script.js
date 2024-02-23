class Warrior {
  constructor(name, power, life) {
    this.name = name;
    this.power = power;
    this.life = life;
  }

  attack(opponent) {
    opponent.life -= this.power;
  }

  isAlive() {
    return this.life > 0;
  }
}

class WarriorAxe extends Warrior {
  attack(opponent) {
    if (opponent instanceof WarriorSword) {
      opponent.life -= this.power * 2;
    } else {
      super.attack(opponent);
    }
  }
}

class WarriorSword extends Warrior {
  attack(opponent) {
    if (opponent instanceof WarriorSpear) {
      opponent.life -= this.power * 2;
    } else {
      super.attack(opponent);
    }
  }
}

class WarriorSpear extends Warrior {
  attack(opponent) {
    if (opponent instanceof WarriorAxe) {
      opponent.life -= this.power * 2;
    } else {
      super.attack(opponent);
    }
  }
}