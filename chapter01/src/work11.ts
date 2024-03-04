export {};

class Player {
  name: string;
  level: number;
  job: string;

  constructor(name: string, level: number, job: string) {
    this.name = name;
    this.level = level;
    this.job = job;
  }

  show(): void {
    console.log('Name  : ' + this.name);
    console.log('Level : ' + this.level);
    console.log('Job   : ' + this.job);
  }
}

const p1: Player = new Player('Micky', 5, 'Magician');
p1.show();

console.log('======');

const p2: Player = new Player('Donald', 7, 'Fighter');
p2.show();

// error
// Player.partyName = 'XXXX';
