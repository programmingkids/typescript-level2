export {};

// ジェネリクスではないクラス
class MyContainer {
  // ジェネリクスを利用したスタティックメソッド
  // 第1引数はT型の配列
  // 第2引数以降はT型の値を可変長引数で受け取る
  // 第1引数と第2引数以降の可変長引数を結合する
  // 戻り値はT型の配列
  static add<T>(data: T[], ...values: T[]): T[] {
    return data.concat(values);
  }
}

const fruits: string[] = ['apple', 'orange'];
// ジェネリクスのスタティックメソッドの呼び出し、ジェネリクスはstring
const result = MyContainer.add<string>(fruits, 'banana', 'peach', 'melon');
// 戻り値はstring[]
console.log(result); // [ 'apple', 'orange', 'banana', 'peach', 'melon' ]
