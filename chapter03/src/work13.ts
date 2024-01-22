export {};

// インターフェースが定義されています
interface Person {
  name: string;
  age: number;
  job: string;
}

interface Fighter {
  attack(): void;
}

interface Magician {
  useMagic(): void;
}

// ここにクラスを定義します
// インターフェースを実装した具象クラス「Hero」を作成します
class Hero implements Person, Fighter, Magician {
  name: string;
  age: number;
  job: string;

  constructor(name: string, age: number, job: string) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  show(): void {
    console.log('名前:' + this.name);
    console.log('年齢:' + this.age);
    console.log('職業:' + this.job);
  }

  attack(): void {
    console.log('勇者は勇敢に戦った');
  }

  useMagic(): void {
    console.log('勇者は魔法で戦った');
  }
}

// クラス作成後、以下のコメントを外します。以下のプログラムは修正しません
/*
const h: Hero = new Hero('ミッキー', 18, '勇者');
h.show();
h.attack();
h.useMagic();
*/
