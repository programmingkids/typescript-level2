export {};

class Parent {
  public methodA(param: string): number {
    return param.length;
  }
}

class Child extends Parent {
  // エラー　戻り値の型が異なるのでオーバーライドできない
}
