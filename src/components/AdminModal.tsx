import React, { useState, useEffect } from 'react';
import { ExamResult } from '../types';
import { getExamHistory, clearExamHistory } from '../utils/storage';
import { exportExamResultsToExcel } from '../utils/exportExcel';
import { ShieldCheck, Download, Trash2, Search, X, LogOut, Lock, Key, Users, Award, Clock } from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [history, setHistory] = useState<ExamResult[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      setHistory(getExamHistory());
    }
  }, [isOpen, isAuthenticated]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin' || password === 'admin123' || password === '123456') {
      setIsAuthenticated(true);
      setLoginError('');
      setHistory(getExamHistory());
    } else {
      setLoginError('Password Admin salah! Silakan coba lagi. (Gunakan: admin123)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  const handleExportExcel = () => {
    if (history.length === 0) return;
    const nowStr = new Date().toISOString().slice(0, 10);
    exportExamResultsToExcel(history, `Rekap_Nilai_Siswa_PKK_${nowStr}.xlsx`);
  };

  const handleClearAll = () => {
    clearExamHistory();
    setHistory([]);
    setShowClearConfirm(false);
  };

  const filteredHistory = history.filter(item =>
    item.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.studentClass.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Summary Metrics
  const totalSubmissions = history.length;
  const averageScore = totalSubmissions > 0
    ? Math.round(history.reduce((acc, h) => acc + h.score, 0) / totalSubmissions)
    : 0;
  const topScore = totalSubmissions > 0
    ? Math.max(...history.map(h => h.score))
    : 0;
  const uniqueStudentsCount = new Set(history.map(h => h.studentName.trim().toLowerCase())).size;

  const formatDuration = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                Panel Administrasi Admin 🔑
              </h2>
              <p className="text-xs text-slate-400">
                Rekapitulasi Nilai & Database Global Lokal Siswa
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Keluar</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1">
          
          {/* LOGIN SCREEN IF NOT AUTHENTICATED */}
          {!isAuthenticated ? (
            <div className="max-w-md mx-auto my-8 space-y-6 text-center">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
                <Lock className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-slate-900">
                  Login Admin
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Masukkan kata sandi admin untuk mengakses rekapitulasi penilaian seluruh siswa.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4 text-left">
                <div>
                  <label htmlFor="admin-password-input" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Password Admin
                  </label>
                  <div className="relative">
                    <input
                      id="admin-password-input"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan password admin..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      autoFocus
                    />
                    <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Password default: <code className="bg-slate-100 text-indigo-600 px-1.5 py-0.5 rounded font-mono">admin123</code>
                  </p>
                </div>

                {loginError && (
                  <div className="p-3 rounded-xl bg-rose-50 text-rose-700 text-xs font-semibold border border-rose-200">
                    {loginError}
                  </div>
                )}

                <button
                  type="submit"
                  id="admin-login-submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  Masuk Panel Admin
                </button>
              </form>
            </div>
          ) : (
            /* ADMIN DASHBOARD WHEN AUTHENTICATED */
            <div className="space-y-6">
              
              {/* Summary Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-indigo-950">{uniqueStudentsCount}</div>
                    <div className="text-xs text-indigo-700 font-medium">Siswa Terdaftar</div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-100 p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-purple-950">{totalSubmissions}</div>
                    <div className="text-xs text-purple-700 font-medium">Total Ujian Selesai</div>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">
                    <span>Avg</span>
                  </div>
                  <div>
                    <div className="text-xl font-black text-emerald-950">{averageScore}</div>
                    <div className="text-xs text-emerald-700 font-medium">Rata-Rata Nilai</div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shrink-0">
                    <span>★</span>
                  </div>
                  <div>
                    <div className="text-xl font-black text-amber-950">{topScore}</div>
                    <div className="text-xs text-amber-700 font-medium">Nilai Tertinggi</div>
                  </div>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                {/* Search */}
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Cari berdasarkan nama siswa atau kelas..."
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleExportExcel}
                    disabled={history.length === 0}
                    id="export-excel-button"
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-sm transition-all cursor-pointer ${
                      history.length === 0
                        ? 'bg-slate-300 cursor-not-allowed'
                        : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-200'
                    }`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Excel (.xlsx)</span>
                  </button>

                  <button
                    onClick={() => setShowClearConfirm(true)}
                    disabled={history.length === 0}
                    className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 font-bold text-xs transition-colors cursor-pointer"
                    title="Hapus semua riwayat"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Hapus Data</span>
                  </button>
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-xs bg-white">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <th className="p-3.5 w-12 text-center">No</th>
                      <th className="p-3.5">Nama Siswa</th>
                      <th className="p-3.5">Kelas</th>
                      <th className="p-3.5 text-center">Percobaan</th>
                      <th className="p-3.5 text-center">Skor</th>
                      <th className="p-3.5 text-center">Benar / Salah</th>
                      <th className="p-3.5 text-center">Durasi</th>
                      <th className="p-3.5 text-right">Tanggal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {filteredHistory.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="p-8 text-center text-slate-400 font-medium">
                          {history.length === 0
                            ? 'Belum ada data pengerjaan ujian siswa. Hasil pengerjaan siswa akan otomatis terekam di sini.'
                            : 'Tidak ada data siswa yang cocok dengan pencarian.'}
                        </td>
                      </tr>
                    ) : (
                      filteredHistory.map((item, idx) => (
                        <tr key={item.id} className="hover:bg-slate-50 transition-colors text-slate-800 font-medium">
                          <td className="p-3.5 text-center font-bold text-slate-500">{idx + 1}</td>
                          <td className="p-3.5 font-bold text-slate-900">{item.studentName}</td>
                          <td className="p-3.5">{item.studentClass}</td>
                          <td className="p-3.5 text-center">
                            <span className="inline-block px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs border border-indigo-100">
                              Ke-{item.attemptNumber}
                            </span>
                          </td>
                          <td className="p-3.5 text-center">
                            <span className={`inline-block px-2.5 py-1 rounded-lg font-black text-sm ${
                              item.score >= 75 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                            }`}>
                              {item.score}
                            </span>
                          </td>
                          <td className="p-3.5 text-center text-xs">
                            <span className="text-emerald-600 font-bold">{item.totalCorrect} Benar</span> /{' '}
                            <span className="text-rose-500">{item.totalIncorrect} Salah</span>
                          </td>
                          <td className="p-3.5 text-center font-mono text-xs text-slate-600">
                            {formatDuration(item.durationSeconds)}
                          </td>
                          <td className="p-3.5 text-right text-xs text-slate-500">
                            {new Date(item.completedAt).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Clear Confirm Modal */}
              {showClearConfirm && (
                <div className="fixed inset-0 z-60 bg-slate-900/60 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl p-6 max-w-sm w-full space-y-4 text-center">
                    <h4 className="text-lg font-bold text-slate-900">
                      Hapus Seluruh Data Rekap?
                    </h4>
                    <p className="text-xs text-slate-600">
                      Tindakan ini akan menghapus seluruh database riwayat nilai siswa di browser ini secara permanen.
                    </p>
                    <div className="flex gap-2 justify-center pt-2">
                      <button
                        onClick={() => setShowClearConfirm(false)}
                        className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold"
                      >
                        Batal
                      </button>
                      <button
                        onClick={handleClearAll}
                        className="px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold"
                      >
                        Ya, Hapus Semua
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
