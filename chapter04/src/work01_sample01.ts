export {};

// 文字列の配列からランダムな要素（文字列）を返す関数
function randomPick(data: string[]): string {
  const r = Math.floor(Math.random() * data.length);
  return data[r];
}

// 文字列配列を引数で渡すとランダムな要素（文字列）が返る
const element = randomPick(['apple', 'orange', 'melon']);
console.log(element);
