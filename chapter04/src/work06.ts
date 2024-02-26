export {};

// T型とS型の値を保持するクラス
class PairValue<T, S> {
  // T型のメンバ変数「firstValue」
  private firstValue: T;
  // S型のメンバ変数「secondValue」
  private secondValue: S;

  constructor(firsValue: T, secondValue: S) {
    this.firstValue = firsValue;
    this.secondValue = secondValue;
  }

  // T型のメンバ変数「firstValue」を返す
  getFist(): T {
    return this.firstValue;
  }

  // T型のメンバ変数「secondValue」を返す
  getSecond(): S {
    return this.secondValue;
  }
}

// numberとstringの値を保持するPairValueのインスタンス作成
const pair = new PairValue<number, string>(50, 'Apple');

// 戻り値はnumber型
const p1 = pair.getFist();
console.log(p1);

// 戻り値はstring型
const p2 = pair.getSecond();
console.log(p2);
