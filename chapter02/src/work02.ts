export {};

class Hero {
  public name: string;
  public level: number;
  public attack: number;

  constructor(name: string, level: number, attack: number) {
    this.name = name;
    this.level = level;
    this.attack = attack;
  }

  // クラスの内外から呼び出し可能
  public show(): void {
    console.log('NAME  :' + this.name);
    console.log('LEVEL:' + this.level);
    console.log('ATTACK:' + this.attack);
  }
}

const hero: Hero = new Hero('ボブ', 5, 3);
// クラスの外側から呼び出し可能
hero.show();

// エラー　クラスの外側から呼び出し不可
// hero.getAttackPoint();
