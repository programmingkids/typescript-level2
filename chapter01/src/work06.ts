export {};

class Person {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p1: Person = new Person('Micky', 17);
console.log(p1.name);
console.log(p1.age);

console.log('======');

// error
// p1.name = 'Donald';
