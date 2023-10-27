export {};

// クラス「Player」を定義します
class Player {
  name: string;
  weapon: string;
  hp: number;

  constructor(name: string, weapon: string, hp: number) {
    this.name = name;
    this.weapon = weapon;
    this.hp = hp;
  }

  fight(): void {
    console.log(this.name + 'は' + this.weapon + 'で戦った');
  }

  status(): void {
    console.log(this.name + 'の武器は' + this.weapon);
    console.log(this.name + 'のHPは' + this.hp);
  }
}

// クラス作成後、以下のコメントを外します。以下のプログラムは修正しません
/*
const player: Player = new Player('トム', '勇者の剣', 20);
player.fight();
player.status();
*/
