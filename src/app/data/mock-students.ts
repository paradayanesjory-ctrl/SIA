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
        period: '2025-1',
        averageGrade: 4.0,
        subjects: [
          {
            subjectName: 'Cálculo Diferencial',
            subjectCode: 'MAT101',
            credits: 4,
            nota1: 4.0, nota2: 4.2, nota3: 4.4, setenta: 2.94, examen: 4.0,
            finalGrade: 4.2,
            status: 'Aprobada'
          },
          {
            subjectName: 'Introducción a la Programación',
            subjectCode: 'SIS101',
            credits: 4,
            nota1: 4.5, nota2: 4.5, nota3: 4.5, setenta: 3.15, examen: 4.5,
            finalGrade: 4.5,
            status: 'Aprobada'
          },
          {
            subjectName: 'Álgebra Lineal',
            subjectCode: 'MAT102',
            credits: 3,
            nota1: 3.8, nota2: 3.8, nota3: 3.8, setenta: 2.66, examen: 3.8,
            finalGrade: 3.8,
            status: 'Aprobada'
          },
          {
            subjectName: 'Comunicación Oral y Escrita',
            subjectCode: 'HUM101',
            credits: 2,
            nota1: 4.0, nota2: 4.0, nota3: 4.0, setenta: 2.8, examen: 4.0,
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
            nota1: 4.0, nota2: 4.0, nota3: 4.0, setenta: 2.8, examen: 4.0,
            finalGrade: 4.0,
            status: 'Aprobada'
          },
          {
            subjectName: 'Programación Orientada a Objetos',
            subjectCode: 'SIS201',
            credits: 4,
            nota1: 4.5, nota2: 4.5, nota3: 4.5, setenta: 3.15, examen: 4.5,
            finalGrade: 4.5,
            status: 'Aprobada'
          },
          {
            subjectName: 'Estructuras de Datos',
            subjectCode: 'SIS202',
            credits: 4,
            nota1: 4.3, nota2: 4.3, nota3: 4.3, setenta: 3.01, examen: 4.3,
            finalGrade: 4.3,
            status: 'Aprobada'
          },
          {
            subjectName: 'Física Mecánica',
            subjectCode: 'FIS101',
            credits: 3,
            nota1: 3.5, nota2: 3.5, nota3: 3.5, setenta: 2.45, examen: 3.5,
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
            nota1: 4.5, nota2: 4.5, nota3: 4.5, setenta: 3.15, examen: 4.5,
            finalGrade: 4.5,
            status: 'Aprobada'
          },
          {
            subjectName: 'Ingeniería de Software I',
            subjectCode: 'SIS302',
            credits: 4,
            nota1: 4.2, nota2: 4.2, nota3: 4.2, setenta: 2.94, examen: 4.2,
            finalGrade: 4.2,
            status: 'Aprobada'
          },
          {
            subjectName: 'Arquitectura de Computadores',
            subjectCode: 'SIS303',
            credits: 3,
            nota1: 4.0, nota2: 4.0, nota3: 4.0, setenta: 2.8, examen: 4.0,
            finalGrade: 4.0,
            status: 'Aprobada'
          }
        ]
      }
    ],
    notasActuales: [
      { codigo: '000828A', nombre: 'GRUPO ESTABLE MARATÓN DE PROGRAMACIÓN', nota1: '', nota2: '', nota3: '', setenta: '', examen: '', definitiva: '', habilitacion: '' },
      { codigo: '193405B', nombre: 'TENDENCIAS EN INGENIERÍA DE SISTEMAS', nota1: 4.5, nota2: 4.3, nota3: 3.4, setenta: 2.85, examen: 3.8, definitiva: 4.0, habilitacion: '' },
      { codigo: '193601B', nombre: 'BASE DE DATOS', nota1: 2.5, nota2: 4.3, nota3: 4.0, setenta: 2.52, examen: 3.1, definitiva: 3.5, habilitacion: '' },
      { codigo: '193609A', nombre: 'PROCESOS DEL NEGOCIO', nota1: 5.0, nota2: 5.0, nota3: 5.0, setenta: 3.50, examen: 5.0, definitiva: 5.0, habilitacion: '' },
      { codigo: '193702A', nombre: 'INTELIGENCIA ARTIFICIAL', nota1: 4.5, nota2: 4.4, nota3: 4.7, setenta: 3.17, examen: 4.7, definitiva: 4.6, habilitacion: '' },
      { codigo: '193703A', nombre: 'METODOLOGÍA DE LA INVESTIGACIÓN', nota1: 3.8, nota2: 3.0, nota3: 4.6, setenta: 2.66, examen: 4.0, definitiva: 3.9, habilitacion: '' },
      { codigo: '193704A', nombre: 'TEORÍA GENERAL DE LAS COMUNICACIONES', nota1: 2.5, nota2: 2.8, nota3: 3.6, setenta: 2.08, examen: 3.5, definitiva: 3.1, habilitacion: '' },
      { codigo: '193705A', nombre: 'FACTIBILIDAD Y EVALUACIÓN DE PROYECTOS', nota1: 4.2, nota2: 3.8, nota3: 4.0, setenta: 2.80, examen: 4.0, definitiva: 4.0, habilitacion: '' }
    ],
    notasAcumuladas: [
      { codigo: '193101', materia: 'FUNDAMENTOS DE PROGRAMACIÓN', creditos: 3, hora: 5, definitiva: 2.5 },
      { codigo: '193102', materia: 'INSTITUCIONAL ( ELECTIVA )', creditos: 2, hora: 2, definitiva: 3.3 },
      { codigo: '193103', materia: 'INTRODUCCIÓN A LA INGENIERIA DE SISTEMAS', creditos: 3, hora: 3, definitiva: 4.7 },
      { codigo: '193104', materia: 'CALCULO DIFERENCIAL', creditos: 4, hora: 4, definitiva: 3.8 },
      { codigo: '193105', materia: 'MATEMATICAS DISCRETAS', creditos: 2, hora: 3, definitiva: 4.7 },
      { codigo: '193106', materia: 'TÉCNICA DE LA COMUNICACIÓN ( ELECTIVA )', creditos: 2, hora: 2, definitiva: 4.0 }
    ],
    historico: [
      { periodo: 'I-2022', promedio: 3.8 },
      { periodo: 'II-2022', promedio: 3.4 },
      { periodo: 'I-2023', promedio: 3.5 },
      { periodo: 'II-2023', promedio: 3.8 },
      { periodo: 'I-2024', promedio: 3.9 },
      { periodo: 'II-2024', promedio: 4.2 },
      { periodo: 'I-2025', promedio: 4.1 }
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
            nota1: 3.5, nota2: 3.5, nota3: 3.5, setenta: 2.45, examen: 3.5,
            finalGrade: 3.5,
            status: 'Aprobada'
          },
          {
            subjectName: 'Introducción a la Programación',
            subjectCode: 'SIS101',
            credits: 4,
            nota1: 4.0, nota2: 4.0, nota3: 4.0, setenta: 2.8, examen: 4.0,
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
            nota1: 3.8, nota2: 3.8, nota3: 3.8, setenta: 2.66, examen: 3.8,
            finalGrade: 3.8,
            status: 'Aprobada'
          },
          {
            subjectName: 'Programación Orientada a Objetos',
            subjectCode: 'SIS201',
            credits: 4,
            nota1: 4.0, nota2: 4.0, nota3: 4.0, setenta: 2.8, examen: 4.0,
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
            nota1: 3.8, nota2: 3.8, nota3: 3.8, setenta: 2.66, examen: 3.8,
            finalGrade: 3.8,
            status: 'Aprobada'
          },
          {
            subjectName: 'Introducción a la Programación',
            subjectCode: 'SIS101',
            credits: 4,
            nota1: 4.2, nota2: 4.2, nota3: 4.2, setenta: 2.94, examen: 4.2,
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
            nota1: 4.0, nota2: 4.0, nota3: 4.0, setenta: 2.8, examen: 4.0,
            finalGrade: 4.0,
            status: 'Aprobada'
          },
          {
            subjectName: 'Programación Orientada a Objetos',
            subjectCode: 'SIS201',
            credits: 4,
            nota1: 4.2, nota2: 4.2, nota3: 4.2, setenta: 2.94, examen: 4.2,
            finalGrade: 4.2,
            status: 'Aprobada'
          }
        ]
      }
    ]
  },
  {
    codigo: '952902',
    documento: '1014991705',
    fullName: 'Juan Camilo Rivera Rincon',
    career: 'Administración de Empresas',
    email: 'jcriverar@ufpso.edu.co',
    phone: '3009876543',
    imageUrl: 'img/default-user.png',
    totalCredits: 18,
    overallAverage: 4.1,
    semesters: [
      {
        semesterNumber: 1,
        period: '2025-1',
        averageGrade: 4.1,
        subjects: [
          { subjectName: 'Matemáticas I', 
            subjectCode: '951101', 
            credits: 3, 
            nota1: 3.5, nota2: 3.2, nota3: 3.1, setenta: 2.38, examen: 3.6, // Recalculated 70%?? No, user mock had this.
            finalGrade: 4.0,
            status: 'Aprobada' 
          },
          { subjectName: 'Principios de economía', 
            subjectCode: '951102', 
            credits: 3, 
            nota1: 4.0, nota2: 4.0, nota3: 4.0, setenta: 2.8, examen: 4.0,
            finalGrade: 4.0, 
            status: 'Aprobada' 
          },
          { subjectName: 'Contabilidad financiera', 
            subjectCode: '951103', 
            credits: 3,
            nota1: 4.5, nota2: 4.5, nota3: 4.5, setenta: 3.15, examen: 4.0, // Avg 4.5, 70%=3.15. Ex=4.0. 3.15+1.2=4.35 -> 4.4
            finalGrade: 4.0, status: 'Aprobada' }, // Wait, user wants 4.0? I'll just put standard passing
          { subjectName: 'Fundamentos de administración', subjectCode: '951104', credits: 4,
            nota1: 4.0, nota2: 4.0, nota3: 4.0, setenta: 2.8, examen: 4.0, finalGrade: 4.0, status: 'Aprobada' },
          { subjectName: 'Lecto escritura y comunicación', subjectCode: '951105', credits: 2,
            nota1: 4.0, nota2: 4.0, nota3: 4.0, setenta: 2.8, examen: 4.0, finalGrade: 4.0, status: 'Aprobada' }
        ]
      },
      {
        semesterNumber: 2,
        period: '2025-2',
        averageGrade: 4.1,
        subjects: [
          { subjectName: 'Matemáticas II', subjectCode: '000828A', credits: 4, nota1: 3.4, nota2: 3.7, nota3: 4.1, setenta: 2.17, examen: 3.1, finalGrade: 3.1, status: 'Cursando' },
          { subjectName: 'Contabilidad administrativa', subjectCode: '193405B', credits: 3, nota1: 4.0, nota2: 3.3, nota3: 4.3, setenta: 2.8, examen: 3.6, finalGrade: 4.0, status: 'Aprobada' },
          { subjectName: 'Proceso administrativo', subjectCode: '193601B', credits: 4, nota1: 3.5, nota2: 3.5, nota3: 3.5, setenta: 2.45, examen: 3.5, finalGrade: 3.5, status: 'Aprobada' },
          { subjectName: 'Tecnología de la información y la com', subjectCode: '193609A', credits: 3, nota1: 5.0, nota2: 5.0, nota3: 5.0, setenta: 3.5, examen: 5.0, finalGrade: 5.0, status: 'Aprobada' },
          { subjectName: 'Constitución política colombiana', subjectCode: '193702A', credits: 4, nota1: 4.6, nota2: 4.6, nota3: 4.6, setenta: 3.22, examen: 4.6, finalGrade: 4.6, status: 'Aprobada' },
          { subjectName: 'Investigación I', subjectCode: '193703A', credits: 2, nota1: 3.9, nota2: 3.9, nota3: 3.9, setenta: 2.73, examen: 3.9, finalGrade: 3.9, status: 'Aprobada' }
        ]
      }
    ],
    // No current (en curso) subjects: todas las del primer semestre están aprobadas
    notasActuales: [],
    notasAcumuladas: [
      { codigo: '951101', materia: 'Matemáticas I', creditos: 3, hora: 5, definitiva: 4.0 },
      { codigo: '951102', materia: 'Principios de economía', creditos: 3, hora: 2, definitiva: 4.0 },
      { codigo: '951103', materia: 'Contabilidad financiera', creditos: 3, hora: 5, definitiva: 4.0 },
      { codigo: '951104', materia: 'Fundamentos de administración', creditos: 4, hora: 5, definitiva: 4.0 },
      { codigo: '951105', materia: 'Lecto escritura y comunicación', creditos: 2, hora: 2, definitiva: 4.0 }
    ],
    historico: [
      { periodo: 'I-2024', promedio: 4.1 },
      { periodo: 'II-2024', promedio: 4.2 },
      { periodo: 'I-2025', promedio: 4.3 }
    ]
  }
];
