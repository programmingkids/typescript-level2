export {};

type UserName = string | null | undefined;

// null, undefinedの型を取り除く
type MyUserName = NonNullable<UserName>;

const name: MyUserName = 'Bob';
console.log(name);

// エラー
// const name2: MyUserName = null;
// console.log(name2);

// const name3: MyUserName = undefined;
// console.log(name3);
