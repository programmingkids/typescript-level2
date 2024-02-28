export {};

// 型エイリアスでジェネリクスのデフォルト
// 2個のジェネリックス
// どのような型にも対応可能な型の宣言
type Product<X, Y> = {
  name: X;
  price: Y;
};

// Xは文字列、Yは数値
const p1: Product<string, number> = {
  name: '鉛筆',
  price: 120,
};

console.log(p1);

type ProductName = {
  name: string;
  code: string;
};

// XはProductName型、Yは数値型
const p2: Product<ProductName, number> = {
  name: { name: 'ボールペン', code: 'x442-125' },
  price: 200,
};
console.log(p2);
