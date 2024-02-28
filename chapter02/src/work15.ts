export {};

// Singerクラスの定義
class Singer {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public sing(): void {
    console.log(this.name + 'は歌を歌います');
  }
}

// ここにクラスを定義します
class Idol extends Singer {
  public dance(): void {
    this.sing();
    console.log(this.name + 'は楽しく踊りながら歌います');
  }
}

// クラス作成後、以下のコメントを外します。以下のプログラムは修正しません
/*
const nogizaka: Idol = new Idol('乃木坂');
nogizaka.dance();
*/
