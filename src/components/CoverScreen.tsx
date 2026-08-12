import React, { useState, useEffect } from 'react';
import { StudentIdentity } from '../types';
import { getStudentAttempts } from '../utils/storage';
import { Sparkles, Play, Award, BookOpen, AlertCircle, RefreshCw, CheckCircle2 } from 'lucide-react';

interface CoverScreenProps {
  initialIdentity: StudentIdentity;
  onStartExam: (identity: StudentIdentity, attemptNumber: number) => void;
}

export const CoverScreen: React.FC<CoverScreenProps> = ({
  initialIdentity,
  onStartExam
}) => {
  const [name, setName] = useState(initialIdentity.name);
  const [studentClass, setStudentClass] = useState(initialIdentity.studentClass);
  const [subject, setSubject] = useState(initialIdentity.subject || 'Produk Kreatif dan Kewirausahaan');
  const [errorMsg, setErrorMsg] = useState('');

  const previousAttempts = getStudentAttempts(name, studentClass);
  const nextAttemptNumber = Math.min(previousAttempts + 1, 3);

  useEffect(() => {
    setErrorMsg('');
  }, [name, studentClass]);

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Silakan masukkan Nama Lengkap Siswa.');
      return;
    }
    if (!studentClass.trim()) {
      setErrorMsg('Silakan masukkan Kelas Siswa.');
      return;
    }

    if (previousAttempts >= 3) {
      setErrorMsg('Anda telah menggunakan seluruh 3 kesempatan ujian di browser ini.');
      return;
    }

    onStartExam(
      { name: name.trim(), studentClass: studentClass.trim(), subject },
      nextAttemptNumber
    );
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-50 relative overflow-hidden">
      
      {/* Background Animated Color Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-300/40 rounded-full blur-3xl animate-pulse pointer-events-none delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Cover Card with Animated Rainbow Gradient Border */}
      <div className="relative w-full max-w-2xl">
        
        {/* Animated Gradient Border Outer Glow */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500 via-indigo-500 via-purple-500 via-cyan-500 to-emerald-500 opacity-75 blur-md transition-all duration-1000 animate-gradient-x"></div>

        <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/60">
          
          {/* Header Badge */}
          <div className="text-center space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md animate-shimmer">
              <Sparkles className="w-4 h-4" />
              <span>Aplikasi Ujian Interaktif SMK</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Evaluasi Pembelajaran Siswa
            </h1>

            <p className="text-sm sm:text-base font-medium text-indigo-600">
              {subject}
            </p>
          </div>

          {/* Form Cover Input */}
          <form onSubmit={handleStart} className="space-y-6">
            
            <div className="space-y-4 bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                Identitas Peserta Ujian
              </h2>

              {/* Nama Siswa */}
              <div>
                <label htmlFor="student-name-input" className="block text-sm font-semibold text-slate-700 mb-1">
                  Nama Siswa <span className="text-rose-500">*</span>
                </label>
                <input
                  id="student-name-input"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama lengkap siswa..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all shadow-xs"
                />
              </div>

              {/* Kelas */}
              <div>
                <label htmlFor="student-class-input" className="block text-sm font-semibold text-slate-700 mb-1">
                  Kelas <span className="text-rose-500">*</span>
                </label>
                <input
                  id="student-class-input"
                  type="text"
                  required
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  placeholder="Contoh: XII RPL 1, XI TKJ 2, X AKL..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all shadow-xs"
                />
              </div>

              {/* Mata Pelajaran */}
              <div>
                <label htmlFor="student-subject-input" className="block text-sm font-semibold text-slate-700 mb-1">
                  Mata Pelajaran
                </label>
                <input
                  id="student-subject-input"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-100 text-slate-700 text-sm font-medium focus:outline-none cursor-not-allowed"
                  readOnly
                />
              </div>
            </div>

            {/* Rules & Attempt Information */}
            <div className="bg-gradient-to-r from-indigo-50/80 via-purple-50/80 to-pink-50/80 border border-indigo-100 p-4 rounded-2xl text-xs sm:text-sm space-y-2">
              <div className="flex items-center justify-between font-bold text-slate-800">
                <span className="flex items-center gap-1.5 text-indigo-700">
                  <Award className="w-4 h-4 text-indigo-600" />
                  Ketentuan Ujian & Kesempatan
                </span>
                <span className="bg-indigo-600 text-white font-bold px-2.5 py-0.5 rounded-full text-xs">
                  Maksimal 3 Kesempatan
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                <div className={`p-2.5 rounded-xl border ${nextAttemptNumber === 1 ? 'bg-indigo-600 text-white font-semibold border-indigo-700 shadow-xs' : 'bg-white/80 text-slate-600 border-slate-200'}`}>
                  <div className="font-bold flex items-center justify-between">
                    <span>Kesempatan 1</span>
                    {previousAttempts >= 1 && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </div>
                  <p className="text-[11px] opacity-90 mt-0.5">Tampil jawaban & pembahasan</p>
                </div>

                <div className={`p-2.5 rounded-xl border ${nextAttemptNumber === 2 ? 'bg-indigo-600 text-white font-semibold border-indigo-700 shadow-xs' : 'bg-white/80 text-slate-600 border-slate-200'}`}>
                  <div className="font-bold flex items-center justify-between">
                    <span>Kesempatan 2</span>
                    {previousAttempts >= 2 && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </div>
                  <p className="text-[11px] opacity-90 mt-0.5">Tampil jawaban & pembahasan</p>
                </div>

                <div className={`p-2.5 rounded-xl border ${nextAttemptNumber === 3 ? 'bg-purple-600 text-white font-semibold border-purple-700 shadow-xs' : 'bg-white/80 text-slate-600 border-slate-200'}`}>
                  <div className="font-bold flex items-center justify-between">
                    <span>Kesempatan 3 (Final)</span>
                    {previousAttempts >= 3 && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </div>
                  <p className="text-[11px] opacity-90 mt-0.5">Acak Soal & Opsi (Hasil Benar/Salah saja)</p>
                </div>
              </div>

              {name.trim() && (
                <div className="pt-2 flex items-center gap-1.5 text-xs text-indigo-900 font-semibold">
                  <RefreshCw className="w-3.5 h-3.5 text-indigo-600" />
                  <span>
                    Status Siswa ({name}): Anda akan mengerjakan{' '}
                    <strong className="underline decoration-indigo-400">
                      Kesempatan Ke-{nextAttemptNumber} dari 3
                    </strong>
                  </span>
                </div>
              )}
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-medium flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Start Exam Action Button */}
            <button
              type="submit"
              disabled={previousAttempts >= 3}
              id="start-exam-button"
              className={`w-full py-4 px-6 rounded-2xl font-bold text-base sm:text-lg text-white shadow-xl flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer ${
                previousAttempts >= 3
                  ? 'bg-slate-400 cursor-not-allowed opacity-70'
                  : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:shadow-indigo-300/50 hover:scale-[1.01] active:scale-[0.99]'
              }`}
            >
              <Play className="w-5 h-5 fill-current" />
              <span>
                {previousAttempts >= 3
                  ? 'Batas Kesempatan Ujian Habis (3/3)'
                  : `Mulai Kerjakan Ujian (Kesempatan ke-${nextAttemptNumber})`}
              </span>
            </button>

          </form>

          {/* Footer note */}
          <div className="mt-6 text-center text-xs text-slate-400">
            Aplikasi dilengkapi stopwatch otomatis. Rekapitulasi nilai tersimpan di database global lokal admin.
          </div>

        </div>
      </div>
    </div>
  );
};
