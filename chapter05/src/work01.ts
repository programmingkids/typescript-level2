export {};

// string型のキーとnumber型の値のMap
const userMap = new Map<string, number>();
userMap.set('Bob', 100);
userMap.set('Meg', 90);
userMap.set('Tom', 80);

console.log(userMap.get('Bob')); // 100
console.log(userMap.get('Meg')); // 90
console.log(userMap.get('Tom')); // 80
