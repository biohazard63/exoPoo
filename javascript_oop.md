# JavaScript - Programmation Orientée Objet

Approfondis tes connaissances en programmation orientée objet en JavaScript ES6

## Contexte du projet

La Programmation Orientée Objet (POO) en JavaScript ES6 offre un cadre structuré pour la création de modèles complexes, comme des personnages dans un jeu. Chaque personnage possède des états et des comportements uniques, et la POO permet de les organiser de manière efficace et intuitive.

### Classe, Objet et Instance

Imagine que tu as une boîte de Lego : avec ces Lego, tu peux construire plein de choses différentes, comme des maisons, des voitures, des animaux, etc. Chaque chose que tu construis avec tes Lego suit un modèle ou un plan pour savoir comment les pièces s'assemblent.

Dans la programmation orientée objet, une "classe" est comme le plan ou les instructions pour construire quelque chose avec des Lego. Par exemple, si tu as un plan pour construire une voiture en Lego, ce plan est comme une "classe" pour les voitures. Il te montre quels blocs tu as besoin et comment les assembler pour faire une voiture.

Quand tu utilises ce plan pour faire une vraie voiture en Lego, cette voiture est appelée un "objet". Tu peux utiliser le même plan (classe) pour faire beaucoup de voitures (objets), et chaque voiture peut être un peu différente, comme avoir des couleurs différentes ou des pièces supplémentaires.

Voici l'exemple d'une classe `Personnage` :

```javascript
class Personnage {
  constructor(nom) {
    this.nom = nom;
  }

  saluer() {
    return `Bonjour, je suis ${this.nom}.`;
  }
}
```

#### This

Le mot-clé `this` dans une classe fait référence à l'objet actuel qui utilise la classe. Dans notre exemple, `this.nom` signifie le nom du personnage spécifique que nous avons créé. `this` est utilisé pour accéder aux propriétés et méthodes de l'objet.

#### Constructor

Le `constructor` est une méthode spéciale dans une classe. Il est appelé automatiquement au moment où un nouvel objet est créé à partir de la classe. Le `constructor` dans notre exemple de `Personnage` prend un nom en tant que paramètre et l'assigne à l'objet, permettant à chaque personnage d'avoir son propre nom unique.

#### Instance

Une instance est un objet spécifique créé lors de l'appel du constructeur d'une classe. Chaque instance représente un personnage unique.

```javascript
let arthur = new Personnage("Arthur");
let lancelot = new Personnage("Lancelot");

console.log(arthur.saluer()); // Bonjour, je suis Arthur.
```

Dans cet exemple, la variable `arthur` est une **référence** vers une **instance** de la **classe** `Personnage`.

### Encapsulation: propriétés privées et publiques

Reprenons notre exemple de Lego : l'encapsulation, c'est comme si tu avais une boîte spéciale pour ta voiture en Lego. Dans cette boîte, tu peux mettre toutes les pièces importantes de ta voiture, comme les roues et le moteur. Une fois que ces pièces sont dans la boîte, tu es le seul à pouvoir les toucher et les changer. Quelqu'un d'autre pourra jouer avec ta voiture, mais il ne pourra pas ouvrir la boîte et toucher les pièces à l'intérieur.

En programmation, quand tu crées une classe (comme un plan pour ta voiture en Lego), tu mets certaines informations et détails à l'intérieur de cette classe, comme dans une boîte. Ces détails sont cachés à l'intérieur de la classe, et seul le code à l'intérieur de la classe peut les changer ou les utiliser. Les autres parties de ton programme peuvent utiliser la classe et créer des objets à partir d'elle, mais elles ne peuvent pas accéder directement aux informations cachées à l'intérieur, sauf si tu leur donnes la permission.

L'encapsulation est le processus de regroupement des données et méthodes d'un objet et de restriction de l'accès direct à certaines de ses composantes.

#### Classe `Personnage` avec Encapsulation

Ajoutons la propriété `force` à notre classe. Cette dernière devra être privée :

```javascript
class Personnage {
  #force;

  constructor(nom, force) {
    this.nom = nom;
    this.#force = force;
  }

  saluer() {
    return `Bonjour, je suis ${this.nom}.`;
  }

  attaquer() {
    return `${this.nom} attaque avec une force de ${this.#force}.`;
  }
}
```

Dans cet exemple, `#force` est une propriété privée, accessible uniquement à l'intérieur de la classe `Personnage`. Il n'est pas possible d'accéder directement à `#force` en dehors de la classe, par exemple, `arthur.#force` générerait une erreur.

