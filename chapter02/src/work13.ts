export {};

class Parent {
  public methodA(param: string): number {
    return param.length;
  }
}

class Child extends Parent {
  // エラー　アクセス制限が厳しくなる場合、オーバーライドできない
}
