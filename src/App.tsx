import { useState, useEffect } from 'react';
import { StudentIdentity, Question, ExamAnswer, ExamResult } from './types';
import { QUESTIONS_DATA } from './data/questions';
import { prepareQuestionsForAttempt, calculateTotalResult } from './utils/evaluation';
import { saveExamResult, getStudentAttempts } from './utils/storage';

import { HeaderBar } from './components/HeaderBar';
import { CoverScreen } from './components/CoverScreen';
import { QuizRunner } from './components/QuizRunner';
import { ResultScreen } from './components/ResultScreen';
import { AdminModal } from './components/AdminModal';
import { PromptEngineerGuide } from './components/PromptEngineerGuide';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'cover' | 'quiz' | 'result'>('cover');
  
  const [studentIdentity, setStudentIdentity] = useState<StudentIdentity>({
    name: '',
    studentClass: '',
    subject: 'Produk Kreatif dan Kewirausahaan'
  });

  const [attemptNumber, setAttemptNumber] = useState<number>(1);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, ExamAnswer>>({});

  // Stopwatch timer
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  const [latestExamResult, setLatestExamResult] = useState<ExamResult | null>(null);

  // Modals
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [isPromptGuideOpen, setIsPromptGuideOpen] = useState<boolean>(false);

  // Stopwatch interval worker
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
      }, 1000);
    } else if (!isTimerRunning && interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  // Handle starting exam
  const handleStartExam = (identity: StudentIdentity, chosenAttempt: number) => {
    setStudentIdentity(identity);
    setAttemptNumber(chosenAttempt);

    // Prepare questions (standard order for attempt 1 & 2, shuffled for attempt 3)
    const prepared = prepareQuestionsForAttempt(QUESTIONS_DATA, chosenAttempt);
    setActiveQuestions(prepared);
    setUserAnswers({});

    // Reset and start stopwatch
    setElapsedSeconds(0);
    setIsTimerRunning(true);

    setCurrentScreen('quiz');
  };

  // Handle updating an answer
  const handleAnswerChange = (answer: ExamAnswer) => {
    setUserAnswers(prev => ({
      ...prev,
      [answer.questionId]: answer
    }));
  };

  // Handle submitting the exam
  const handleSubmitExam = () => {
    setIsTimerRunning(false);

    // Calculate score
    const totals = calculateTotalResult(QUESTIONS_DATA, userAnswers);

    const result: ExamResult = {
      id: `exam_${Date.now()}`,
      studentName: studentIdentity.name,
      studentClass: studentIdentity.studentClass,
      subject: studentIdentity.subject,
      attemptNumber,
      score: totals.finalScore,
      totalCorrect: totals.totalCorrect,
      totalIncorrect: totals.totalIncorrect,
      totalQuestions: totals.totalQuestions,
      durationSeconds: elapsedSeconds,
      completedAt: new Date().toISOString(),
      userAnswers,
      questionOrder: activeQuestions.map(q => q.id)
    };

    // Save to global local database
    saveExamResult(result);
    setLatestExamResult(result);

    setCurrentScreen('result');
  };

  // Handle re-taking exam
  const handleRestartExam = () => {
    const previousAttempts = getStudentAttempts(studentIdentity.name, studentIdentity.studentClass);
    const nextAttempt = Math.min(previousAttempts + 1, 3);

    if (nextAttempt > 3) {
      alert('Anda telah menggunakan seluruh 3 kesempatan pengerjaan.');
      setCurrentScreen('cover');
      return;
    }

    handleStartExam(studentIdentity, nextAttempt);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Top Header Navigation */}
      <HeaderBar
        studentName={studentIdentity.name}
        studentClass={studentIdentity.studentClass}
        subject={studentIdentity.subject}
        elapsedSeconds={elapsedSeconds}
        isTimerRunning={isTimerRunning}
        attemptNumber={attemptNumber}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenPromptGuide={() => setIsPromptGuideOpen(true)}
      />

      {/* Main Screen Views */}
      <main>
        {currentScreen === 'cover' && (
          <CoverScreen
            initialIdentity={studentIdentity}
            onStartExam={handleStartExam}
          />
        )}

        {currentScreen === 'quiz' && (
          <QuizRunner
            questions={activeQuestions}
            studentIdentity={studentIdentity}
            attemptNumber={attemptNumber}
            userAnswers={userAnswers}
            onAnswerChange={handleAnswerChange}
            onSubmitExam={handleSubmitExam}
          />
        )}

        {currentScreen === 'result' && latestExamResult && (
          <ResultScreen
            examResult={latestExamResult}
            questions={QUESTIONS_DATA}
            onRestartExam={handleRestartExam}
            onReturnHome={() => setCurrentScreen('cover')}
          />
        )}
      </main>

      {/* Admin Panel Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Prompt Engineer Guide Modal */}
      <PromptEngineerGuide
        isOpen={isPromptGuideOpen}
        onClose={() => setIsPromptGuideOpen(false)}
      />

    </div>
  );
}
