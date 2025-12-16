import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-navbar',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() isSidebarOpen = false;
  @Output() menuToggled = new EventEmitter<void>();

  // User profile data
  student: Student | null = null;
  userName: string = 'ALUMNO';
  userImageUrl: string = 'img/default-user.png'; // Updated default path
  career: string = '';

  private authSubscription: Subscription | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.currentStudent$.subscribe(student => {
      this.student = student;
      if (student) {
        this.userName = student.fullName;
        this.career = student.career;
        if (student.imageUrl) {
          this.userImageUrl = student.imageUrl;
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  onMenuClick(): void {
    this.menuToggled.emit();
  }

  // Method to update user data after login (deprecated, handled by subscription)
  setUserData(userName: string, userImage?: string): void {
    console.warn('setUserData is deprecated. Use AuthService state instead.');
  }
}
