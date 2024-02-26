export {};

type Person = {
  firstName: string;
  middleName: string;
  lastName: string;
};

// ジェネリックスでPersonを指定
// Personの全プロパティがオプションになる
type PartialPerson = Partial<Person>;

const p: PartialPerson = {
  lastName: 'King',
};

console.log(p);
