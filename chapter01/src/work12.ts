export {};

class Player {
  static money: number = 0;

  name: string;
  job: string;

  constructor(name: string, job: string) {
    this.name = name;
    this.job = job;
  }

  show(): void {
    console.log('Name  :' + this.name);
    console.log('Job   :' + this.job);
    console.log('Money :' + Player.money);
  }
}

const p1: Player = new Player('Elsa', 'Magician');
p1.show();

console.log('=====');

const p2: Player = new Player('Anna', 'Fighter');
p2.show();
