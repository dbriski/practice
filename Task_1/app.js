const addBtn = document.querySelector('button');

const animals = [];

class AnimalInput {
  constructor(nameAnimal, colorAnimal, typeAnimal) {
    this.nameAnimal = nameAnimal;
    this.colorAnimal = colorAnimal;
    this.typeAnimal = typeAnimal;
  }
}

function writeToLog() {
  const nameAnimal = document.getElementById('name-animal').value;
  const colorAnimal = document.getElementById('color-animal').value;
  const typeAnimal = document.getElementById('type-animal').value;

  const animal = new AnimalInput(nameAnimal, colorAnimal, typeAnimal);
  return animal;
}

// function addAnimalToList() {
//   const animalListEl = document.getElementById('animal-list');
//   const animalListItem = animalListEl.createElement('li');
//   animalListItem.innerHTML = `${animalName} ${animalColor} ${animalType} `;
//   animals.push(animalListItem);
// }

class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    // this.actions = {
    //   play() {
    //     console.log(`${type} ${name} plays`);
    //   },
    //   eat() {
    //     console.log(`${type} ${name} eats`);
    //   },
    // };
    // if ((shouldPlay = false)) {
    //   this.play();
    // }
  }

  play() {
    console.log(`${this.type} ${this.name} plays`);
  }

  eat() {
    console.log(`${this.type} ${this.name} eats`);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name, color);
    this.type = 'Cat';
  }
}

class Dog extends Animal {
  constructor(name, color) {
    super(name, color);
    this.type = 'Dog';
    // this.play(this.type);
    // this.eat(this.type);
  }
}

class Cow extends Animal {
  constructor(name, color) {
    super(name, color);
    this.type = 'Cow';
    // this.play(this.type);
    // this.eat(this.type);
  }
}

const cat = new Cat('Vjeko', 'Black');
console.log(cat);
cat.play();
cat.eat();
// const dog = new Dog('Dani', 'Black');
const cow = new Cow('Milka', 'Black');
cow.play();

// console.log(catObj);
// console.log(dog);
// console.log(cow.name);
// cat.actions.play('ccccat');
// catObj.actions.eat();

addBtn.addEventListener('click', () => console.log(writeToLog()));
