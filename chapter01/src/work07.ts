export {};

class Calc {
  add(a: number, b: number): number {
    const result: number = a + b;
    return result;
  }
}

const c1 = new Calc();
const r1: number = c1.add(5, 3);
console.log(r1);

const c2 = new Calc();
const r2: number = c2.add(4, 9);
console.log(r2);
