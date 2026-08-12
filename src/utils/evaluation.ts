import { Question, ExamAnswer, PGQuestion, PGKompleksQuestion, BenarSalahQuestion, MenjodohkanQuestion } from '../types';

export interface QuestionEvaluation {
  questionId: number;
  isCorrect: boolean;
  scoreEarned: number; // 0 to 1
  userAnswerSummary: string;
  correctAnswerSummary: string;
}

export function evaluateQuestion(q: Question, answer?: ExamAnswer): QuestionEvaluation {
  if (!answer) {
    return {
      questionId: q.id,
      isCorrect: false,
      scoreEarned: 0,
      userAnswerSummary: 'Tidak Dijawab',
      correctAnswerSummary: getCorrectAnswerText(q)
    };
  }

  if (q.type === 'pg') {
    const pg = q as PGQuestion;
    const userChoice = answer.answerPG;
    const isCorrect = userChoice === pg.correctAnswer;
    const userOpt = pg.options.find(o => o.key === userChoice);
    const correctOpt = pg.options.find(o => o.key === pg.correctAnswer);

    return {
      questionId: q.id,
      isCorrect,
      scoreEarned: isCorrect ? 1 : 0,
      userAnswerSummary: userChoice ? `(${userChoice.toUpperCase()}) ${userOpt?.text || ''}` : 'Tidak Dijawab',
      correctAnswerSummary: `(${pg.correctAnswer.toUpperCase()}) ${correctOpt?.text || ''}`
    };
  }

  if (q.type === 'pg_kompleks') {
    const pgk = q as PGKompleksQuestion;
    const userChoices = (answer.answerPGKompleks || []).sort();
    const correctChoices = [...pgk.correctAnswers].sort();

    const isExact = userChoices.length === correctChoices.length &&
      userChoices.every((val, index) => val === correctChoices[index]);

    return {
      questionId: q.id,
      isCorrect: isExact,
      scoreEarned: isExact ? 1 : 0,
      userAnswerSummary: userChoices.length > 0 ? userChoices.map(c => c.toUpperCase()).join(', ') : 'Tidak Dijawab',
      correctAnswerSummary: correctChoices.map(c => c.toUpperCase()).join(', ')
    };
  }

  if (q.type === 'benar_salah') {
    const bs = q as BenarSalahQuestion;
    const userChoice = answer.answerBenarSalah;
    const isCorrect = userChoice === bs.correctAnswer;

    return {
      questionId: q.id,
      isCorrect,
      scoreEarned: isCorrect ? 1 : 0,
      userAnswerSummary: userChoice === undefined ? 'Tidak Dijawab' : (userChoice ? 'BENAR' : 'SALAH'),
      correctAnswerSummary: bs.correctAnswer ? 'BENAR' : 'SALAH'
    };
  }

  if (q.type === 'menjodohkan') {
    const matchQ = q as MenjodohkanQuestion;
    const userMatch = answer.answerMatching || {};
    let correctItemsCount = 0;
    const totalItems = matchQ.items.length;

    matchQ.items.forEach(item => {
      if (userMatch[item.no] === item.correctKey) {
        correctItemsCount++;
      }
    });

    const isFullyCorrect = correctItemsCount === totalItems;
    const scoreFraction = totalItems > 0 ? correctItemsCount / totalItems : 0;

    const userSummaryList = matchQ.items.map(i => `${i.no}->${userMatch[i.no] || '-'}`).join(', ');
    const correctSummaryList = matchQ.items.map(i => `${i.no}->${i.correctKey}`).join(', ');

    return {
      questionId: q.id,
      isCorrect: isFullyCorrect,
      scoreEarned: scoreFraction,
      userAnswerSummary: userSummaryList,
      correctAnswerSummary: correctSummaryList
    };
  }

  return {
    questionId: (q as any).id,
    isCorrect: false,
    scoreEarned: 0,
    userAnswerSummary: '-',
    correctAnswerSummary: '-'
  };
}

function getCorrectAnswerText(q: Question): string {
  if (q.type === 'pg') {
    const pg = q as PGQuestion;
    const opt = pg.options.find(o => o.key === pg.correctAnswer);
    return `(${pg.correctAnswer.toUpperCase()}) ${opt?.text || ''}`;
  }
  if (q.type === 'pg_kompleks') {
    const pgk = q as PGKompleksQuestion;
    return pgk.correctAnswers.map(c => c.toUpperCase()).join(', ');
  }
  if (q.type === 'benar_salah') {
    const bs = q as BenarSalahQuestion;
    return bs.correctAnswer ? 'BENAR' : 'SALAH';
  }
  if (q.type === 'menjodohkan') {
    const m = q as MenjodohkanQuestion;
    return m.items.map(i => `${i.no}->${i.correctKey}`).join(', ');
  }
  return '-';
}

export function calculateTotalResult(questions: Question[], userAnswers: Record<number, ExamAnswer>) {
  let totalScoreEarned = 0;
  let totalCorrect = 0;
  let totalIncorrect = 0;

  questions.forEach(q => {
    const evalRes = evaluateQuestion(q, userAnswers[q.id]);
    totalScoreEarned += evalRes.scoreEarned;
    if (evalRes.isCorrect) {
      totalCorrect++;
    } else {
      totalIncorrect++;
    }
  });

  const totalQuestions = questions.length;
  const finalScore = Math.round((totalScoreEarned / totalQuestions) * 100);

  return {
    finalScore,
    totalCorrect,
    totalIncorrect,
    totalQuestions
  };
}

// Fisher-Yates shuffle
export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function prepareQuestionsForAttempt(allQuestions: Question[], attemptNumber: number): Question[] {
  if (attemptNumber !== 3) {
    // Return standard order for Attempt 1 & 2
    return allQuestions;
  }

  // Attempt 3: Randomize question order AND options order
  const shuffledQuestions = shuffleArray(allQuestions);

  return shuffledQuestions.map(q => {
    if (q.type === 'pg' || q.type === 'pg_kompleks') {
      return {
        ...q,
        options: shuffleArray(q.options)
      };
    }
    if (q.type === 'menjodohkan') {
      return {
        ...q,
        optionsB: shuffleArray(q.optionsB)
      };
    }
    return q;
  });
}
