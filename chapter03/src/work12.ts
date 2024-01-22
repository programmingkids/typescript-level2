export {};

// インターフェースが定義されています
interface A {
  name: string;
  hobby: string;
}

interface B extends A {
  age: number;
}

interface C extends B {
  bloodType: string;
}

interface D extends C {
  show(): void;
}

// ここにクラスを定義します
// インターフェースを実装した具象クラス「Person」を作成します
class Person implements C {
  name: string;
  hobby: string;
  age: number;
  bloodType: string;

  constructor(name: string, hobby: string, age: number, bloodType: string) {
    this.name = name;
    this.hobby = hobby;
    this.age = age;
    this.bloodType = bloodType;
  }

  show(): void {
    console.log('Name      :' + this.name);
    console.log('Hobby     :' + this.hobby);
    console.log('Age       :' + this.age);
    console.log('BloodType :' + this.bloodType);
  }
}

// クラス作成後、以下のコメントを外します。以下のプログラムは修正しません
/*
const p: Person = new Person('Bob', 'Tennis', 17, 'AB');
p.show();
*/
