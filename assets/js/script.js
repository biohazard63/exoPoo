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
  constructor(name, power, life, image) {
    super(name, power, life, image);
    this.isBerserk = false;
  }

  goBerserk() {
    let random = Math.random();
    if (random <= 0.4) {
      this.isBerserk = true;
      console.log(`${this.name} entre en mode Berserk !`);
    } else {
      this.isBerserk = false;
    }
  }

  attack(opponent) {
    let damage = this.power;
    if (this.isBerserk) {
      damage *= 2;
      console.log(`${this.name} inflige le double des dégâts en mode Berserk !`);
    }
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
class WarriorSword extends Warrior {
  constructor(name, power, life, image) {
    super(name, power, life, image);
    this.isParrying = false;
  }

  parry() {
    let random = Math.random();
    if (random <= 0.4) {
      this.isParrying = true;
      console.log(`${this.name} se prépare à parer l'attaque suivante !`);
    } else {
      this.isParrying = false;
    }
  }

  attack(opponent) {
    let damage = this.power;
    if (opponent.isParrying) {
      console.log(`${opponent.name} a paré l'attaque !`);
      return;
    }
    if (opponent instanceof WarriorSpear) {
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

class WarriorSpear extends Warrior {
  constructor(name, power, life, image) {
    super(name, power, life, image);
    this.isPiercing = false;
  }

  pierce() {
    let random = Math.random();
    if (random <= 0.4) {
      this.isPiercing = true;
      console.log(`${this.name} se prépare à percer la défense de l'adversaire !`);
    } else {
      this.isPiercing = false;
    }
  }

  attack(opponent) {
    let damage = this.power;
    if (this.isPiercing) {
      damage *= 1.5;
      console.log(`${this.name} inflige 1.5 fois les dégâts en perçant la défense !`);
    }
    if (opponent instanceof WarriorAxe) {
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