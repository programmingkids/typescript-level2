export {};

// 以下のようなクラスが定義されています
class Monster {
  name: string;
  hp: number;
  type: string;

  constructor(name: string, hp: number, type: string) {
    this.name = name;
    this.hp = hp;
    this.type = type;
  }

  show(): void {
    console.log('名前：' + this.name);
    console.log('HP：' + this.hp);
    console.log('タイプ：' + this.type);
  }
}

// 以下の部分に処理を作成します。これより上部は修正しません
// クラス「Monster」のインスタンスを作成します。コンストラクタに適切な値をわたします

// クラス「Monster」のインスタンスからメソッド「show」を呼び出します
