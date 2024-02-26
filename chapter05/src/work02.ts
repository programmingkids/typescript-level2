export {};

// string型を保持する
const nations = new Set<string>(['Japan', 'France', 'Spain']);
console.log(nations);

// 重複していないので、追加する
nations.add('Italy');
// 重複しているので、追加しない
nations.add('France');
console.log(nations);
