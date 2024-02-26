export {};

// ジェネリクスを利用した関数
// T型の配列からランダムな要素（T）を返す関数
function randomPick<T>(data: T[]): T {
  const r = Math.floor(Math.random() * data.length);
  return data[r];
}

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

// User配列を引数で渡すとランダムな要素（User）が返る
const element = randomPick<User>(data);
console.log(element);
