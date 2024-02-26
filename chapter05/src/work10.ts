export {};

type Subject = 'Japanese' | 'English' | 'Math' | 'Science' | 'History';

// Union型のSubjectから特定の型のみを取り出す
// Japanese, English, Mathを取り出す
type MainSUbject = Extract<Subject, 'Japanese' | 'English' | 'Math'>;

const s: MainSUbject = 'Math';
console.log(s);
