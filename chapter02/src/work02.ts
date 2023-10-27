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
    console.log('LELVEL:' + this.level);
    console.log('ATTACK:' + this.attack);
  }

  // クラスの内外から呼び出し可能
  public fight(): void {
    console.log(this.name + 'の攻撃');
    // クラスの内側からは呼び出し可能
    const attack: number = this.getAttackPoint();
    console.log('攻撃力は' + attack);
  }

  // クラスの内側からのみ呼び出し可能
  private getAttackPoint(): number {
    const result = this.level * this.attack;
    return result;
  }
}

const hero: Hero = new Hero('ボブ', 5, 3);
// クラスの外側から呼び出し可能
hero.show();
hero.fight();

// エラー　クラスの外側から呼び出し不可
// hero.getAttackPoint();
