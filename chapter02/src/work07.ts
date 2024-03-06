export {};

class Parent {
  // 継承される
  public param: string = 'Hello';

  // 継承される　クラスの内外から呼び出し可能
  public show1(): void {
    console.log(this.param);
  }

  // 継承される　クラスの内側からのみ呼び出し可能

  // 継承されない クラスの内側からのみ呼び出し可能
}

class Child extends Parent {}

const p: Parent = new Parent();
// 呼び出し可能
p.show1();
// 呼び出し不可　クラスの外側から呼び出せない
// p.show2();
// 呼び出し不可　クラスの外側から呼び出せない
// p.show3();

console.log('======');

const c: Child = new Child();
// 呼び出し可能
c.show1();
// 呼び出し不可　継承されているがクラスの外側から呼び出せない
// c.show2();
// 呼び出し不可　そもそも継承されていない
// c.show3();
