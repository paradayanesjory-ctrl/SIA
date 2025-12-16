// Grade interface for individual subject grades
export interface Grade {
  subjectName: string;
  subjectCode: string;
  credits: number;
  finalGrade: number; // Definitiva
  status: 'Aprobada' | 'Reprobada' | 'Cursando';
}

// Semester interface containing subjects and grades
export interface Semester {
  semesterNumber: number;
  period: string; // e.g., "2024-1", "2024-2"
  subjects: Grade[];
  averageGrade: number;
}

// Student interface with complete academic information
export interface Student {
  codigo: string;
  documento: string;
  fullName: string;
  career: string;
  email?: string;
  phone?: string;
  imageUrl?: string;
  semesters: Semester[];
  overallAverage: number;
  totalCredits: number;
  academicSanction?: string;
}

// User credentials for login (separate from student data)
export interface UserCredentials {
  codigo: string;
  documento: string;
  password: string;
}
