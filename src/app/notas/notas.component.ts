import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent implements OnInit {
  activeTab = "actuales"
  isSidebarOpen = false

  // Data containers
  notasActuales: any[] = []
  notasAcumuladas: any[] = []
  historico: any[] = []
  semesters: any[] = []
  activeSemesterIndex = 0

  // Summary Data
  semesterName = "Primer Semestre del 2022"
  creditosAprobados = 0
  promedioAcumulado = 0
  chartIsLine = false

  constructor(private authService: AuthService) {}

  toggleChartType() {
    this.chartIsLine = !this.chartIsLine
  }

  getPolylinePoints(): string {
    if (!this.historico || this.historico.length === 0) return ""
    const n = this.historico.length
    return this.historico
      .map((item: any, i: number) => {
        const x = n === 1 ? 50 : (i / (n - 1)) * 100
        const value = Number(item.promedio ?? item.value ?? 0)
        const y = 100 - (Math.max(0, Math.min(5, value)) / 5) * 100
        return `${x},${y}`
      })
      .join(" ")
  }

  pointFor(i: number) {
    const n = this.historico?.length || 1
    const item = this.historico[i] || { promedio: 0 }
    const x = n === 1 ? 50 : (i / (n - 1)) * 100
    const value = Number(item.promedio ?? item.value ?? 0)
    const y = 100 - (Math.max(0, Math.min(5, value)) / 5) * 100
    return { x, y }
  }

  ngOnInit(): void {
    const student = this.authService.getCurrentStudent()

    if (student) {
      this.populateData(student)
    } else {
      // Subscribe for updates in case it loads later or state changes
      this.authService.currentStudent$.subscribe((st) => {
        if (st) this.populateData(st)
      })
    }
  }

  private populateData(student: any) {
    // --- Semesters management ---
    this.semesters = (student.semesters || [])
      .slice()
      .sort((a: any, b: any) => (a.semesterNumber || 0) - (b.semesterNumber || 0))

    // Notas Actuales: mostrar SOLO el último semestre cursado (último element de semesters)
    const lastSem = this.getLastSemester(student)
    if (lastSem) {
      this.notasActuales = (lastSem.subjects || []).map((s: any) => {
        // Helper to parse grades: empty string/null/undefined -> NaN
        const parse = (v: any) => (v === "" || v === null || v === undefined ? Number.NaN : Number(v))

        const nota1 = parse(s.nota1 ?? s.nota_1)
        const nota2 = parse(s.nota2 ?? s.nota_2)
        const nota3 = parse(s.nota3 ?? s.nota_3)

        // Calculate average of available notes (now all should be available)
        const validNotes = [nota1, nota2, nota3].filter((n) => !isNaN(n))
        const sum = validNotes.reduce((a, b) => a + b, 0)
        const count = validNotes.length
        const avg = count > 0 ? sum / count : Number.NaN

        // 70% component
        const setentaCalc = !isNaN(avg) ? Math.round(avg * 0.7 * 100) / 100 : Number.NaN

        const examen = parse(s.examen ?? s.exam)

        // Calculate definitive: need both 70% component and exam
        // If user wants partial calculation, we could adjust, but typically "definitiva" needs all parts.
        // Assuming strict calculation for "Definitiva" column.
        let definitivaCalc: string | number = ""

        if (!isNaN(setentaCalc) && !isNaN(examen)) {
          definitivaCalc = Math.round((setentaCalc + examen * 0.3) * 100) / 100
        } else {
          // Fallback to hardcoded if calculation not possible (or leave empty)
          definitivaCalc = s.finalGrade ?? s.definitiva ?? ""
        }

        return {
          codigo: s.subjectCode || s.codigo || "",
          nombre: s.subjectName || s.materia || "",
          nota1: isNaN(nota1) ? "" : nota1,
          nota2: isNaN(nota2) ? "" : nota2,
          nota3: isNaN(nota3) ? "" : nota3,
          setenta: !isNaN(setentaCalc) ? setentaCalc : (s.setenta ?? s.setentaPorc ?? ""),
          examen: !isNaN(examen) ? examen : (s.examen ?? ""),
          definitiva: definitivaCalc,
          habilitacion: s.habilitacion ?? "",
        }
      })
    } else {
      this.notasActuales = student.notasActuales || []
    }

    // Notas Acumuladas: inicializar con el primer semestre disponible en la navegación
    if (this.semesters.length > 0) {
      this.activeSemesterIndex = 0 // start showing the earliest by default (can be changed)
      this.setNotasAcumuladasForIndex(this.activeSemesterIndex)
    } else {
      this.notasAcumuladas = student.notasAcumuladas || []
      this.semesterName = ""
    }
    this.historico = student.historico || []

    // Calculate global data
    this.calculateGlobalData(student)
  }

  private calculateGlobalData(student: any) {
    if (!student.semesters || student.semesters.length === 0) {
      this.creditosAprobados = 0
      this.promedioAcumulado = 0
      return
    }

    let totalWeightedScore = 0
    let totalCredits = 0

    student.semesters.forEach((semester: any) => {
      semester.subjects.forEach((subject: any) => {
        // Ensure values are numbers
        const grade = Number(subject.finalGrade)
        const credits = Number(subject.credits)

        if (!isNaN(grade) && !isNaN(credits)) {
          totalWeightedScore += grade * credits
          totalCredits += credits
        }
      })
    })

    this.creditosAprobados = totalCredits

    if (totalCredits > 0) {
      // Calculate average and round to 2 decimal places
      const average = totalWeightedScore / totalCredits
      this.promedioAcumulado = Math.round(average * 100) / 100
    } else {
      this.promedioAcumulado = 0
    }
  }

  // Devuelve el último semestre (por `semesterNumber`) o undefined
  private getLastSemester(student: any) {
    if (!student.semesters || student.semesters.length === 0) return undefined
    // Encontrar semestre con mayor semesterNumber
    return student.semesters.reduce((prev: any, cur: any) => {
      return prev && prev.semesterNumber >= cur.semesterNumber ? prev : cur
    })
  }

  // Construye una etiqueta legible para el semestre, p.ej. 'Primer Semestre del 2022'
  private buildSemesterName(semester: any): string {
    if (!semester) return ""
    const num = Number(semester.semesterNumber) || 0
    const period = (semester.period || "").toString()
    let year = ""
    if (period.includes("-")) {
      year = period.split("-")[0]
    } else if (/20\d{2}/.test(period)) {
      year = period.match(/20\d{2}/)?.[0] || ""
    }

    const ordinals = [
      "Cero",
      "Primer",
      "Segundo",
      "Tercer",
      "Cuarto",
      "Quinto",
      "Sexto",
      "Séptimo",
      "Octavo",
      "Noveno",
      "Décimo",
    ]
    const label = ordinals[num] || `Semestre ${num}`
    return year ? `${label} Semestre del ${year}`.replace("Cero Semestre", "Semestre") : `${label} Semestre`
  }

  // Navegación para Notas Acumuladas
  setNotasAcumuladasForIndex(idx: number) {
    if (!this.semesters || this.semesters.length === 0) {
      this.notasAcumuladas = []
      this.semesterName = ""
      return
    }
    const sem = this.semesters[Math.max(0, Math.min(idx, this.semesters.length - 1))]
    this.activeSemesterIndex = this.semesters.indexOf(sem)
    this.semesterName = this.buildSemesterName(sem)
    this.notasAcumuladas = (sem.subjects || []).map((s: any) => ({
      codigo: s.subjectCode || s.codigo || "",
      materia: s.subjectName || s.materia || "",
      creditos: s.credits || s.creditos || "",
      hora: s.hours || s.hora || "",
      // calcular parciales y setenta similar a notasActuales
      nota1: s.nota1 ?? s.nota_1 ?? "",
      nota2: s.nota2 ?? s.nota_2 ?? "",
      nota3: s.nota3 ?? s.nota_3 ?? "",
      setenta: (() => {
        const n1 = Number(s.nota1 ?? s.nota_1 ?? Number.NaN)
        const n2 = Number(s.nota2 ?? s.nota_2 ?? Number.NaN)
        const n3 = Number(s.nota3 ?? s.nota_3 ?? Number.NaN)
        const nums = [n1, n2, n3].filter((n) => !isNaN(n))
        if (nums.length === 0) return s.setenta ?? s.setentaPorc ?? ""
        const avg = nums.reduce((a, b) => a + b, 0) / nums.length
        return Math.round(avg * 0.7 * 100) / 100
      })(),
      examen: s.examen ?? "",
      definitiva: s.finalGrade || s.definitiva || "",
    }))
  }

  prevSemester() {
    if (this.activeSemesterIndex > 0) {
      this.setNotasAcumuladasForIndex(this.activeSemesterIndex - 1)
    }
  }

  nextSemester() {
    if (this.activeSemesterIndex < this.semesters.length - 1) {
      this.setNotasAcumuladasForIndex(this.activeSemesterIndex + 1)
    }
  }

  goToSemester(index: number) {
    this.setNotasAcumuladasForIndex(index)
  }

  setActiveTab(tab: string) {
    this.activeTab = tab
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen
  }

  closeSidebar() {
    this.isSidebarOpen = false
  }
}