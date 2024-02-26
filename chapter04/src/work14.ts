export {};

// ジェネリクスのデフォルトをstringにする
class MyValue<T = string> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

const m1: MyValue<string> = new MyValue<string>('Tom');
console.log(m1.value);

const m2: MyValue = new MyValue('Bob');
console.log(m2.value);
