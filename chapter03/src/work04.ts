export {};

// インターフェースの定義
interface Animal {
  walk(): void;
  cry(): void;
}

// インターフェースを実装したクラス
class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  // 具象メソッド
  walk(): void {
    console.log(this.name + 'はトコトコと歩きます');
  }

  // 具象メソッド
  cry(): void {
    console.log(this.name + 'はワンワンとなきます');
  }
}

const pochi: Dog = new Dog('ポチ');
pochi.walk();
pochi.cry();
