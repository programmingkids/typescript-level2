export {};

// User型の定義
type User = {
  name: string;
  age: number;
};

// User型の配列
const data: User[] = [
  {
    name: 'Bob',
    age: 15,
  },
  {
    name: 'Tom',
    age: 16,
  },
  {
    name: 'Meg',
    age: 17,
  },
];

// 文字列の配列からランダムな要素（文字列）を返す関数
function randomPickString(data: string[]): string {
  const r = Math.floor(Math.random() * data.length);
  return data[r];
}

// 数値の配列からランダムな要素（数値）を返す関数
function randomPickNumber(data: number[]): number {
  const r = Math.floor(Math.random() * data.length);
  return data[r];
}

// User型の配列からランダムな要素（User型）を返す関数
function randomPickUser(data: User[]): User {
  const r = Math.floor(Math.random() * data.length);
  return data[r];
}

// 文字列配列を引数で渡すとランダムな要素（文字列）が返る
const element1 = randomPickString(['apple', 'orange', 'melon']);
console.log(element1);

// 数値配列を引数で渡すとランダムな要素（数値）が返る
const element2 = randomPickNumber([11, 12, 13]);
console.log(element2);

// User配列を引数で渡すとランダムな要素（User）が返る
const element3 = randomPickUser(data);
console.log(element3);
