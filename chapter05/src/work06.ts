export {};

// オブジェクトのキーと値の型を指定する
// キーはstring, 値はnumber
type User = Record<string, number>;

const u: User = {
  Bob: 100,
  Ryan: 200,
  Anna: 120,
};

console.log(u);
