export {};

class A {}

class B extends A {}

class C extends B {}

const c: C = new C();
