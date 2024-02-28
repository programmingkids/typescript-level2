export {};

// インターフェースでジェネリクス
// 3個のジェネリクス
// どのような型にも対応可能なインタフェース
interface MyUserData<T, S, U> {
  name: T;
  school: S;
  age: U;
}

// Tは文字列、Sは文字列、Uは数値
const userData1: MyUserData<string, string, number> = {
  name: 'Bob',
  school: 'UCLA',
  age: 20,
};

console.log(userData1);

type User = {
  firstName: string;
  lastName: string;
  middleName?: string;
};

type School = {
  name: string;
  address: string;
};

// TはUser型、SはSchool型、Uは数値型
const userData2: MyUserData<User, School, number> = {
  name: { firstName: 'Indy', lastName: 'Jones' },
  school: { name: 'Harvard University', address: 'Boston' },
  age: 18,
};
console.log(userData2);
