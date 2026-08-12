import React, { useState } from 'react';
import { Question, ExamAnswer, ExamResult } from '../types';
import { QuestionCard } from './QuestionCard';
import { Award, CheckCircle2, XCircle, Clock, RotateCcw, Home, Eye } from 'lucide-react';

interface ResultScreenProps {
  examResult: ExamResult;
  questions: Question[];
  onRestartExam: () => void;
  onReturnHome: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  examResult,
  questions,
  onRestartExam,
  onReturnHome
}) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'review'>('summary');

  const formatDuration = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins} Menit ${remainingSecs} Detik`;
  };

  const isFinalAttempt = examResult.attemptNumber === 3;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      {/* Top Score Banner */}
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-6 text-center relative overflow-hidden">
        
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-300 font-semibold text-xs border border-white/20">
            <Award className="w-4 h-4" />
            <span>Hasil Evaluasi Ujian • Kesempatan Ke-{examResult.attemptNumber} dari 3</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {examResult.studentName}
          </h1>
          <p className="text-xs sm:text-sm text-indigo-200">
            Kelas: {examResult.studentClass} • {examResult.subject}
          </p>
        </div>

        {/* Big Score Number */}
        <div className="relative z-10 py-4">
          <div className="text-6xl sm:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-pink-300 drop-shadow-md">
            {examResult.score}
          </div>
          <p className="text-xs uppercase tracking-widest text-indigo-200 font-bold mt-1">
            NILAI AKHIR (SKOR)
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 relative z-10">
          
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
            <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-extrabold text-xl">
              <CheckCircle2 className="w-5 h-5" />
              <span>{examResult.totalCorrect}</span>
            </div>
            <p className="text-[11px] text-indigo-200 mt-0.5">Jawaban Benar</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
            <div className="flex items-center justify-center gap-1.5 text-rose-400 font-extrabold text-xl">
              <XCircle className="w-5 h-5" />
              <span>{examResult.totalIncorrect}</span>
            </div>
            <p className="text-[11px] text-indigo-200 mt-0.5">Jawaban Salah</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
            <div className="text-xl font-extrabold text-white">
              {examResult.totalQuestions}
            </div>
            <p className="text-[11px] text-indigo-200 mt-0.5">Total Soal</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center">
            <div className="flex items-center justify-center gap-1 text-amber-300 font-extrabold text-base sm:text-lg">
              <Clock className="w-4 h-4 shrink-0" />
              <span className="truncate">{formatDuration(examResult.durationSeconds)}</span>
            </div>
            <p className="text-[11px] text-indigo-200 mt-0.5">Durasi Pengerjaan</p>
          </div>

        </div>

      </div>

      {/* Attempt 3 Specific Banner */}
      {isFinalAttempt ? (
        <div className="bg-amber-50 border border-amber-200 text-amber-900 p-5 rounded-2xl space-y-2">
          <div className="font-bold text-sm flex items-center gap-2">
            <span>🔒 Mode Percobaan Ketiga (Final) Selesai</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
            Pada kesempatan ke-3 (percobaan terakhir), soal dan opsi jawaban telah diacak secara otomatis. Untuk menjaga integritas ujian, rincian jawaban benar/salah dan pembahasan soal tidak ditampilkan pada percobaan terakhir ini. Rekapitulasi hasil Anda telah tercatat otomatis di database admin.
          </p>
        </div>
      ) : (
        /* Tabs for Attempt 1 & 2: Ringkasan vs Pembahasan Lengkap */
        <div className="flex items-center justify-center gap-2 border-b border-slate-200 pb-2">
          <button
            onClick={() => setActiveTab('summary')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'summary'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Ringkasan
          </button>
          <button
            onClick={() => setActiveTab('review')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'review'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Lihat Jawaban & Pembahasan</span>
          </button>
        </div>
      )}

      {/* Answer Review Section (Only visible for Attempt 1 & 2 when 'review' tab is active) */}
      {!isFinalAttempt && activeTab === 'review' && (
        <div className="space-y-6">
          <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl text-xs sm:text-sm text-indigo-900">
            📌 <strong>Evaluasi Hasil:</strong> Di bawah ini adalah rincian jawaban Anda beserta kunci jawaban dan pembahasan untuk setiap soal.
          </div>

          <div className="space-y-6">
            {questions.map((q, index) => (
              <QuestionCard
                key={q.id}
                question={q}
                questionIndex={index}
                totalQuestions={questions.length}
                answer={examResult.userAnswers[q.id]}
                onAnswerChange={() => {}}
                isReviewMode={true}
              />
            ))}
          </div>
        </div>
      )}

      {/* Action Navigation Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        {examResult.attemptNumber < 3 && (
          <button
            onClick={onRestartExam}
            id="retry-exam-button"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Coba Lagi (Kesempatan Ke-{examResult.attemptNumber + 1})</span>
          </button>
        )}

        <button
          onClick={onReturnHome}
          className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Kembali ke Beranda Depan</span>
        </button>
      </div>

    </div>
  );
};
