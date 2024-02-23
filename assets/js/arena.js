/**
 * This script sets up a game where warriors fight each other.
 * The game starts when the DOM is fully loaded.
 */
document.addEventListener("DOMContentLoaded", () => {
  /**
   * An array of warrior objects.
   * Each warrior is an instance of a Warrior class (WarriorAxe, WarriorSword, or WarriorSpear).
   */
  const warriors = [
    new WarriorAxe("Axe Warrior", 10, 100, "../assets/img/Archer.png"),
    new WarriorSword("Sword Warrior", 10, 100, "../assets/img/Knight.png"),
    new WarriorSpear("Spear Warrior", 10, 100, "../assets/img/spaear.png"),
  ];

  /**
   * Function to get a random warrior from the warriors array.
   * @returns {Object} A random warrior object.
   */
  const getRandomWarrior = () => warriors[Math.floor(Math.random() * warriors.length)];

  /**
   * Function to create a new HTML element for a warrior.
   * @param {Object} warrior - The warrior object.
   * @param {string} id - The id of the HTML element where the warrior element will be appended.
   */
  const createWarriorElement = (warrior, id) => {
    const div = document.createElement('div');
    div.textContent = `Le gladiateur: ${warrior.name}`;

    const life = document.createElement('p');
    life.textContent = `Vie: ${warrior.life}`;
    div.appendChild(life);

    const power = document.createElement('p');
    power.textContent = `Puissance: ${warrior.power}`;
    div.appendChild(power);

    const img = document.createElement('img');
    img.src = warrior.image;
    div.appendChild(img);

    document.getElementById(id).appendChild(div);
  };

  /**
   * Function to start the game.
   * Two different warriors are selected and they fight each other until one of them dies.
   * The winner is displayed in the 'result' element.
   */
  const startGame = () => {
    let warrior1, warrior2;
    do {
      warrior1 = getRandomWarrior();
      warrior2 = getRandomWarrior();
    } while (warrior1 === warrior2);

    createWarriorElement(warrior1, 'warrior1');
    createWarriorElement(warrior2, 'warrior2');

    while (warrior1.isAlive() && warrior2.isAlive()) {
      warrior1.attack(warrior2);
      warrior2.attack(warrior1);
        console.log(warrior1.name,warrior1.life);
        console.log(warrior2.name,warrior2.life);
    }

    const winner = warrior1.isAlive() ? warrior1 : warrior2;
    // document.getElementById('result').textContent = `${winner.name} Gagne!`;
    createWarriorElement(winner, 'result')
  };

  /**
   * Function to reset the game.
   * The 'warrior1', 'warrior2', and 'result' elements are cleared, and a new game starts.
   */
  const resetGame = () => {
    ['warrior1', 'warrior2', 'result'].forEach(id => document.getElementById(id).innerHTML = '');
    startGame(); // Start a new game after resetting
  };

  // Add event listeners to the 'start' and 'restart' buttons
  document.getElementById('start').addEventListener('click', startGame);
  document.getElementById('restart').addEventListener('click', resetGame);
});