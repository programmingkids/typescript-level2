export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  show(): void {
    console.log(`I am ${this.name}`);
    console.log(`I am ${this.age} years old`);
  }
}

class Muscian extends Person {
  instrument: string;

  constructor(name: string, age: number, instrument: string) {
    super(name, age);
    this.instrument = instrument;
  }

  play(): void {
    console.log(`I can play ${this.instrument}`);
  }
}

// エラー
// Personを継承していないクラスはジェネリクスに利用できない
// const u: User = new User();
// const mp2: MyPerson<User> = new MyPerson<User>(u);
