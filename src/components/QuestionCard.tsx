import React from 'react';
import { Question, ExamAnswer, PGQuestion, PGKompleksQuestion, BenarSalahQuestion, MenjodohkanQuestion } from '../types';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  answer?: ExamAnswer;
  onAnswerChange: (answer: ExamAnswer) => void;
  isReviewMode?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionIndex,
  totalQuestions,
  answer,
  onAnswerChange,
  isReviewMode = false
}) => {

  // Handlers for answer modifications
  const handlePGSelect = (key: string) => {
    if (isReviewMode) return;
    onAnswerChange({
      ...answer,
      questionId: question.id,
      answerPG: key
    });
  };

  const handlePGKompleksToggle = (key: string) => {
    if (isReviewMode) return;
    const current = answer?.answerPGKompleks || [];
    let updated: string[];
    if (current.includes(key)) {
      updated = current.filter(k => k !== key);
    } else {
      updated = [...current, key];
    }
    onAnswerChange({
      ...answer,
      questionId: question.id,
      answerPGKompleks: updated
    });
  };

  const handleBenarSalahSelect = (value: boolean) => {
    if (isReviewMode) return;
    onAnswerChange({
      ...answer,
      questionId: question.id,
      answerBenarSalah: value
    });
  };

  const handleMatchingSelect = (itemNo: number, key: string) => {
    if (isReviewMode) return;
    const currentMatch = answer?.answerMatching || {};
    onAnswerChange({
      ...answer,
      questionId: question.id,
      answerMatching: {
        ...currentMatch,
        [itemNo]: key
      }
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-7 shadow-xs space-y-6">
      
      {/* Question Header & Meta Info */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm">
            {questionIndex + 1}
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
            {question.category}
          </span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200/60">
            {question.level}
          </span>
        </div>

        <span className="text-xs text-slate-400 font-medium">
          Soal {questionIndex + 1} dari {totalQuestions}
        </span>
      </div>

      {/* Question Main Text */}
      <div className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
        {question.questionText}
      </div>

      {/* Render Options according to Question Type */}

      {/* TYPE 1: PILIHAN GANDA (SINGLE CHOICE) */}
      {question.type === 'pg' && (() => {
        const pg = question as PGQuestion;
        const selected = answer?.answerPG;

        return (
          <div className="space-y-3 pt-2">
            {pg.options.map(opt => {
              const isSelected = selected === opt.key;
              const isCorrectOpt = isReviewMode && opt.key === pg.correctAnswer;
              const isWrongSelection = isReviewMode && isSelected && !isCorrectOpt;

              let optionStyle = 'bg-white border-slate-200 text-slate-800 hover:border-indigo-300 hover:bg-slate-50';
              if (isSelected) {
                optionStyle = 'bg-indigo-50/80 border-indigo-600 text-indigo-950 font-semibold ring-1 ring-indigo-500/30';
              }
              if (isReviewMode) {
                if (isCorrectOpt) {
                  optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-1 ring-emerald-500/30';
                } else if (isWrongSelection) {
                  optionStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-semibold ring-1 ring-rose-500/30';
                }
              }

              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => handlePGSelect(opt.key)}
                  disabled={isReviewMode}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer ${optionStyle}`}
                >
                  <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shrink-0 ${
                    isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 border border-slate-300'
                  }`}>
                    {opt.key.toUpperCase()}
                  </span>
                  <span className="text-sm sm:text-base leading-snug pt-0.5 flex-1">
                    {opt.text}
                  </span>
                  {isReviewMode && isCorrectOpt && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 self-center" />
                  )}
                  {isReviewMode && isWrongSelection && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 self-center" />
                  )}
                </button>
              );
            })}
          </div>
        );
      })()}

      {/* TYPE 2: PILIHAN GANDA KOMPLEKS (MULTI CHOICE) */}
      {question.type === 'pg_kompleks' && (() => {
        const pgk = question as PGKompleksQuestion;
        const selectedList = answer?.answerPGKompleks || [];

        return (
          <div className="space-y-3 pt-2">
            <p className="text-xs font-semibold text-indigo-700 bg-indigo-50 p-2.5 rounded-lg border border-indigo-100">
              💡 Catatan: Anda dapat memilih lebih dari satu jawaban yang benar.
            </p>

            {pgk.options.map(opt => {
              const isSelected = selectedList.includes(opt.key);
              const isCorrectOpt = isReviewMode && pgk.correctAnswers.includes(opt.key);
              const isWrongSelection = isReviewMode && isSelected && !isCorrectOpt;

              let optionStyle = 'bg-white border-slate-200 text-slate-800 hover:border-indigo-300 hover:bg-slate-50';
              if (isSelected) {
                optionStyle = 'bg-indigo-50/80 border-indigo-600 text-indigo-950 font-semibold ring-1 ring-indigo-500/30';
              }
              if (isReviewMode) {
                if (isCorrectOpt) {
                  optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-1 ring-emerald-500/30';
                } else if (isWrongSelection) {
                  optionStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-semibold ring-1 ring-rose-500/30';
                }
              }

              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => handlePGKompleksToggle(opt.key)}
                  disabled={isReviewMode}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer ${optionStyle}`}
                >
                  <div className={`w-5 h-5 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-400 bg-white'
                  }`}>
                    {isSelected && <span className="text-xs font-bold">✓</span>}
                  </div>
                  <span className="text-sm sm:text-base leading-snug flex-1">
                    <strong className="text-indigo-900 mr-1.5">{opt.key.toUpperCase()}.</strong>
                    {opt.text}
                  </span>
                  {isReviewMode && isCorrectOpt && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 self-center" />
                  )}
                  {isReviewMode && isWrongSelection && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 self-center" />
                  )}
                </button>
              );
            })}
          </div>
        );
      })()}

      {/* TYPE 3: BENAR / SALAH */}
      {question.type === 'benar_salah' && (() => {
        const bs = question as BenarSalahQuestion;
        const selected = answer?.answerBenarSalah;

        return (
          <div className="pt-2 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* BENAR Button */}
              <button
                type="button"
                onClick={() => handleBenarSalahSelect(true)}
                disabled={isReviewMode}
                className={`p-5 rounded-2xl border-2 font-bold text-base sm:text-lg flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                  selected === true
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-200'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-400 hover:bg-emerald-50/50'
                } ${
                  isReviewMode && bs.correctAnswer === true
                    ? 'ring-4 ring-emerald-400/50 border-emerald-600 bg-emerald-50 text-emerald-950 font-black'
                    : ''
                }`}
              >
                <span>BENAR ✓</span>
              </button>

              {/* SALAH Button */}
              <button
                type="button"
                onClick={() => handleBenarSalahSelect(false)}
                disabled={isReviewMode}
                className={`p-5 rounded-2xl border-2 font-bold text-base sm:text-lg flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                  selected === false
                    ? 'bg-rose-600 border-rose-600 text-white shadow-lg shadow-rose-200'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-rose-400 hover:bg-rose-50/50'
                } ${
                  isReviewMode && bs.correctAnswer === false
                    ? 'ring-4 ring-emerald-400/50 border-emerald-600 bg-emerald-50 text-emerald-950 font-black'
                    : ''
                }`}
              >
                <span>SALAH ✗</span>
              </button>
            </div>
          </div>
        );
      })()}

      {/* TYPE 4: MENJODOHKAN */}
      {question.type === 'menjodohkan' && (() => {
        const matchQ = question as MenjodohkanQuestion;
        const currentMatch = answer?.answerMatching || {};

        return (
          <div className="space-y-6 pt-2">
            
            {/* Legend / Column B Reference options */}
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                {matchQ.titleB}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800">
                {matchQ.optionsB.map(optB => (
                  <div key={optB.key} className="bg-white p-2.5 rounded-lg border border-slate-200 flex items-start gap-2">
                    <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded text-xs border border-indigo-100">
                      {optB.key}
                    </span>
                    <span className="leading-tight text-slate-800">{optB.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column A Items to Match */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                {matchQ.titleA} (Pilih Pasangan dari Kolom B)
              </h3>

              {matchQ.items.map(item => {
                const userSelectedKey = currentMatch[item.no] || '';
                const isCorrect = isReviewMode && userSelectedKey === item.correctKey;

                return (
                  <div
                    key={item.no}
                    className={`p-4 rounded-xl border bg-white space-y-3 ${
                      isReviewMode
                        ? isCorrect
                          ? 'border-emerald-300 bg-emerald-50/40'
                          : 'border-rose-300 bg-rose-50/40'
                        : 'border-slate-200'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-indigo-100 text-indigo-800 font-bold text-xs shrink-0 mt-0.5">
                        {item.no}
                      </span>
                      <p className="text-sm sm:text-base text-slate-900 font-medium leading-snug flex-1">
                        {item.kolomA}
                      </p>
                    </div>

                    {/* Selector */}
                    <div className="flex items-center gap-3 pt-1">
                      <label className="text-xs font-semibold text-slate-600">
                        Pasangan Jawaban:
                      </label>
                      <select
                        value={userSelectedKey}
                        onChange={(e) => handleMatchingSelect(item.no, e.target.value)}
                        disabled={isReviewMode}
                        className="px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm font-bold focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      >
                        <option value="">-- Pilih --</option>
                        {matchQ.optionsB.map(optB => (
                          <option key={optB.key} value={optB.key}>
                            Opsi {optB.key} - {optB.text.substring(0, 35)}...
                          </option>
                        ))}
                      </select>

                      {isReviewMode && (
                        <div className="text-xs font-semibold flex items-center gap-1.5 ml-auto">
                          {isCorrect ? (
                            <span className="text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Benar ({item.correctKey})
                            </span>
                          ) : (
                            <span className="text-rose-700 bg-rose-100 px-2.5 py-1 rounded-md flex items-center gap-1">
                              <XCircle className="w-3.5 h-3.5" /> Kunci: {item.correctKey}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        );
      })()}

      {/* Review Mode Pembahasan Box (If Attempt 1 or 2) */}
      {isReviewMode && question.pembahasan && (
        <div className="mt-6 bg-slate-900 text-slate-100 p-5 rounded-2xl space-y-2 border border-slate-800 shadow-md">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <HelpCircle className="w-4 h-4" />
            <span>Pembahasan / Penjelasan Soal:</span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-normal">
            {question.pembahasan}
          </p>
        </div>
      )}

    </div>
  );
};
