import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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

  constructor(private router: Router) {}

  // Lista de usuarios válidos
  private users = [
    { codigo: '192099', documento: '1091355245', password: 'Jordy123#' },
    { codigo: '192260', documento: '5073908', password: '12345678' },
    { codigo: '191919', documento: '1092355246', password: '12345678' }
  ];

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  validateCredentials(): boolean {
    return this.users.some(user => 
      user.codigo === String(this.formData.codigo) &&
      user.documento === String(this.formData.documento) &&
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
      if (this.validateCredentials()) {
        this.showNotificationMessage(
          `¡Bienvenido! Código: ${this.formData.codigo}`,
          'success'
        );
        
        // Aquí puedes redirigir al dashboard
        setTimeout(() => {
          console.log('Redirigiendo al dashboard...');
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