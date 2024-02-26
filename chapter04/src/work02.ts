export {};

// 値をランダムに選択して返す関数
// T型の引数「value1」とT型の引数「value2」を受け取り
// 乱数が0.5より大きいなら「value1」、未満なら「value2」を返す
// 戻り値の型は「T」
function chooseRandom<T>(value1: T, value2: T): T {
  if (Math.random() > 0.5) {
    return value1;
  } else {
    return value2;
  }
}

// string型を指定してchooseRandomを呼び出す
const result1 = chooseRandom<string>('Bob', 'Tom');
console.log(result1);

// number型を指定してchooseRandomを呼び出す
const result2 = chooseRandom<number>(100, 200);
console.log(result2);
