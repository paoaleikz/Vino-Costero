import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { USERS } from '../../mocksData/mock-users'; // Ajusta la ruta según tu estructura

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any; // Especifica el tipo según tu modelo de usuario

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    const user = USERS.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  // Método para obtener el rol del usuario actual
  getUserRole(): string | null {
    return this.currentUser ? this.currentUser.role : null; // Asegúrate de que currentUser tenga una propiedad 'role'
  }
}
