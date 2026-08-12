import { ExamResult } from '../types';

const STORAGE_KEY = 'pkk_exam_history_v1';
const ATTEMPTS_PREFIX = 'pkk_attempts_';

export function getExamHistory(): ExamResult[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse exam history from localStorage:', err);
    return [];
  }
}

export function saveExamResult(result: ExamResult): void {
  try {
    const history = getExamHistory();
    history.unshift(result); // latest first
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));

    // Update student attempt count
    const studentKey = `${ATTEMPTS_PREFIX}${result.studentName.trim().toLowerCase()}_${result.studentClass.trim().toLowerCase()}`;
    const currentAttempt = getStudentAttempts(result.studentName, result.studentClass);
    localStorage.setItem(studentKey, String(Math.max(currentAttempt, result.attemptNumber)));
  } catch (err) {
    console.error('Failed to save exam result to localStorage:', err);
  }
}

export function getStudentAttempts(name: string, studentClass: string): number {
  if (!name.trim()) return 0;
  try {
    const studentKey = `${ATTEMPTS_PREFIX}${name.trim().toLowerCase()}_${studentClass.trim().toLowerCase()}`;
    const raw = localStorage.getItem(studentKey);
    return raw ? parseInt(raw, 10) : 0;
  } catch {
    return 0;
  }
}

export function clearExamHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear exam history:', err);
  }
}
