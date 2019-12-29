// ES 6

class AnimalES6 {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}

class DogES6 extends AnimalES6 {
  getName() {
    super.getName();
  }

  bark() {
    console.log(`Dog ${this.name} is barking`);
  }
}

var dog = new DogES6("Tuzik");
dog.getName();
dog.bark();

// ES 5

function AnimalES5(name) {
  this.name = name;
}

AnimalES5.prototype.getName = function() {
  console.log(this.name);
};

function DogES5(name) {
  AnimalES5.call(this, name);
  this.name = name;
}

DogES5.prototype = Object.create(AnimalES5.prototype);

DogES5.prototype.getName = function() {
  AnimalES5.prototype.getName.call(this);
};

DogES5.prototype.bark = function() {
  console.log(`Dog ${this.name} is barking`);
};

var dog = new DogES5("Tuzik");
dog.getName();
dog.bark();
