export {};

// Carクラスの定義
class Car {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public move(): void {
    console.log('ガソリンで動きます');
  }
}

// ここにクラスを定義します
class ElectricCar extends Car {
  move(): void {
    console.log('電気で動きます');
  }
}

// クラス作成後、以下のコメントを外します。以下のプログラムは修正しません
/*
const e: ElectricCar = new Car('テスラ');
e.move();
*/
