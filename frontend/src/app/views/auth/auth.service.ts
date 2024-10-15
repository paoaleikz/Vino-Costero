import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Usuarios con roles
  private users = [
    { email: 'Paola.administrador@gmail.com', password: '123456', role: 'admin' }, // Administrador
    { email: 'Cristina.supervisor@gmail.com', password: '123456', role: 'supervisor' }, // Supervisor
    { email: 'Usuario.operario12@gmail.com', password: '123456', role: 'operario' } // Operario
  ];

  constructor() {}

  // Registro de usuarios (puedes adaptar si planeas hacer el registro con roles)
  registerUser(email: string, password: string, role: string): string | null {
    const userExists = this.users.find(user => user.email === email);
    if (userExists) {
      return 'El correo ya está registrado.'; // Mensaje de error si el usuario ya existe
    }
    this.users.push({ email, password, role }); // Agrega un nuevo usuario
    return null; // Retorna null si el registro es exitoso
  }

  // Autenticación con devolución del rol
  loginUser(email: string, password: string): { success: boolean, role: string | null } {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      return { success: true, role: user.role }; // Devuelve el rol si el usuario es válido
    }
    return { success: false, role: null }; // Devuelve null si el usuario no es válido
  }
}

