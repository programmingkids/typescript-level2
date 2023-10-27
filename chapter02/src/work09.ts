export {};

class Parent {
  public param1: string;

  constructor(param1: string) {
    this.param1 = param1;
  }
}

class Child extends Parent {
  public param2: string;

  constructor(param1: string, param2: string) {
    super(param1);
    this.param2 = param2;
  }
}

const c: Child = new Child('x', 'y');
console.log(c.param1);
console.log(c.param2);
