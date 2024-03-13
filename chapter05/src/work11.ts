export {};

type UserName = string | null | undefined;

// null, undefinedの型を取り除く
// null, undefinedの代入不可

// エラー
// const name2: MyUserName = null;
// console.log(name2);

// const name3: MyUserName = undefined;
// console.log(name3);
