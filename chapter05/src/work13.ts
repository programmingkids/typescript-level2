export {};

// 関数の宣言
function add(val1: number, val2: number): number {
  return val1 + val2;
}

// 関数「add」の型から戻り値の型を取り出す
// (val1: number, val2:number) => number
// number
type AddReturnType = ReturnType<typeof add>;

const result: AddReturnType = add(10, 20);
console.log(result);
