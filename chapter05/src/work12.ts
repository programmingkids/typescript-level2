export {};

// 関数の宣言
function add(val1: number, val2: number): number {
  return val1 + val2;
}

// 関数「add」の型から引数の部分の型を取り出す
// (val1: number, val2:number) => number
// [val1: number, val2:number]
type Params = Parameters<typeof add>;

// 引数の型に基づく値の作成
const p: Params = [10, 20];
// 関数「add」を呼び出す。引数として「p」を渡す
// 「p」をスプレッド演算子で展開する
const result = add(...p);
console.log(result);
