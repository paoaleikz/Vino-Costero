import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { email: 'usuario@vinocostero.com', password: '123456' }
  ];

  registerUser(email: string, password: string): string | null {
    const userExists = this.users.find(user => user.email === email);
    if (userExists) {
      return 'El correo ya está registrado.';
    }
    this.users.push({ email, password });
    return null;
  }

  loginUser(email: string, password: string): boolean {
    return this.users.some(user => user.email === email && user.password === password);
  }
}
