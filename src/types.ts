export type QuestionType = 'pg' | 'pg_kompleks' | 'benar_salah' | 'menjodohkan';

export interface BaseQuestion {
  id: number;
  type: QuestionType;
  level: string; // e.g. C5, C4, C3, C2
  category: string; // 'Pilihan Ganda' | 'Pilihan Ganda Kompleks' | 'Benar / Salah' | 'Menjodohkan'
  questionText: string;
  pembahasan: string;
}

export interface PGQuestion extends BaseQuestion {
  type: 'pg';
  options: { key: string; text: string }[];
  correctAnswer: string; // e.g. 'b'
}

export interface PGKompleksQuestion extends BaseQuestion {
  type: 'pg_kompleks';
  options: { key: string; text: string }[];
  correctAnswers: string[]; // e.g. ['a', 'b', 'c', 'e']
}

export interface BenarSalahQuestion extends BaseQuestion {
  type: 'benar_salah';
  correctAnswer: boolean; // true = Benar, false = Salah
}

export interface MatchingItem {
  no: number;
  kolomA: string;
  correctKey: string; // e.g. 'C'
  explanation?: string;
}

export interface MatchingOption {
  key: string; // e.g. 'A', 'B', 'C', 'D', 'E'
  text: string;
}

export interface MenjodohkanQuestion extends BaseQuestion {
  type: 'menjodohkan';
  titleA: string;
  titleB: string;
  items: MatchingItem[];
  optionsB: MatchingOption[];
}

export type Question = PGQuestion | PGKompleksQuestion | BenarSalahQuestion | MenjodohkanQuestion;

export interface StudentIdentity {
  name: string;
  studentClass: string;
  subject: string;
}

export interface ExamAnswer {
  questionId: number;
  answerPG?: string;
  answerPGKompleks?: string[];
  answerBenarSalah?: boolean;
  answerMatching?: Record<number, string>; // itemNo -> selectedKey
}

export interface ExamResult {
  id: string;
  studentName: string;
  studentClass: string;
  subject: string;
  attemptNumber: number; // 1, 2, or 3
  score: number; // 0 - 100
  totalCorrect: number;
  totalIncorrect: number;
  totalQuestions: number;
  durationSeconds: number;
  completedAt: string; // ISO String
  userAnswers: Record<number, ExamAnswer>;
  questionOrder: number[]; // order of question ids used in this attempt
}
