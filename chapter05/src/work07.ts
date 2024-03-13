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
