export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p1: Person = new Person('Micky', 17);
console.log(p1.name);
console.log(p1.age);

console.log('======');

const p2: Person = new Person('Donald', 16);
console.log(p2.name);
console.log(p2.age);
