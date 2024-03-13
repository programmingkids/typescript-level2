export {};

type Person = {
  firstName: string;
  middleName?: string;
  lastName?: string;
};

// ジェネリクスでPersonを指定
// Personの全プロパティが読み込み専用になる

// エラー 代入できない
// p.firstName = 'John';
