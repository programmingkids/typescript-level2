export {};

// 文字列の配列
const names: string[] = ['Tomas', 'Bob', 'Tyler', 'Jennifer'];

// mapの戻り値の型をジェネリクスで指定する
// mapのアロー関数の戻り値をnumberで指定する
// map全体の戻り値はnumber[]になる
const result: number[] = names.map<number>((e) => e.length);
console.log(result);
