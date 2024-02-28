export {};

// 抽象クラスの定義
abstract class Robot {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  // 具象メソッド
  public show(): void {
    console.log('ロボットの名前：' + this.name);
  }

  // 具象メソッド
  public execute(): void {
    // 抽象メソッドの呼び出し
    this.speak();
    this.walk();
    this.jump();
  }

  // 抽象メソッド
  abstract speak(): void;
  abstract walk(): void;
  abstract jump(): void;
}

// 抽象クラスを継承した具象クラス
class SuperRobot extends Robot {
  // 具象メソッド
  speak(): void {
    console.log('ゆっくり話します');
  }
  // 具象メソッド
  walk(): void {
    console.log('カッコよく歩きます');
  }
  // 具象メソッド
  jump(): void {
    console.log('驚くほどにジャンプします');
  }
}

// サブクラスのインスタンス作成
const sr: SuperRobot = new SuperRobot('すごいロボット');
// メソッドの呼び出し
sr.show();
sr.execute();

// エラー　抽象クラスのインスタンス作成はできない
// const r: Robot = new Robot('普通のロボット');
