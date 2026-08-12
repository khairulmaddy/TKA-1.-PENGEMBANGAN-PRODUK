import * as XLSX from 'xlsx';
import { ExamResult } from '../types';

export function exportExamResultsToExcel(results: ExamResult[], filename: string = 'Rekap_Nilai_Siswa_PKK.xlsx'): void {
  const data = results.map((item, index) => {
    const minutes = Math.floor(item.durationSeconds / 60);
    const seconds = item.durationSeconds % 60;
    const formattedDuration = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const dateFormatted = new Date(item.completedAt).toLocaleString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    return {
      'No': index + 1,
      'Tanggal Selesai': dateFormatted,
      'Nama Siswa': item.studentName,
      'Kelas': item.studentClass,
      'Mata Pelajaran': item.subject,
      'Kesempatan Ke-': item.attemptNumber,
      'Skor Akhir': item.score,
      'Jumlah Benar': item.totalCorrect,
      'Jumlah Salah': item.totalIncorrect,
      'Total Soal': item.totalQuestions,
      'Durasi Pengerjaan': formattedDuration,
      'Durasi (Detik)': item.durationSeconds
    };
  });

  const worksheet = XLSX.utils.json_to_sheet(data);

  // Set column widths
  worksheet['!cols'] = [
    { wch: 5 },  // No
    { wch: 22 }, // Tanggal
    { wch: 25 }, // Nama Siswa
    { wch: 12 }, // Kelas
    { wch: 30 }, // Mata Pelajaran
    { wch: 15 }, // Kesempatan
    { wch: 12 }, // Skor
    { wch: 14 }, // Benar
    { wch: 14 }, // Salah
    { wch: 12 }, // Total Soal
    { wch: 18 }, // Durasi
    { wch: 14 }  // Durasi Detik
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Rekap Nilai Siswa');

  XLSX.writeFile(workbook, filename);
}
