export {};

class Player {
  name: string;
  job: string;

  constructor(name: string, job: string) {
    this.name = name;
    this.job = job;
  }

  show(): void {}
}

const p1: Player = new Player('Elsa', 'Magician');
p1.show();

console.log('======');

const p2: Player = new Player('Anna', 'Fighter');
p2.show();

console.log('======');
p1.show();
