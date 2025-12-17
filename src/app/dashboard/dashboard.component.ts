import { Component, type OnInit, type OnDestroy } from "@angular/core"
import { SidebarComponent } from "../sidebar/sidebar.component"
import { NavbarComponent } from "../navbar/navbar.component"
import { CommonModule } from "@angular/common"
import type { Subscription } from "rxjs"
import { AuthService } from "../services/auth.service"
import type { Student } from "../models/student.model"

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, CommonModule],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
})
export class DashboardComponent implements OnInit, OnDestroy {
  isSidebarOpen = false
  student: Student | null = null
  private authSubscription: Subscription | null = null

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.currentStudent$.subscribe((student) => {
      this.student = student
    })
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe()
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen
  }

  closeSidebar() {
    this.isSidebarOpen = false
  }
}

