import { Injectable } from '@angular/core';

// Definimos la interfaz para el tipo de usuario
interface User {
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Usuarios predefinidos con sus roles
  private users: User[] = [
    { email: 'Paola.administrador@gmail.com', password: '123456', role: 'admin' },
    { email: 'Cristina.supervisor@gmail.com', password: '123456', role: 'supervisor' },
    { email: 'Usuario.operario12@gmail.com', password: '123456', role: 'operario' }
  ];

  constructor() {
    // Cargar usuarios almacenados en localStorage si existen
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  /**
   * Registra un nuevo usuario y guarda los datos en localStorage
   * @param email - El correo electrónico del usuario
   * @param password - La contraseña del usuario
   * @param role - El rol del usuario
   * @returns Un mensaje de error si el correo ya está registrado, o null si el registro es exitoso
   */
  registerUser(email: string, password: string, role: string): string | null {
    // Verifica si el correo ya está registrado
    const userExists = this.users.find((user: User) => user.email === email);
    if (userExists) {
      return 'El correo ya está registrado.'; // Mensaje de error si el usuario ya existe
    }

    // Agregar el nuevo usuario a la lista
    this.users.push({ email, password, role });

    // Guardar los usuarios en localStorage
    localStorage.setItem('users', JSON.stringify(this.users));

    return null; // Registro exitoso, retorna null
  }

  /**
   * Verifica las credenciales de un usuario para iniciar sesión
   * @param email - El correo electrónico del usuario
   * @param password - La contraseña del usuario
   * @returns Un objeto con success (true/false) y el rol del usuario si la autenticación es exitosa
   */
  loginUser(email: string, password: string): { success: boolean, role: string | null } {
    // Recargar la lista de usuarios de localStorage
    const storedUsers = localStorage.getItem('users');
    const users: User[] = storedUsers ? JSON.parse(storedUsers) : this.users;

    // Busca si existe el usuario con el correo y la contraseña proporcionados
    const user = users.find((user: User) => user.email === email && user.password === password);

    if (user) {
      // Si el usuario existe, retorna success: true y el rol del usuario
      return { success: true, role: user.role };
    }

    // Si no se encuentra el usuario o la contraseña es incorrecta
    return { success: false, role: null };
  }

  /**
   * Obtiene todos los usuarios registrados (opcional para propósitos de verificación)
   */
  getAllUsers() {
    return this.users;
  }
}
