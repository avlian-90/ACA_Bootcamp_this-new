/* Write a Baby constructor subclassing Person.
Besides name and age , Baby takes a third argument to initialize favoriteToy .
Besides the methods on Person.prototype, babies have the ability to .play() :
Should return a string "Playing with x", x being the favorite toy. */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  eat(somefood) {
    if (this.stomach.length < 10) {
      this.stomach.push(somefood);
    }
    return this.stomach;
  }
  poop() {
    this.stomach.length = 0;
  }
  toString() {
    return `${this.name}, ${this.age}`;
  }
}

class Baby extends Person {
  constructor(name, age, favoriteToy) {
    super(name, age);
    this.favoriteToy = favoriteToy;
  }
  play() {
    return `${this.name} is playing with ${this.favoriteToy}.`;
  }
}

const baby = new Baby("Lily", 5, "panda");
console.log(baby);
console.log(baby.play());
