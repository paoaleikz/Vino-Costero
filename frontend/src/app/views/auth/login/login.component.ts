import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  authError: string | null = null;

  // Datos estáticos de usuarios con sus roles
  private staticUsers = [
    {
      email: 'Paola.administrador@gmail.com',
      password: '123456',
      role: 'admin' // Administrador
    },
    {
      email: 'Cristina.supervisor@gmail.com',
      password: '123456',
      role: 'supervisor' // Supervisor
    },
    {
      email: 'Usuario.operario12@gmail.com',
      password: '123456',
      role: 'operario' // Operario
    },
  ];

  hide = true; // Para mostrar/ocultar la contraseña

  constructor(private fb: FormBuilder, private router: Router) {
    // Creación del formulario de login
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Función para manejar el evento de envío del formulario
  onSubmit(): void {
    const { email, password } = this.loginForm.value;

    // Verifica si las credenciales coinciden con algún usuario en el array estático
    const foundUser = this.staticUsers.find(user => user.email === email && user.password === password);

    if (foundUser) {
      // Guardamos el rol en localStorage
      localStorage.setItem('userRole', foundUser.role);
      
      // Redirigir según el rol del usuario
      switch (foundUser.role) {
        case 'admin':
          this.router.navigate(['/parcela']); // Redirigir al panel de administrador
          break;
        case 'supervisor':
          this.router.navigate(['/siembraParcela']); // Redirigir al panel de supervisor
          break;
        case 'operario':
          this.router.navigate(['/produccion']); // Redirigir al panel de operario
          break;
        default:
          this.authError = 'Rol no reconocido.';
      }
    } else {
      // Mostrar mensaje de error si las credenciales no son válidas
      this.authError = 'Credenciales incorrectas. Inténtalo de nuevo.';
    }
  }

  // Función para navegar al registro
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
