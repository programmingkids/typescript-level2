export {};

// 3個のジェネリクスを受け取る関数
// [T,S,U]のタプルを作成して返す関数
// 戻り値の型はタプルであり、[T,S,U]
function createTuple<T, S, U>(value1: T, value2: S, value3: U): [T, S, U] {
  const tuple: [T, S, U] = [value1, value2, value3];
  return tuple;
}

// [number, string, boolean]のタプルを作る
const data1 = createTuple<number, string, boolean>(175, 'Bob', true);
console.log(data1);

// [string, string, number]のタプルを作る
const data2 = createTuple<string, string, number>('Tom', 'Jerry', 200);
console.log(data2);
