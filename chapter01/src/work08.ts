export {};

class Player {
  name: string;
  job: string;
  level: number;

  constructor(name: string, job: string, level: number) {
    this.name = name;
    this.job = job;
    this.level = level;
  }

  show(): void {
    console.log('Name  : ' + this.name);
    console.log('Job   : ' + this.job);
    console.log('Level : ' + this.level);
  }
}

const p: Player = new Player('Elsa', 'Magician', 5);
p.show();
