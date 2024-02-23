let warriorAxe = new WarriorAxe("Axe Warrior", 10, 100);
let warriorSword = new WarriorSword("Sword Warrior", 15, 100);
let warriorSpear = new WarriorSpear("Spear Warrior", 5, 100);


while (warriorSpear.isAlive() && warriorSword.isAlive()) {
  warriorSpear.attack(warriorSword);
  warriorSword.attack(warriorSpear);
}

if (warriorSpear.isAlive() && warriorSword.isAlive()) {
  console.log("It's a draw");
} else if (warriorSpear.isAlive()) {
  console.log(`${warriorSpear.name} wins`);
} else {
  console.log(`${warriorSword.name} wins`);
}