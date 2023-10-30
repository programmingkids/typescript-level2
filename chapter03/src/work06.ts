export {};

// インターフェースの定義
interface Person {
  think(): void;
}

// インターフェースの定義
interface Programmer {
  writeCode(): void;
}

// インターフェースの定義
interface Carpenter {
  buildHome(): void;
}

// 複数のインターフェースの実装クラス
class Developer implements Person, Programmer {
  think(): void {
    console.log('プログラムを考えます');
  }
  writeCode(): void {
    console.log('プログラムを作ります');
  }
}

// 複数のインターフェースの実装クラス
class Engineer implements Person, Carpenter {
  think(): void {
    console.log('家の仕組みを考えます');
  }

  buildHome(): void {
    console.log('家を作ります');
  }
}

// インスタンス作成
const d: Developer = new Developer();
d.think();
d.writeCode();

console.log('======');

// インスタンス作成
const e: Engineer = new Engineer();
e.think();
e.buildHome();
