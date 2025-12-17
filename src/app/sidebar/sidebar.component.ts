import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { MOCK_STUDENTS } from '../data/mock-students';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() isLoggedIn = false;

  // Estado para colapsar/expandir el sidebar
  collapsed = false;

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

  // Alterna el estado del sidebar (colapsado / expandido)
  toggleSidebar(): void {
    this.collapsed = !this.collapsed;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to login or home
  }

  // Lista de usuarios válidos
  private users = [
    { codigo: '192099', documento: '1091355245', password: 'JORDY123#' },
    { codigo: '192260', documento: '5073908', password: '12345678' },
    { codigo: '191919', documento: '1092355246', password: '12345678' },
    { codigo: '242113', documento: '1065872030', password: 'Valeria2006' }
  ];

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  validateCredentials(): boolean {
    return this.users.some(user => 
      user.codigo === this.formData.codigo &&
      user.documento === this.formData.documento &&
      user.password === this.formData.password
    );
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
      // Find the user credentials check first (already done in validateCredentials, but we need the object)
      const validParams = this.validateCredentials();
      
      if (validParams) {
        // Find the full student data from MOCK_STUDENTS using the code
        const studentData = MOCK_STUDENTS.find(s => s.codigo === this.formData.codigo);
        
        if (studentData) {
          // Log in with the full student data
          this.authService.login(studentData);
          
          this.showNotificationMessage(
            `Usuario autenticado`,
            'success'
          );
          
          setTimeout(() => {
            console.log('Redirigiendo al dashboard...');
            this.router.navigate(['/dashboard']);
          }, 1500);
        } else {
           // Case where credentials match mock-users but data is missing in mock-students
           console.warn('Student data not found for code:', this.formData.codigo);
           this.showNotificationMessage('Error cargando datos del estudiante.', 'error');
           // Fallback login just to allow entry? Or block?
           // For now, let's block or try to login with minimal data if needed. 
           // Better to be safe and show error.
        }

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

  showResetModal = false;

  resetPassword(): void {
    this.openResetModal();
  }

  openResetModal(): void {
    this.showResetModal = true;
  }

  closeResetModal(): void {
    this.showResetModal = false;
  }

  closeNotification(): void {
    this.showNotification = false;
  }
}
