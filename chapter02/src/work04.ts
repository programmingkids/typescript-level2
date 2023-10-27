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
  // フィールドを設定するメソッド
  public setName(name: string): void {
    this.name = name;
  }

  // フィールドを設定するメソッド
  public setAge(age: number): void {
    if (age < 0) {
      age = 0;
    }
    this.age = age;
  }

  // フィールドの値を取得するメソッド
  public getName(): string {
    return this.name;
  }

  // フィールドの値を取得するメソッド
  public getAge(): number {
    return this.age;
  }
}

const f: Friend = new Friend('Bob', 18);

// フィールドに値を設定するメソッド
f.setName('Elsa');
f.setAge(17);

// フィルターから値を取得するメソッド
console.log(f.getName());
console.log(f.getAge());

// エラー
// f.name = 'Elsa';
// f.age = 17;
// console.log(f.name);
// console.log(f.age);
