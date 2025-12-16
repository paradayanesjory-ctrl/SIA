import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() isSidebarOpen = false;
  @Output() menuToggled = new EventEmitter<void>();

  onMenuClick(): void {
    this.menuToggled.emit();
  }
}
