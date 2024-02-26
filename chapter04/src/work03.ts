export {};

export {};

// valueをrepeat回数繰り返した配列を返す
// T型の値を受け取り、repeat回数繰り返した配列を返す
// 戻り値の型はT型の配列
function multipleArray<T>(value: T, repeat: number): T[] {
  // T型の空の配列の定義
  const result: T[] = [];
  // repeat回数繰り返す
  for (let i = 0; i < repeat; i++) {
    // T型の要素を追加
    result.push(value);
  }
  // T型の配列を返す
  return result;
}

// string型の「apple」を5回繰り返した配列作成
const apples = multipleArray<string>('apple', 5);
console.log(apples);

// number型の「100」を3回繰り返した配列作成
const numbers = multipleArray<number>(100, 3);
console.log(numbers);
