export {};

class Person {
  name: string = 'Bob';
  age: number = 16;
}

const p1: Person = new Person();
console.log(p1.name);
console.log(p1.age);

console.log('======');

const p2: Person = new Person();
p2.name = 'Bell';
p2.age = 15;
console.log(p2.name);
console.log(p2.age);
