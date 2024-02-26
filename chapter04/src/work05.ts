export {};

// T型の値を保持するクラス
class MyValue<T> {
  // T型のメンバ変数「value」
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  // T型のメンバ変数「value」を返す
  // 戻り値の型はT
  getValue(): T {
    return this.value;
  }
}

// string型の値を保持するMyValue
const m1 = new MyValue<string>('Bob');
// 戻り値はstring型
const r1 = m1.getValue();
console.log(r1);

// number型の値を保持するMyValue
const m2 = new MyValue<number>(100);
// 戻り値はnumber型
const r2 = m2.getValue();
console.log(r2);
