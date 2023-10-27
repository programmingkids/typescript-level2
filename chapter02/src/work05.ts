export {};

// 親クラス
class Character {
  public name: string = 'ボブ';
  public hp: number = 20;

  public show(): void {
    console.log('NAME: ' + this.name);
    console.log('HP  : ' + this.hp);
  }

  public attack(): void {
    console.log(this.name + 'は普通に攻撃した');
  }
}

// 子クラス
class Hero extends Character {
  public weapon: string = '勇者の剣';

  public specialAttack(): void {
    console.log(this.name + 'は' + this.weapon + 'で攻撃した');
  }
}

// 親クラスのインスタンス作成
const c: Character = new Character();
c.show();
c.attack();

console.log('=====');

// 子クラスのインスタンス作成
const h: Hero = new Hero();
h.show();
h.specialAttack();
