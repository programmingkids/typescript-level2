export {};

type Subject = 'Japanese' | 'English' | 'Math' | 'Science' | 'History';

// Union型のSubjectから特定の型を排除する
// Science、Historyを取り除く
type MainSUbject = Exclude<Subject, 'Science' | 'History'>;

const s: MainSUbject = 'Math';
console.log(s);
