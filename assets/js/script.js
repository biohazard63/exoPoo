/**
 * Warrior class represents a warrior in the game.
 */
class Warrior {
  /**
   * Constructs a new warrior with a name, power, life, and image.
   * @param {string} name - The name of the warrior.
   * @param {number} power - The power of the warrior.
   * @param {number} life - The life of the warrior.
   * @param {string} image - The image of the warrior.
   */
  constructor(name, power, life, image) {
    this.name = name;
    this.power = power;
    this.life = life;
    this.image = image;
  }

  /**
   * Attacks an opponent, reducing their life by the warrior's power.
   * @param {Warrior} opponent - The opponent to attack.
   */
  attack(opponent) {
    opponent.life -= this.power;
  }

  /**
   * Checks if the warrior is alive.
   * @return {boolean} True if the warrior's life is greater than 0, false otherwise.
   */
  isAlive() {
    return this.life > 0;
  }
}

/**
 * WarriorAxe class represents a warrior with an axe.
 * It extends the Warrior class.
 */
class WarriorAxe extends Warrior {
  /**
   * Attacks an opponent. If the opponent is a WarriorSword, the attack power is doubled.
   * @param {Warrior} opponent - The opponent to attack.
   */
  attack(opponent) {
    if (opponent instanceof WarriorSword) {
      opponent.life -= this.power * 2;
    } else {
      super.attack(opponent);
    }
  }
}

/**
 * WarriorSword class represents a warrior with a sword.
 * It extends the Warrior class.
 */
class WarriorSword extends Warrior {
  /**
   * Attacks an opponent. If the opponent is a WarriorSpear, the attack power is doubled.
   * @param {Warrior} opponent - The opponent to attack.
   */
  attack(opponent) {
    if (opponent instanceof WarriorSpear) {
      opponent.life -= this.power * 2;
    } else {
      super.attack(opponent);
    }
  }
}

/**
 * WarriorSpear class represents a warrior with a spear.
 * It extends the Warrior class.
 */
class WarriorSpear extends Warrior {
  /**
   * Attacks an opponent. If the opponent is a WarriorAxe, the attack power is doubled.
   * @param {Warrior} opponent - The opponent to attack.
   */
  attack(opponent) {
    if (opponent instanceof WarriorAxe) {
      opponent.life -= this.power * 2;
    } else {
      super.attack(opponent);
    }
  }
}