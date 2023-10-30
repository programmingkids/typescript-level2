export {};

// 抽象クラスの宣言
abstract class Animal {
  // フィールド
  public name: string;

  // コンストラクタ
  constructor(name: string) {
    this.name = name;
  }

  // 具象メソッド
  public show(): void {
    console.log('名前：' + this.name);
  }

  // 抽象メソッド
  abstract cry(): void;
}

// 抽象クラスを継承したクラス
class Dog extends Animal {
  // 具象メソッド
  cry(): void {
    console.log('鳴き声：ワンワン');
  }
}

const pochi: Dog = new Dog('ポチ');
pochi.show();
pochi.cry();

// エラー　抽象クラスのインスタンスを作成できない
// const a: Animal = new Animal('ポチ');
