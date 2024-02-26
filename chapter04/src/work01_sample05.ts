export {};

// ジェネリクスを利用した関数
// T型の配列からランダムな要素（T）を返す関数
function randomPick<T>(data: T[]): T {
  const r = Math.floor(Math.random() * data.length);
  return data[r];
}

// 文字列配列を引数で渡すとランダムな要素（文字列）が返る
const element1 = randomPick<string>(['apple', 'orange', 'melon']);
console.log(element1);

// 数値配列を引数で渡すとランダムな要素（数値）が返る
const element2 = randomPick<number>([11, 12, 13]);
console.log(element2);
