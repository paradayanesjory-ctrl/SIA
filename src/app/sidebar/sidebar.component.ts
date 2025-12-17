import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { MOCK_STUDENTS } from '../data/mock-students';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  @Input() isLoggedIn = false;

  // Estado para colapsar/expandir el sidebar
  collapsed = false;

  activeItem = 'Inicio';

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

  showResetModal = false;

  // Lista de usuarios válidos
  private users = [
    { codigo: '192099', documento: '1091355245', password: 'JORDY123#' },
    { codigo: '192260', documento: '5073908', password: '12345678' },
    { codigo: '191919', documento: '1092355246', password: '12345678' },
    { codigo: '242113', documento: '1065872030', password: 'Valeria2006' }
  ];

  constructor(private router: Router, private authService: AuthService) {
    // Listen for route changes to update activeItem if needed (even if component persists)
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateActiveItemFromRoute();
    });
  }

  ngOnInit(): void {
    this.updateActiveItemFromRoute();
  }

  private updateActiveItemFromRoute(): void {
    const url = this.router.url;
    if (url.includes('/notas')) {
      this.activeItem = 'Notas';
    } else if (url.includes('/dashboard')) {
      this.activeItem = 'Inicio';
    } else {
      // Default or other routes
      this.activeItem = 'Inicio';
    }
  }

  // Alterna el estado del sidebar (colapsado / expandido)
  toggleSidebar(): void {
    this.collapsed = !this.collapsed;
  }

  setActiveItem(item: string): void {
    this.activeItem = item;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

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
    if (!this.formData.codigo || !this.formData.documento || !this.formData.password) {
      this.showNotificationMessage('Por favor complete todos los campos', 'error');
      return;
    }

    this.isLoading = true;

    setTimeout(() => {
      const validParams = this.validateCredentials();
      
      if (validParams) {
        const studentData = MOCK_STUDENTS.find(s => s.codigo === this.formData.codigo);
        
        if (studentData) {
          this.authService.login(studentData);
          this.showNotificationMessage('Usuario autenticado', 'success');
          
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 1500);
        } else {
           console.warn('Student data not found for code:', this.formData.codigo);
           this.showNotificationMessage('Error cargando datos del estudiante.', 'error');
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
