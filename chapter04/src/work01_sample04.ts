export {};

// ジェネリクスを利用した関数
// T型の配列からランダムな要素（T）を返す関数
function randomPick<T>(data: T[]): T {
  const r = Math.floor(Math.random() * data.length);
  return data[r];
}
