export {};

// 抽象クラスの定義
abstract class Calc {
  // 具象フィールド
  public a: number;
  public b: number;
  // 抽象フィールド

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  // 具象メソッド
  show(): void {}

  // 抽象メソッド
}

class CalcAdd extends Calc {
  // 具象フィールド
  // 具象メソッド
}

class CalcMinus extends Calc {
  // 具象フィールド
  // 具象メソッド
}

// インスタンス作成
const tashizan: CalcAdd = new CalcAdd(5, 4);
// メソッド呼び出し
tashizan.show();

console.log('======');

// インスタンス作成
const hikizan: CalcMinus = new CalcMinus(8, 3);
// メソッド呼び出し
hikizan.show();
