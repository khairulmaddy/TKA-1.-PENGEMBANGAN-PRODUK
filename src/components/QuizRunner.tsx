import React, { useState } from 'react';
import { Question, ExamAnswer, StudentIdentity } from '../types';
import { QuestionCard } from './QuestionCard';
import { ArrowLeft, ArrowRight, CheckCircle2, Grid, AlertTriangle } from 'lucide-react';

interface QuizRunnerProps {
  questions: Question[];
  studentIdentity: StudentIdentity;
  attemptNumber: number;
  userAnswers: Record<number, ExamAnswer>;
  onAnswerChange: (answer: ExamAnswer) => void;
  onSubmitExam: () => void;
}

export const QuizRunner: React.FC<QuizRunnerProps> = ({
  questions,
  studentIdentity,
  attemptNumber,
  userAnswers,
  onAnswerChange,
  onSubmitExam
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNavGrid, setShowNavGrid] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const currentQuestion = questions[currentIndex];

  // Helper to check if a question is answered
  const isQuestionAnswered = (q: Question): boolean => {
    const ans = userAnswers[q.id];
    if (!ans) return false;

    if (q.type === 'pg') return !!ans.answerPG;
    if (q.type === 'pg_kompleks') return (ans.answerPGKompleks || []).length > 0;
    if (q.type === 'benar_salah') return ans.answerBenarSalah !== undefined;
    if (q.type === 'menjodohkan') {
      const match = ans.answerMatching || {};
      return Object.keys(match).length === q.items.length && Object.values(match).every(val => !!val);
    }
    return false;
  };

  const answeredCount = questions.filter(isQuestionAnswered).length;
  const totalQuestions = questions.length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      
      {/* Top Banner & Progress Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">{studentIdentity.name}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600 font-medium">{studentIdentity.studentClass}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-indigo-50 text-indigo-700 font-bold px-2.5 py-1 rounded-md text-xs border border-indigo-100">
              Percobaan Ke-{attemptNumber} dari 3
            </span>

            <button
              onClick={() => setShowNavGrid(!showNavGrid)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Grid className="w-4 h-4 text-slate-600" />
              <span>Daftar Soal ({answeredCount}/{totalQuestions})</span>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-slate-500 font-medium">
            <span>Kemajuan Pengerjaan</span>
            <span>{progressPercent}% Terjawab</span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Optional Navigation Grid Drawer */}
      {showNavGrid && (
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-lg space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-sm font-bold text-slate-800">
            <span>Navigasi Nomor Soal</span>
            <div className="flex items-center gap-3 text-xs font-normal">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span> Terjawab
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-slate-200 border border-slate-300"></span> Belum
              </span>
            </div>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {questions.map((q, idx) => {
              const answered = isQuestionAnswered(q);
              const isCurrent = idx === currentIndex;

              let btnStyle = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
              if (answered) {
                btnStyle = 'bg-emerald-500 text-white font-bold';
              }
              if (isCurrent) {
                btnStyle += ' ring-2 ring-indigo-600 ring-offset-2';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setShowNavGrid(false);
                  }}
                  className={`h-10 rounded-xl font-semibold text-xs transition-all flex items-center justify-center cursor-pointer ${btnStyle}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Active Question Card */}
      <QuestionCard
        question={currentQuestion}
        questionIndex={currentIndex}
        totalQuestions={totalQuestions}
        answer={userAnswers[currentQuestion.id]}
        onAnswerChange={onAnswerChange}
      />

      {/* Bottom Navigation Buttons */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <button
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
            currentIndex === 0
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Sebelumnya</span>
        </button>

        {currentIndex < totalQuestions - 1 ? (
          <button
            onClick={() => setCurrentIndex(prev => Math.min(totalQuestions - 1, prev + 1))}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-200 transition-all cursor-pointer"
          >
            <span>Selanjutnya</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => setShowConfirmModal(true)}
            id="finish-exam-button"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-200 transition-all cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Kumpulkan Ujian</span>
          </button>
        )}
      </div>

      {/* Submit Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-slate-900">
                Kumpulkan Ujian Sekarang?
              </h3>
              <p className="text-sm text-slate-600">
                Anda telah menjawab{' '}
                <strong className="text-indigo-600 font-bold">{answeredCount}</strong> dari{' '}
                <strong>{totalQuestions}</strong> soal.
              </p>
              {answeredCount < totalQuestions && (
                <p className="text-xs text-rose-600 font-semibold bg-rose-50 p-2 rounded-lg border border-rose-200">
                  ⚠️ Ada {totalQuestions - answeredCount} soal yang belum Anda jawab!
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="py-3 px-4 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 cursor-pointer"
              >
                Kembali
              </button>
              <button
                onClick={() => {
                  setShowConfirmModal(false);
                  onSubmitExam();
                }}
                id="confirm-submit-button"
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md cursor-pointer"
              >
                Ya, Kumpulkan
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
