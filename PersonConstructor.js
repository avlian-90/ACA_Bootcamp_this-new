/* Person Constructor
Write a Person Constructor that initializes name and age from arguments.
All instances of Person should initialize with an empty stomach array.
Give instances of Person the ability to .eat("someFood") :
When eating an edible, it should be pushed into the stomach .
The eat method should have no effect if there are 10 items in the stomach .
Give instances of Person the ability to .poop() :
When an instance poops, its stomach should empty.
Give instances of Person a method .toString() :
It should return a string with name and age . Example: "Mary, 50" */

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (somefood) {
  if (this.stomach.length < 10) {
    this.stomach.push(somefood);
  }
  return this.stomach;
};

Person.prototype.poop = function () {
  this.stomach.length = 0;
};

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

const person1 = new Person("Liana", 31);
const person2 = new Person("Hakob", 30);

console.log(person1.toString());
console.log(person2.eat("banana"));
console.log(person2.poop());
console.log(person2.eat("burger"));
console.log(person2.eat("apple"));
