let warriors = [
  new WarriorAxe("Axe Warrior", 10, 100),
  new WarriorSword("Sword Warrior", 15, 100),
  new WarriorSpear("Spear Warrior", 5, 100)
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

console.log(warrior1.name);
console.log(warrior2.name);

while (warrior1.isAlive() && warrior2.isAlive()) {
  warrior1.attack(warrior2);
  warrior2.attack(warrior1);
}

if (warrior1.isAlive() && warrior2.isAlive()) {
  console.log("It's a draw");
} else if (warrior1.isAlive()) {
  console.log(`${warrior1.name} wins`);
} else {
  console.log(`${warrior2.name} wins`);
}