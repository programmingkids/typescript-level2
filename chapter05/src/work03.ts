export {};

type Person = {
  firstName: string;
  middleName?: string;
  lastName?: string;
};

// ジェネリクスでPersonを指定
// Personの全プロパティが必須になる
