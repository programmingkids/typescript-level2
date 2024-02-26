export {};

type Person = {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  address: string;
};

// Personから特定のプロパティを取り除く
// middleName, addressのプロパティを取り除く
type OmitPerson = Omit<Person, 'middleName' | 'address'>;

const p: OmitPerson = {
  firstName: 'John',
  lastName: 'Lennon',
  age: 17,
};

console.log(p);
