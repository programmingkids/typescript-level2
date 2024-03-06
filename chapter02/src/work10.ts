export {};

class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public show(): void {
    console.log('名前は' + this.name);
  }

  public cry(): void {
    console.log('普通になく');
  }
}

class Dog extends Animal {
  // オーバーライドする
}

class Cat extends Animal {
  // オーバーライドする
}

const pochi: Dog = new Dog('ポチ');
pochi.show();
pochi.cry();

console.log('======');

const tama: Cat = new Cat('タマ');
tama.show();
tama.cry();
