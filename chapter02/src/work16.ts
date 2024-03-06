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

// クラス作成後、以下のコメントを外します。以下のプログラムは修正しません
/*
const e: ElectricCar = new ElectricCar('テスラ');
e.move();
*/
