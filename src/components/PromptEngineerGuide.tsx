import React, { useState } from 'react';
import { BookOpen, Copy, Check, Sparkles, Code2, Layers, Cpu } from 'lucide-react';

interface PromptEngineerGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MASTER_PROMPT_TEMPLATE = `[ROLE & PURPOSE]
Bertindaklah sebagai Senior Full-Stack Web Developer & Prompt Engineer ahli. Tugas Anda adalah membangun aplikasi web interaktif, modern, dan bebas bug berbasis React, TypeScript, dan Tailwind CSS berdasarkan persyaratan produk berikut.

[PRODUCT SPECIFICATION & CONSTRAINTS]
1. NAMA APLIKASI: [Nama Aplikasi Anda]
2. PERAN USER & FITUR UTAMA:
   - Identitas User: Input Nama, Kelas, Mata Pelajaran dengan animasi visual yang elegan.
   - Sesi Ujian & Timer: Dilengkapi stopwatch/timer pengerjaan otomatis dalam format menit:detik.
   - Manajemen Percobaan (Attemps Rule):
     * Percobaan 1 & 2: Menampilkan skor akhir beserta kunci jawaban dan pembahasan lengkap per nomor.
     * Percobaan 3 (Final): Mengacak nomor soal dan opsi jawaban secara otomatis. Hanya menampilkan rekap skor (Jumlah Benar & Salah) tanpa rincian jawaban/pembahasan.
   - Database Global Lokal Admin:
     * Menyimpan setiap hasil ujian secara otomatis ke localStorage (Nama, Kelas, Skor, Benar/Salah, Tanggal, Durasi Pengerjaan).
     * Tombol Admin 🔑 di sudut kanan atas dengan otentikasi login password.
     * Ekspor Rekap Penilaian Siswa ke format file Excel (.xlsx) rapi.

[UI & DESIGN SYSTEM RULES]
- Kontras Font & Readability: Gunakan kombinasi warna teks tinggi kontras (teks gelap pada background terang), tanpa warna buram yang menyulitkan siswa.
- Tata Letak Responsif: Mobile-first & Desktop-ready menggunakan utility class Tailwind CSS.
- Komponen & Ikon: Gunakan lucide-react untuk ikonografi dan motion/react untuk animasi transisi halus.
- Tanpa Stubs/Mock Kosong: Setiap tombol, modal, dan formulir wajib memiliki event handler fungsional 100%.

[DATA STRUCTURE / BANK SOAL]
- Sertakan bank soal lengkap mencakup Pilihan Ganda (PG), Pilihan Ganda Kompleks (Multi-Select), Benar/Salah, dan Menjodohkan beserta Kunci Jawaban dan Pembahasan lengkap.`;

export const PromptEngineerGuide: React.FC<PromptEngineerGuideProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(MASTER_PROMPT_TEMPLATE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 text-white p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-emerald-200 font-bold border border-white/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                Panduan & Master Prompt Engineer
              </h2>
              <p className="text-xs text-emerald-100">
                Formula Efektif Bikin Aplikasi Web dengan AI Studio
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 text-sm">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 bg-emerald-50 border border-emerald-100 rounded-2xl space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs">
                <Code2 className="w-4 h-4 text-emerald-600" />
                <span>1. Role Clarity</span>
              </div>
              <p className="text-xs text-slate-600">Definisikan peran AI sebagai Senior Developer dengan spesifikasi stack teknologi yang tegas.</p>
            </div>

            <div className="p-3.5 bg-indigo-50 border border-indigo-100 rounded-2xl space-y-1">
              <div className="flex items-center gap-1.5 text-indigo-800 font-bold text-xs">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>2. Rule Structure</span>
              </div>
              <p className="text-xs text-slate-600">Instruksikan logika bisnis, pembatasan percobaan (attempt rules), serta ekspor data admin.</p>
            </div>

            <div className="p-3.5 bg-purple-50 border border-purple-100 rounded-2xl space-y-1">
              <div className="flex items-center gap-1.5 text-purple-800 font-bold text-xs">
                <Cpu className="w-4 h-4 text-purple-600" />
                <span>3. Design Standard</span>
              </div>
              <p className="text-xs text-slate-600">Tekankan kontras typography, animasi warna visual cover, dan stopwatch timer real-time.</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                Template Prompt Master (Siap Salin & Pakai)
              </label>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-xs cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin ke Clipboard!' : 'Salin Master Prompt'}</span>
              </button>
            </div>

            <pre className="p-4 bg-slate-900 text-slate-100 rounded-2xl text-xs font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto border border-slate-800">
              {MASTER_PROMPT_TEMPLATE}
            </pre>
          </div>

        </div>

      </div>
    </div>
  );
};
