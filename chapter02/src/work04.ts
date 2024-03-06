export {};

class Friend {
  // クラスの内側からのみアクセス可能
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // クラスの内外から呼び出し可能なメソッド
}

const f: Friend = new Friend('Bob', 18);

// フィールドに値を設定するメソッド

// フィールドから値を取得するメソッド

// エラー
// f.name = 'Elsa';
// f.age = 17;
// console.log(f.name);
// console.log(f.age);
