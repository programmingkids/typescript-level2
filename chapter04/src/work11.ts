export {};

// T型はstring、またはnumberでなければならない
interface UserData<T extends string | number> {
  value: T;
}

const u1: UserData<string> = {
  value: '山田',
};
console.log(u1);

const u2: UserData<number> = {
  value: 120,
};
console.log(u2);

// エラー
// const u3: UserData<boolean> = {
//   value: false
// }
// console.log(u3);