L'utilisation de propriétés privées est essentielle pour maintenir l'intégrité des données et prévenir les modifications inappropriées de l'état interne de l'objet.

### Héritage et Polymorphisme

L'héritage permet à une classe de reprendre et d'étendre les caractéristiques d'une autre. Cela facilite le partage de code et la création de relations hiérarchiques entre les classes.

```javascript
class Heros extends Personnage {
  constructor(nom, force, pouvoir) {
    super(nom, force);
    this.pouvoir = pouvoir;
  }

  utiliserPouvoir() {
    return `${this.nom} utilise son pouvoir de ${this.pouvoir}!`;
  }

  attaquer() {
    return super.attaquer() + " " + this.utiliserPouvoir();
  }
}
```

Ici, `Heros` hérite de `Personnage`, ce qui signifie qu'il reprend les propriétés et méthodes de `Personnage`, mais avec des capacités supplémentaires. L'utilisation de `super` permet d'appeler des méthodes de la classe parente, illustrant ainsi le concept de polymorphisme. L'héritage est utile car il permet une réutilisation de code efficace et une organisation logique des classes dans une hiérarchie.

**Exemple avec une instance de Heros:**

```javascript
let merlin = new Heros("Merlin", 50, "magie");

console.log(merlin.attaquer());
// Affiche "Merlin attaque avec une force de 50. Merlin utilise son pouvoir de magie"
```

## Modalités pédagogiques

Avant de te lancer dans l'exercice, prends le temps de lire les liens en ressource, pour avoir une meilleure idée de ce qu'est la programmation orientée objet en JavaScript.

Ensuite, réalise le code suivant :

### Partie 1 : Les guerriers

La classe `Warrior` permet de créer des objets possédant les propriétés suivantes :

- `name` : string
- `power` : number
- `life` : number

Et les méthodes :

- `attack(opponent: Warrior)`
- `isAlive()`

La méthode `attack` a un paramètre `opponent` (de type `Warrior`). Il faut réduire le nombre (`life`) de `opponent` d'autant de dégats (`power`) de l'attaquant.

Exemple : Si le guerrier "Joan" attaque "Leon", cela sera représenté par :

```js
joan.attack(leon)
```

La méthode `isAlive` doit retourner `true` si le nombre de points de vie du guerrier est supérieur à zéro et `false` sinon.

Dans un nouveau fichier `arena.js`, importe la classe `Warrior`, crée deux instances puis vérifie que les méthodes `attack` et `isAlive` fonctionnent.

### Partie 2 : Armes

Crée trois classes `WarriorAxe`, `WarriorSword` et `WarriorSpear` qui héritent de `Warrior`.

Dans les classes `WarriorAxe`, `WarriorSword` et `WarriorSpear`, redéfinis la méthode `attack` pour prendre en compte les cas suivants :

- `WarriorAxe` : si le type de `opponent` est `WarriorSword`, multiplier `power` par deux
- `WarriorSword` : si le type de `opponent` est `WarriorSpear`, multiplier `power` par deux
- `WarriorSpear` : si le type de `opponent` est `WarriorAxe`, multiplier `power` par deux

> Astuce : utilise le mot-clé `super` pour appeler la méthode `attack` de la classe parente.

Dans le fichier `arena.js`, crée des instances des trois classes `WarriorAxe`, `WarriorSword` et `WarriorSpear` et vérifie que leurs méthodes `attack` fonctionnent correctement.

### Partie 3 : Bataille

Dans le fichier `arena.js`, crée une boucle qui fait que deux instances de sous-classes `Warrior` s'affrontent (elles attaquent en même temps).

Quand au moins l'une d'entre elles est morte, affiche `{WarriorName} wins`. Si les deux sont morts, affiche `It's a draw`.

## Livrables

Un lien vers GitLab

## Critères de performance

- Connaissance des concepts de la programmation orientée objet
- Les bonnes pratiques de la programmation orientée objet (POO) sont respectées
- Coder dans un langage orienté objet avec un style défensif
- Le code source est documenté
- Utiliser les normes de codage du langage
- Utiliser un outil de gestion de versions