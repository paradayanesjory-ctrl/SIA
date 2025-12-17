// Grade interface for individual subject grades
export interface Grade {
  subjectName: string;
  subjectCode: string;
  credits: number;
  finalGrade: number; // Definitiva
  status: 'Aprobada' | 'Reprobada' | 'Cursando';
  // Optional fields for detailed view
  nota1?: number | string;
  nota2?: number | string;
  nota3?: number | string;
  setenta?: number | string;
  examen?: number | string;
  habilitacion?: number | string;
}

// Semester interface containing subjects and grades
export interface Semester {
  semesterNumber: number;
  period: string; // e.g., "2024-1", "2024-2"
  subjects: Grade[];
  averageGrade: number;
}

// Detailed grade for the "Notas Actuales" tab
export interface DetailedGrade {
  codigo: string;
  nombre: string;
  nota1: number | string;
  nota2: number | string;
  nota3: number | string;
  setenta: number | string;
  examen: number | string;
  definitiva: number | string;
  habilitacion: number | string;
}

// Accumulated grade for the "Notas Acumuladas" tab
export interface AccumulatedGrade {
  codigo: string;
  materia: string;
  creditos: number;
  hora: number;
  definitiva: number;
  // Optional fields for detailed view when mapped from semesters
  nota1?: number | string;
  nota2?: number | string;
  nota3?: number | string;
  setenta?: number | string;
  examen?: number | string;
  habilitacion?: number | string;
}

// History item for the "Promedio Historico" tab
export interface HistoryItem {
  periodo: string;
  promedio: number;
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
  
  // New fields for NotasComponent
  notasActuales?: DetailedGrade[];
  notasAcumuladas?: AccumulatedGrade[];
  historico?: HistoryItem[];
}

// User credentials for login (separate from student data)
export interface UserCredentials {
  codigo: string;
  documento: string;
  password: string;
}
