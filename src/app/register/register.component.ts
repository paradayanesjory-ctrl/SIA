import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../services/auth.service';

const REDIRECT_DELAY_MS = 1200;

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, NavbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
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

  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  register(): void {
    const codigo = this.formData.codigo.trim();
    const documento = this.formData.documento.trim();
    const password = this.formData.password.trim();
    const confirmPassword = this.formData.confirmPassword.trim();

    if (!codigo || !documento || !password || !confirmPassword) {
      this.showMessage('Todos los campos son obligatorios.', 'error');
      return;
    }

    if (password !== confirmPassword) {
      this.showMessage('Las contraseñas no coinciden.', 'error');
      return;
    }

    if (!this.authService.studentExists(codigo, documento)) {
      this.showMessage('El código o documento no corresponde a un estudiante registrado.', 'error');
      return;
    }

    this.isLoading = true;
    const registrationSucceeded = this.authService.register({
      codigo,
      documento,
      password
    });

    this.isLoading = false;

    if (!registrationSucceeded) {
      this.showMessage('El usuario ya existe. Inicia sesión.', 'error');
      return;
    }

    this.showMessage('Cuenta creada con éxito. Ahora puedes iniciar sesión.', 'success');
    setTimeout(() => this.router.navigate(['/login']), REDIRECT_DELAY_MS);
  }

  private showMessage(message: string, type: 'success' | 'error'): void {
    this.message = message;
    this.messageType = type;
  }
}
