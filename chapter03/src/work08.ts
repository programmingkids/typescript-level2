export {};

// インターフェースの定義
interface Student {
  name: string;
  age: number;
  study(): void;
}

// インターフェース「Student」の型注釈でオブジェクト作成
const micky: Student = {
  name: 'Micky',
  age: 17,
  study: () => {
    console.log('I will study hard');
  },
};

// 呼び出し
console.log(micky.name);
console.log(micky.age);
micky.study();
