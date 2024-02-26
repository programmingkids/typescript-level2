export {};

// T型の配列を保持するクラス
class Container<T> {
  // T型の要素を保持する配列
  private data: T[];

  constructor() {
    this.data = [];
  }

  // T型の引数を受け取る
  add(item: T) {
    // T型配列の要素として追加
    this.data.push(item);
  }

  // T型、またはundefinedを戻り値として返す
  get(): T | undefined {
    // 配列の先頭要素を返す
    return this.data.shift();
  }
}

// number型の配列を保持するContainerのインスタンス作成
const c1 = new Container<number>();
// number型の値を配列に追加
c1.add(10);
c1.add(20);
c1.add(30);

// 配列から先頭要素を取り出す
// 戻り値の型はnumber
console.log(c1.get()); // 10
console.log(c1.get()); // 20
console.log(c1.get()); // 30
