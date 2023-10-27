export {};

class Parent {
  public methodA(param: string): number {
    return param.length;
  }
}

class Child extends Parent {
  // エラー　引数の型が違うのでオーバーライドできない
  // public methodA(param: number): number {
  //   return param * param;
  // }
}
