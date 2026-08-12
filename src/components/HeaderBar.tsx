import React from 'react';
import { Clock, ShieldCheck, User } from 'lucide-react';

interface HeaderBarProps {
  studentName?: string;
  studentClass?: string;
  subject?: string;
  elapsedSeconds?: number;
  isTimerRunning?: boolean;
  onOpenAdmin: () => void;
  onOpenPromptGuide?: () => void;
  attemptNumber?: number;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  studentName,
  studentClass,
  elapsedSeconds,
  isTimerRunning,
  onOpenAdmin,
  onOpenPromptGuide,
  attemptNumber
}) => {
  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-200">
            PKK
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-tight">
              Kuis Produk Kreatif & Kewirausahaan
            </h1>
            <p className="text-xs text-slate-500 hidden sm:block">
              Evaluasi Desain, Prototipe & Peluang Usaha
            </p>
          </div>
        </div>

        {/* Center: Live Timer Stopwatch if active */}
        {isTimerRunning && elapsedSeconds !== undefined && (
          <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 px-3.5 py-1.5 rounded-full shadow-inner animate-pulse">
            <Clock className="w-4 h-4 text-indigo-600" />
            <span className="font-mono font-bold text-sm sm:text-base">
              {formatTime(elapsedSeconds)}
            </span>
            {attemptNumber && (
              <span className="text-xs bg-indigo-200/80 text-indigo-800 font-semibold px-2 py-0.5 rounded-full ml-1">
                Attempt {attemptNumber}/3
              </span>
            )}
          </div>
        )}

        {/* Right Action buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {studentName && !isTimerRunning && (
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
              <User className="w-3.5 h-3.5 text-slate-500" />
              <span className="font-medium text-slate-800">{studentName}</span>
              {studentClass && <span className="text-slate-400">({studentClass})</span>}
            </div>
          )}

          {onOpenPromptGuide && (
            <button
              onClick={onOpenPromptGuide}
              className="text-xs font-semibold px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center gap-1.5"
              title="Panduan Prompt Engineer"
            >
              <span>💡</span>
              <span className="hidden sm:inline">Panduan Prompt</span>
            </button>
          )}

          {/* Admin Login Button */}
          <button
            onClick={onOpenAdmin}
            id="admin-login-button"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm shadow-sm transition-all hover:shadow-md active:scale-95 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Admin 🔑</span>
          </button>
        </div>

      </div>
    </header>
  );
};
