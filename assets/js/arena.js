document.addEventListener("DOMContentLoaded", () => {
  const warriors = [
    new WarriorAxe("Axe Warrior", 10, 100, "../assets/img/Archer.png"),
    new WarriorSword("Sword Warrior", 10, 100, "../assets/img/Knight.png"),
    new WarriorSpear("Spear Warrior", 10, 100, "../assets/img/spaear.png"),
    new WarriorShield("Shield Warrior", 10, 100, "../assets/img/shield.png"),
    new WarriorArcher("Archer Warrior", 10, 100, "../assets/img/Archer2.png"),
  ];

  const getRandomWarrior = () => warriors[Math.floor(Math.random() * warriors.length)];

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

  let warrior1, warrior2;

  const populateModal = () => {
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = ''; // Clear the modal content
warriors.forEach((warrior, index) => {
  const button = document.createElement('button');
  button.textContent = `Select ${warrior.name}`;
  button.onclick = () => {
    if (!warrior1) {
      warrior1 = warrior;
      console.log(`Warrior 1 selected: ${warrior1.name}`);
    } else if (!warrior2) {
      warrior2 = warrior;
      console.log(`Warrior 2 selected: ${warrior2.name}`);
    } else {
      console.error('Both warriors are already selected');
    }
  };

  const img = document.createElement('img'); // Create an img element
  img.src = warrior.image; // Set the src attribute to the warrior's image
  img.style.width = '50px'; // Set the width of the image
  img.style.height = '50px'; // Set the height of the image

  const div = document.createElement('div'); // Create a div to hold the button and image
  div.appendChild(button); // Append the button to the div
  div.appendChild(img); // Append the image to the div

  modalContent.appendChild(div); // Append the div to the modalContent
});
  };

  const startGame = () => {
    if (!warrior1 || !warrior2) {
      console.error('Please select two warriors before starting the game');
      return;
    }
    createWarriorElement(warrior1, 'warrior1');
    createWarriorElement(warrior2, 'warrior2');

    while (warrior1.isAlive() && warrior2.isAlive()) {
      [warrior1, warrior2].forEach(warrior => {
        if (warrior instanceof WarriorShield) warrior.block();
        if (warrior instanceof WarriorArcher) warrior.shootArrow();
        if (warrior instanceof WarriorAxe) warrior.goBerserk();
        if (warrior instanceof WarriorSword) warrior.parry();
        if (warrior instanceof WarriorSpear) warrior.pierce();
      });

      warrior1.attack(warrior2);
      warrior2.attack(warrior1);

      console.log(warrior1.name, warrior1.life);
      console.log(warrior2.name, warrior2.life);
    }
    const winner = warrior1.isAlive() ? warrior1 : warrior2;
    createWarriorElement(winner, 'result')

    // Reset warriors at the end of the game
    warrior1 = null;
    warrior2 = null;
  };


  const resetGame = () => {
    ['warrior1', 'warrior2', 'result'].forEach(id => document.getElementById(id).innerHTML = '');

    // Reset warriors when the game is reset
    warrior1 = null;
    warrior2 = null;

    startGame();
  };

  document.getElementById('start').addEventListener('click', startGame);
  document.getElementById('restart').addEventListener('click', resetGame);


  const btn = document.getElementById("selectModal");
  const modal = document.getElementById('myModal');

  if (btn && modal) {
    btn.onclick = function() {
      populateModal(); // Populate the modal when the button is clicked
      modal.style.display = "block";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        console.log("Clicked outside the modal"); // Debugging line
        modal.style.display = "none";
        startGame(); // Start the game when the modal is closed
      }
    }
  } else {
    console.error("Element with id 'selectModal' or 'myModal' was not found"); // Changed from "select" to "selectModal"
  }

  const fighterButtons = document.querySelectorAll('.fighter-button');

  fighterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      console.log("Fighter button clicked"); // Debugging line
      const selectedFighter = event.target.dataset.fighter;
      modal.style.display = 'none';
    });
  });

  var span = document.getElementsByClassName("close")[0];

  if (span) {
    span.onclick = function() {
      console.log("Close button clicked"); // Debugging line
      modal.style.display = "none";
      startGame(); // Start the game when the modal is closed
    }
  } else {
    console.error("Element with class 'close' was not found");
  }
});
