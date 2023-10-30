export {};

// インターフェースの定義
interface Animal {
  name: string;
}

// 同名のインターフェースの定義
interface Animal {
  age: number;
}

// 同名のインターフェースの定義
interface Animal {
  show(): void;
  cry(): void;
}

// インターフェースの実装クラス
class Dog implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  show(): void {
    console.log('名前：' + this.name);
    console.log('年齢：' + this.age);
  }

  cry(): void {
    console.log('鳴き声：ワンワン');
  }
}

// インスタンス作成
const pochi: Dog = new Dog('ポチ', 5);
pochi.show();
pochi.cry();
