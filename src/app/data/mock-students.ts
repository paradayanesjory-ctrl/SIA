import { Student } from '../models/student.model';

// Mock student database
export const MOCK_STUDENTS: Student[] = [
  {
    codigo: '192099',
    documento: '1091355245',
    fullName: 'Jordy Prada Yanes',
    career: 'Ingeniería de Sistemas',
    email: 'jordy.parada@ufpso.edu.co',
    phone: '3001234567',
    imageUrl: 'img/yo.jpg',
    totalCredits: 120,
    overallAverage: 4.2,
    semesters: [
      {
        semesterNumber: 1,
        period: '2019-1',
        averageGrade: 4.0,
        subjects: [
          {
            subjectName: 'Cálculo Diferencial',
            subjectCode: 'MAT101',
            credits: 4,
            finalGrade: 4.2,
            status: 'Aprobada'
          },
          {
            subjectName: 'Introducción a la Programación',
            subjectCode: 'SIS101',
            credits: 4,
            finalGrade: 4.5,
            status: 'Aprobada'
          },
          {
            subjectName: 'Álgebra Lineal',
            subjectCode: 'MAT102',
            credits: 3,
            finalGrade: 3.8,
            status: 'Aprobada'
          },
          {
            subjectName: 'Comunicación Oral y Escrita',
            subjectCode: 'HUM101',
            credits: 2,
            finalGrade: 4.0,
            status: 'Aprobada'
          }
        ]
      },
      {
        semesterNumber: 2,
        period: '2019-2',
        averageGrade: 4.1,
        subjects: [
          {
            subjectName: 'Cálculo Integral',
            subjectCode: 'MAT201',
            credits: 4,
            finalGrade: 4.0,
            status: 'Aprobada'
          },
          {
            subjectName: 'Programación Orientada a Objetos',
            subjectCode: 'SIS201',
            credits: 4,
            finalGrade: 4.5,
            status: 'Aprobada'
          },
          {
            subjectName: 'Estructuras de Datos',
            subjectCode: 'SIS202',
            credits: 4,
            finalGrade: 4.3,
            status: 'Aprobada'
          },
          {
            subjectName: 'Física Mecánica',
            subjectCode: 'FIS101',
            credits: 3,
            finalGrade: 3.5,
            status: 'Aprobada'
          }
        ]
      },
      {
        semesterNumber: 3,
        period: '2020-1',
        averageGrade: 4.3,
        subjects: [
          {
            subjectName: 'Base de Datos',
            subjectCode: 'SIS301',
            credits: 4,
            finalGrade: 4.5,
            status: 'Aprobada'
          },
          {
            subjectName: 'Ingeniería de Software I',
            subjectCode: 'SIS302',
            credits: 4,
            finalGrade: 4.2,
            status: 'Aprobada'
          },
          {
            subjectName: 'Arquitectura de Computadores',
            subjectCode: 'SIS303',
            credits: 3,
            finalGrade: 4.0,
            status: 'Aprobada'
          }
        ]
      }
    ]
  },
  {
    codigo: '192260',
    documento: '5073908',
    fullName: 'María García López',
    career: 'Ingeniería de Sistemas',
    email: 'maria.garcia@ufpso.edu.co',
    totalCredits: 80,
    overallAverage: 3.8,
    semesters: [
      {
        semesterNumber: 1,
        period: '2019-1',
        averageGrade: 3.7,
        subjects: [
          {
            subjectName: 'Cálculo Diferencial',
            subjectCode: 'MAT101',
            credits: 4,
            finalGrade: 3.5,
            status: 'Aprobada'
          },
          {
            subjectName: 'Introducción a la Programación',
            subjectCode: 'SIS101',
            credits: 4,
            finalGrade: 4.0,
            status: 'Aprobada'
          }
        ]
      },
      {
        semesterNumber: 2,
        period: '2019-2',
        averageGrade: 3.9,
        subjects: [
          {
            subjectName: 'Cálculo Integral',
            subjectCode: 'MAT201',
            credits: 4,
            finalGrade: 3.8,
            status: 'Aprobada'
          },
          {
            subjectName: 'Programación Orientada a Objetos',
            subjectCode: 'SIS201',
            credits: 4,
            finalGrade: 4.0,
            status: 'Aprobada'
          }
        ]
      }
    ]
  },
  {
    codigo: '191919',
    documento: '1092355246',
    fullName: 'Carlos Rodríguez Pérez',
    career: 'Ingeniería de Sistemas',
    email: 'carlos.rodriguez@ufpso.edu.co',
    totalCredits: 100,
    overallAverage: 4.0,
    semesters: [
      {
        semesterNumber: 1,
        period: '2019-1',
        averageGrade: 3.9,
        subjects: [
          {
            subjectName: 'Cálculo Diferencial',
            subjectCode: 'MAT101',
            credits: 4,
            finalGrade: 3.8,
            status: 'Aprobada'
          },
          {
            subjectName: 'Introducción a la Programación',
            subjectCode: 'SIS101',
            credits: 4,
            finalGrade: 4.2,
            status: 'Aprobada'
          }
        ]
      },
      {
        semesterNumber: 2,
        period: '2019-2',
        averageGrade: 4.1,
        subjects: [
          {
            subjectName: 'Cálculo Integral',
            subjectCode: 'MAT201',
            credits: 4,
            finalGrade: 4.0,
            status: 'Aprobada'
          },
          {
            subjectName: 'Programación Orientada a Objetos',
            subjectCode: 'SIS201',
            credits: 4,
            finalGrade: 4.2,
            status: 'Aprobada'
          }
        ]
      }
    ]
  }
];
