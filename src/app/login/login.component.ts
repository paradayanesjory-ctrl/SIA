import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Student, UserCredentials } from '../models/student.model';
import { MOCK_STUDENTS } from '../data/mock-students';
import { MOCK_USERS } from '../data/mock-users';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword = false;
  isLoading = false;
  showNotification = false;
  notificationMessage = '';
  notificationType: 'success' | 'error' | 'warning' = 'success';

  formData = {
    codigo: '',
    documento: '',
    password: ''
  };

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // Automatically logout when visiting the login page
    this.authService.logout();
  }

  // Lista de usuarios válidos (importada de datos estáticos)
  private users: UserCredentials[] = MOCK_USERS;

  // Referencia a los datos completos de estudiantes
  private students: Student[] = MOCK_STUDENTS;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  validateCredentials(): Student | null {
    const user = this.users.find(u => 
      u.codigo === String(this.formData.codigo) &&
      u.documento === String(this.formData.documento) &&
      u.password === this.formData.password
    );

    if (user) {
      // Find and return the full student data
      return this.students.find(s => s.codigo === user.codigo) || null;
    }
    return null;
  }

  showNotificationMessage(message: string, type: 'success' | 'error' | 'warning'): void {
    this.notificationMessage = message;
    this.notificationType = type;
    this.showNotification = true;

    setTimeout(() => {
      this.showNotification = false;
    }, 4000);
  }

  handleLogin(): void {
    // Validar campos vacíos
    if (!this.formData.codigo || !this.formData.documento || !this.formData.password) {
      this.showNotificationMessage('Por favor complete todos los campos', 'error');
      return;
    }

    this.isLoading = true;

    // Simular llamada a API
    setTimeout(() => {
      const student = this.validateCredentials();
      
      if (student) {
        this.showNotificationMessage(
          `Usuario autenticado`,
          'success'
        );
        
        // Redirect to dashboard with delay
        setTimeout(() => {
          // Login with AuthService (pass full Student object) just before navigating
          this.authService.login(student);
          this.router.navigate(['/dashboard']);
        }, 1500);
      } else {
        this.showNotificationMessage(
          'Credenciales incorrectas. Por favor verifique sus datos.',
          'error'
        );
      }
      this.isLoading = false;
    }, 1000);
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.handleLogin();
    }
  }

  resetPassword(): void {
    this.openResetModal();
  }

  /* Modal Logic */
  showResetModal = false;

  openResetModal(): void {
    this.showResetModal = true;
  }

  closeResetModal(): void {
    this.showResetModal = false;
  }


  /* Sidebar Logic */
  isSidebarOpen = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
  }

  /* Notification Logic */
  closeNotification(): void {
    this.showNotification = false;
  }
}