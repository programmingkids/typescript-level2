export {};

type Person = {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  address: string;
};

// Personから特定のプロパティを取り出す
// firstName, lastName, ageのプロパティのみの型を取り出す
type PickPerson = Pick<Person, 'firstName' | 'lastName' | 'age'>;

const p: PickPerson = {
  firstName: 'John',
  lastName: 'Lennon',
  age: 17,
};

console.log(p);
