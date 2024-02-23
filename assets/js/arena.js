let warriors = [
  new WarriorAxe("Axe Warrior", 10, 100, "../assets/img/0_Archer_Idle_000.png"),
  new WarriorSword("Sword Warrior", 15, 100, "../assets/img/0_Archer_Idle_000.png"),
  new WarriorSpear("Spear Warrior", 5, 100, "../assets/img/0_Archer_Idle_000.png"),
];

function getRandomWarrior() {
  let index = Math.floor(Math.random() * warriors.length);
  return warriors[index];
}

let warrior1 = getRandomWarrior();
let warrior2 = getRandomWarrior();

while (warrior1 === warrior2) {
  warrior2 = getRandomWarrior();
}

// Créer un nouvel élément div pour le guerrier 1
let div1 = document.createElement('div');
div1.textContent = `le 1er gladiateur: ${warrior1.name}`;
let img1 = document.createElement('img');
img1.src = warrior1.image;
div1.appendChild(img1);
document.getElementById('warrior1').appendChild(div1);

// Créer un nouvel élément div pour le guerrier 2
let div2 = document.createElement('div');
div2.textContent = `le 2eme gladiateur: ${warrior2.name}`;
let img2 = document.createElement('img');
img2.src = warrior2.image;
div2.appendChild(img2);
document.getElementById('warrior2').appendChild(div2);
while (warrior1.isAlive() && warrior2.isAlive()) {
  warrior1.attack(warrior2);
  warrior2.attack(warrior1);
}

if (!warrior1.isAlive() && !warrior2.isAlive()) {
  document.getElementById('result').textContent = "Egaliter";
} else if (warrior1.isAlive()) {
  document.getElementById('result').textContent = `${warrior1.name} wins`;
} else {
  document.getElementById('result').textContent = `${warrior2.name} wins`;
}