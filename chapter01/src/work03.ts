export {};

class Book {
  title: string;
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const b1: Book = new Book('ミッキーの大冒険', 1200);
console.log(b1.title);
console.log(b1.price);

console.log('======');

const b2: Book = new Book('ミニーのマジカルレシピ', 1500);
console.log(b2.title);
console.log(b2.price);
