export {};

// インターフェースの定義
interface Person {
  name: string;
  create(): void;
}

// インターフェースの実装クラス
class Programmer implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  create(): void {
    console.log(this.name + 'はプログラマーです');
    console.log(this.name + 'はプログラムを作ります');
  }
}

// インターフェースの実装クラス
class Carpenter implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  create(): void {
    console.log(this.name + 'は大工です');
    console.log(this.name + 'は家を作ります');
  }
}

// インスタンス作成
const p: Programmer = new Programmer('エルサ');
p.create();

console.log('======');

// インスタンス作成
const c: Carpenter = new Carpenter('アナ');
c.create();
