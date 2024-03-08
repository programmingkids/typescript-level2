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
  }

  // 抽象メソッド
}

// 抽象クラスを継承した具象クラス
class SuperRobot extends Robot {}

// サブクラスのインスタンス作成
const sr: SuperRobot = new SuperRobot('すごいロボット');
// メソッドの呼び出し
sr.show();
sr.execute();

// エラー　抽象クラスのインスタンス作成はできない
// const r: Robot = new Robot('普通のロボット');
