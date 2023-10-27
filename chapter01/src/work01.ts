export {};

class Person {
  name: string | undefined;
  age: number | undefined;
}

const p1: Person = new Person();
p1.name = 'Micky';
p1.age = 17;

console.log(p1.name);
console.log(p1.age);

console.log('======');

const p2: Person = new Person();
p2.name = 'Donald';
p2.age = 16;

console.log(p2.name);
console.log(p2.age);
