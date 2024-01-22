export {};

// ジェネリクスを利用したプログラム
function chooseRandom<T>(v1: T, v2: T): T {
  return Math.random() <= 0.5 ? v1 : v2;
}

const str1: string = chooseRandom<string>('hoge', 'fuga');
console.log(str1);

console.log('======');

const num1: number = chooseRandom<number>(3, 5);
console.log(num1);
