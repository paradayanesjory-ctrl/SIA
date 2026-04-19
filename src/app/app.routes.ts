import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { authGuard } from './guards/auth.guard';

import { NotasComponent } from './notas/notas.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'sidebar', component: SidebarComponent, canActivate: [authGuard] },
  { path: 'notas', component: NotasComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];
