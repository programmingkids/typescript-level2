export {};

// 抽象クラスの定義
abstract class Calc {
  // 具象フィールド
  public a: number;
  public b: number;
  // 抽象フィールド
  abstract operator: string;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  // 具象メソッド
  show(): void {
    console.log(`計算式：${this.a}${this.operator}${this.b}`);
  }

  // 抽象メソッド
  abstract execute(): number;
}

class CalcAdd extends Calc {
  // 具象フィールド
  operator: string = '+';

  // 具象メソッド
  execute(): number {
    return this.a + this.b;
  }
}

class CalcMinus extends Calc {
  // 具象フィールド
  operator: string = '-';

  // 具象メソッド
  execute(): number {
    return this.a - this.b;
  }
}

// インスタンス作成
const tashizan: CalcAdd = new CalcAdd(5, 4);
// メソッド呼び出し
tashizan.show();
console.log(tashizan.execute());

console.log('======');

// インスタンス作成
const hikizan: CalcMinus = new CalcMinus(8, 3);
// メソッド呼び出し
hikizan.show();
console.log(hikizan.execute());
