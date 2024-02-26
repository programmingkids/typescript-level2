export {};

type Person = {
  firstName: string;
  middleName?: string;
  lastName?: string;
};

// ジェネリックスでPersonを指定
// Personの全プロパティが読み込み専用になる
type ReadonlyPerson = Readonly<Person>;

const p: ReadonlyPerson = {
  firstName: 'Martin',
  middleName: 'Luther',
  lastName: 'King',
};

console.log(p);

// エラー 代入できない
// p.firstName = 'John';
