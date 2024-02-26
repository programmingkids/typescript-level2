export {};

type Person = {
  firstName: string;
  middleName?: string;
  lastName?: string;
};

// ジェネリックスでPersonを指定
// Personの全プロパティが必須になる
type RequiredPerson = Required<Person>;

const p: RequiredPerson = {
  firstName: 'Martin',
  middleName: 'Luther',
  lastName: 'King',
};

console.log(p);
