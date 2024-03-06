export {};

class Parent {
  public param1: string;

  constructor(param1: string) {
    this.param1 = param1;
  }
}

class Child extends Parent {}
