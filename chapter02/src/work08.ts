export {};

class A {
  constructor() {
    console.log('クラスAのコンストラクタ');
  }
}

class B extends A {
  constructor() {
    super();
    console.log('クラスBのコンストラクタ');
  }
}

class C extends B {
  constructor() {
    super();
    console.log('クラスCのコンストラクタ');
  }
}

const c: C = new C();
