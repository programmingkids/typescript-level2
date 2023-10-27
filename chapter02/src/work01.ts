export {};

class Person {
  // クラスの内外で利用可能
  public name: string;
  public age: number;
  // クラスの内側のみで利用可能
  private hobby: string;
  private job: string;

  constructor(name: string, age: number, hobby: string, job: string) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.job = job;
  }

  show(): void {
    // クラスの内側ではすべて利用可能
    console.log(this.name);
    console.log(this.age);
    console.log(this.hobby);
    console.log(this.job);
  }
}

const p: Person = new Person('ボブ', 18, 'テニス', '高校生');
p.show();

// クラスの外側で代入可能
p.name = 'トム';
p.age = 15;

// クラスの外側で取得可能
console.log(p.name);
console.log(p.age);

// error クラスの外側で代入不可
// p.hobby = '水泳';
// p.job = '中学生';

// error クラスの外側で取得不可
// console.log(p.hobby);
// console.log(p.job);
