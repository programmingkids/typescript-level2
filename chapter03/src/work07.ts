export {};

// インターフェースの定義
interface Person {
  name: string;
  think(): void;
}

// インターフェースを継承
interface Student extends Person {
  study(): void;
}

// インターフェースの実装クラス
class HighSchoolStudent implements Student {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  think(): void {
    console.log(this.name + 'は勉強します');
  }
  study(): void {
    console.log(this.name + 'は受験勉強を頑張ります');
  }
}

// インスタンス作成
const s: HighSchoolStudent = new HighSchoolStudent('ドナルド');
s.think();
s.study();
