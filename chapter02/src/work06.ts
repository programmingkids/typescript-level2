export {};

class Parent {
  // 継承される
  public param1: string = 'Hello';
  protected param2: string = 'Hello2';
  // 継承されない
  private param3: string = 'Hello3';

  public show(): void {
    console.log(this.param1);
    console.log(this.param2);
    console.log(this.param3);
  }
}

class Child extends Parent {
  public showError(): void {
    // エラー　継承していないので、呼び出せない
    // console.log(this.param3);
  }
}

const p: Parent = new Parent();
p.show();

console.log('======');

const c: Child = new Child();
c.show();
c.showError();
