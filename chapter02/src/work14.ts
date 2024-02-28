export {};

class Person {
  // コンストラクタとフィールドの同時宣言
  constructor(
    public name: string,
    protected age: number,
    private hobby: string,
  ) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }

  public show(): void {
    console.log('I am ' + this.name);
    console.log('I am ' + this.age + ' years old');
    console.log('My hobby is ' + this.hobby);
  }
}

const p: Person = new Person('Tom', 15, 'Piano');
p.show();
