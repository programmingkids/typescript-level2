export {};

// 抽象クラスが定義されています
abstract class Monster {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract attack(): void;
}

// ここにクラスを定義します
// 抽象クラスを継承した具象クラスを作成します
class Dragon extends Monster {
  attack(): void {
    console.log(this.name + 'は炎で攻撃します');
  }
}

// クラス作成後、以下のコメントを外します。以下のプログラムは修正しません
/*
const d: Dragon = new Dragon('ファイヤードラゴン');
d.attack();
*/
