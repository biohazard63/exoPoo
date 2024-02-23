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
   */attack(opponent) {
    let damage = this.power;
    // Générer un nombre aléatoire entre 0 et 1
    let random = Math.random();
    // Si le nombre est inférieur ou égal à 0.05, alors le coup est un coup critique
    if (random <= 0.05) {
      damage *= 2; // Le coup critique inflige le double des dégâts
      console.log('Coup critique !');
    }
    opponent.life -= damage;
    if (opponent.life < 0) {
      opponent.life = 0;
    }
    }

  /**
   * Checks if the warrior is alive.
   * @return {boolean} True if the warrior's life is greater than 0, false otherwise.
   */
  isAlive() {
    return this.life > 0;
  }
}

class WarriorAxe extends Warrior {
  attack(opponent) {
    let damage = this.power;
    if (opponent instanceof WarriorSword) {
      damage *= 2;
    }
    // Générer un nombre aléatoire entre 0 et 1
    let random = Math.random();
    // Si le nombre est inférieur ou égal à 0.05, alors le coup est un coup critique
    if (random <= 0.05) {
      damage *= 2; // Le coup critique inflige le double des dégâts
      console.log('Coup critique !');
    }
    opponent.life -= damage;
    if (opponent.life < 0) {
      opponent.life = 0;
    }
  }
}

class WarriorSword extends Warrior {
  attack(opponent) {
    let damage = this.power;
    if (opponent instanceof WarriorSpear) {
      damage *= 2;
    }
    // Générer un nombre aléatoire entre 0 et 1
    let random = Math.random();
    // Si le nombre est inférieur ou égal à 0.05, alors le coup est un coup critique
    if (random <= 0.05) {
      damage *= 2; // Le coup critique inflige le double des dégâts
      console.log('Coup critique !');
    }
    opponent.life -= damage;
    if (opponent.life < 0) {
      opponent.life = 0;
    }
  }
}

class WarriorSpear extends Warrior {
  attack(opponent) {
    let damage = this.power;
    if (opponent instanceof WarriorAxe) {
      damage *= 2;
    }
    // Générer un nombre aléatoire entre 0 et 1
    let random = Math.random();
    // Si le nombre est inférieur ou égal à 0.05, alors le coup est un coup critique
    if (random <= 0.05) {
      damage *= 2; // Le coup critique inflige le double des dégâts
      console.log('Coup critique !');
    }
    opponent.life -= damage;
    if (opponent.life < 0) {
      opponent.life = 0;
    }
  }
}
class WarriorShield extends Warrior {
  constructor(name, power, life, image) {
    super(name, power, life, image);
    this.isBlocking = false;
  }

  block() {
    let random = Math.random();
    if (random <= 0.4) {
      this.isBlocking = true;
      console.log(`${this.name} bloque l'attaque !`);
    } else {
      this.isBlocking = false;
    }
  }

  attack(opponent) {
    if (opponent.isBlocking) {
      console.log(`${opponent.name} a bloqué l'attaque !`);
      return;
    }

    let damage = this.power;
    if (opponent instanceof WarriorSword) {
      damage *= 2;
    }
    let random = Math.random();
    if (random <= 0.05) {
      damage *= 2;
      console.log('Coup critique !');
    }
    opponent.life -= damage;
    if (opponent.life < 0) {
      opponent.life = 0;
    }
  }
}

class WarriorArcher extends Warrior {
  constructor(name, power, life, image) {
    super(name, power, life, image);
    this.isArrowShot = false;
  }

  shootArrow() {
    let random = Math.random();
    if (random <= 0.4) {
      this.isArrowShot = true;
      console.log(`${this.name} tire une flèche !`);
    } else {
      this.isArrowShot = false;
    }
  }

  attack(opponent) {
    let damage = this.power;
    if (this.isArrowShot) {
      damage *= 2;
      console.log(`${this.name} inflige le double des dégâts avec sa flèche !`);
    }
    if (opponent instanceof WarriorShield) {
      damage *= 2;
    }
    let random = Math.random();
    if (random <= 0.05) {
      damage *= 2;
      console.log('Coup critique !');
    }
    opponent.life -= damage;
    if (opponent.life < 0) {
      opponent.life = 0;
    }
  }
}