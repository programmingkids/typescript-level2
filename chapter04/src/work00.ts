export {};

// ジェネリクスを利用しないプログラムを提示

// 2個の文字列を受け取り、約50％の確率でどちらかの文字列を返す
function chooseRandomlyString(v1: string, v2: string): string {
  return Math.random() <= 0.5 ? v1 : v2;
}

const str1 = chooseRandomlyString('hoge', 'fuga');
console.log(str1);

console.log('======');

// 2個の数値を受け取り、約50％の確率でどちらかの須知を返す
function chooseRandomlyNumber(v1: number, v2: number): number {
  return Math.random() <= 0.5 ? v1 : v2;
}

const num1: number = chooseRandomlyNumber(3, 5);
console.log(num1);
