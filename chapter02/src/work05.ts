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

// 親クラスのインスタンス作成

console.log('=====');

// 子クラスのインスタンス作成
