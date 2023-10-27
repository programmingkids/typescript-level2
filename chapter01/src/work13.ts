export {};

class Calc {
  static num1: number;
  static num2: number;

  static add(): number {
    return Calc.num1 + Calc.num2;
  }

  static minus(): number {
    return Calc.num1 - Calc.num2;
  }
}

Calc.num1 = 5;
Calc.num2 = 3;

console.log(Calc.add());
console.log(Calc.minus());
