import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      // Obtener el rol del usuario tras el inicio de sesión
      const userRole = this.authService.getUserRole();
      // Redirigir según el rol (ajusta la lógica según tus necesidades)
      if (userRole === 'admin') {
        this.router.navigate(['/admin-dashboard']); // Ajusta la ruta
      } else {
        this.router.navigate(['/home']);
      }
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}

