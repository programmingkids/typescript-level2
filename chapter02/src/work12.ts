export {};

class Parent {
  public methodA(param: string): number {
    return param.length;
  }
}

class Child extends Parent {
  // エラー　戻り値の型が異なるのでオーバーライドできない
  // public methodA(param: string): string {
  //   return param.toLowerCase();
  // }
}
