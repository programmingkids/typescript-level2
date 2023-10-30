export {};

// インターフェースの定義
interface Person {
  readonly name: string;
  readonly age: number;
}

// インターフェース「Person」の型注釈でオブジェクト作成
const micky: Person = {
  name: 'Micky',
  age: 17,
};

// 取得処理は可能
console.log(micky.name);
console.log(micky.age);

// エラー　再代入不可
// micky.name = 'Donald';
// micky.age = 15;
