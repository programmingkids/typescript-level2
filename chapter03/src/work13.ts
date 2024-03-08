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

// クラス作成後、以下のコメントを外します。以下のプログラムは修正しません
/*
const h: Hero = new Hero('ミッキー', 18, '勇者');
h.show();
h.attack();
h.useMagic();
*/
