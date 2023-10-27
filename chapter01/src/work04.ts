export {};

class Book {
  title: string | undefined;
  price: number | undefined;
}

const b1: Book = new Book();
b1.title = 'ミッキーの大冒険';
b1.price = 1200;
console.log(b1.title);
console.log(b1.price);

console.log('======');

const b2: Book = new Book();
b2.title = 'ミニーのマジカルレシピ';
b2.price = 1500;
console.log(b2.title);
console.log(b2.price);
