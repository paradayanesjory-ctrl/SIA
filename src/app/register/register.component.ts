import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MOCK_STUDENTS } from '../data/mock-students';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NavbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isSidebarOpen = false;
  isLoading = false;
  message = '';
  messageType: 'success' | 'error' = 'success';

  formData = {
    codigo: '',
    documento: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private readonly authService: AuthService, private readonly router: Router) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  register(): void {
    if (!this.formData.codigo || !this.formData.documento || !this.formData.password || !this.formData.confirmPassword) {
      this.showMessage('Todos los campos son obligatorios.', 'error');
      return;
    }

    if (this.formData.password !== this.formData.confirmPassword) {
      this.showMessage('Las contraseñas no coinciden.', 'error');
      return;
    }

    const studentExists = MOCK_STUDENTS.some(
      student => student.codigo === this.formData.codigo && student.documento === this.formData.documento
    );

    if (!studentExists) {
      this.showMessage('El código o documento no corresponde a un estudiante registrado.', 'error');
      return;
    }

    this.isLoading = true;
    const isCreated = this.authService.register({
      codigo: this.formData.codigo,
      documento: this.formData.documento,
      password: this.formData.password
    });

    this.isLoading = false;

    if (!isCreated) {
      this.showMessage('El usuario ya existe. Inicia sesión.', 'error');
      return;
    }

    this.showMessage('Cuenta creada con éxito. Ahora puedes iniciar sesión.', 'success');
    setTimeout(() => this.router.navigate(['/login']), 1200);
  }

  private showMessage(message: string, type: 'success' | 'error'): void {
    this.message = message;
    this.messageType = type;
  }
}
