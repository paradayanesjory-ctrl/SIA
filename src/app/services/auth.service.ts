import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student, UserCredentials } from '../models/student.model';
import { MOCK_USERS } from '../data/mock-users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly usersStorageKey = 'registeredUsers';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  private currentStudentSubject = new BehaviorSubject<Student | null>(this.getStoredStudent());
  public currentStudent$: Observable<Student | null> = this.currentStudentSubject.asObservable();

  constructor() {}

  private hasToken(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  private getStoredStudent(): Student | null {
    const studentData = localStorage.getItem('currentStudent');
    const student = studentData ? JSON.parse(studentData) : null;
    
    // Fix for stale image path
    if (student && student.imageUrl === 'assets/images/yo.jpg') {
      student.imageUrl = 'img/yo.jpg';
      localStorage.setItem('currentStudent', JSON.stringify(student));
    }
    
    return student;
  }

  login(student: Student): void {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('currentStudent', JSON.stringify(student));
    this.isAuthenticatedSubject.next(true);
    this.currentStudentSubject.next(student);
  }

  logout(): void {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentStudent');
    this.isAuthenticatedSubject.next(false);
    this.currentStudentSubject.next(null);
  }

  isAuthenticated(): boolean {
    return this.hasToken();
  }

  getCurrentStudent(): Student | null {
    return this.currentStudentSubject.value;
  }

  getStudentCodigo(): string | null {
    const student = this.getCurrentStudent();
    return student ? student.codigo : null;
  }

  getUsers(): UserCredentials[] {
    const registeredUsers = localStorage.getItem(this.usersStorageKey);
    const parsedUsers: UserCredentials[] = registeredUsers ? JSON.parse(registeredUsers) : [];
    return [...MOCK_USERS, ...parsedUsers];
  }

  register(user: UserCredentials): boolean {
    const allUsers = this.getUsers();
    const exists = allUsers.some(
      current => current.codigo === user.codigo && current.documento === user.documento
    );

    if (exists) {
      return false;
    }

    const registeredUsers = localStorage.getItem(this.usersStorageKey);
    const parsedUsers: UserCredentials[] = registeredUsers ? JSON.parse(registeredUsers) : [];
    parsedUsers.push(user);
    localStorage.setItem(this.usersStorageKey, JSON.stringify(parsedUsers));

    return true;
  }
}
