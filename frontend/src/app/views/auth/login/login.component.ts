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

  // Usuario estático simulado
  private staticUser = {
    email: 'usuario@vinocostero.com',
    password: '123456'
  };

  hide = true;

  constructor(private fb: FormBuilder, private router: Router) {
    // Creación del formulario de login
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Función para manejar el evento de envío del formulario
  onSubmit(): void {
    const { email, password } = this.loginForm.value;

    // Verifica si las credenciales coinciden con los datos estáticos
    if (email === this.staticUser.email && password === this.staticUser.password) {
      // Redirigir a la página principal (dashboard, por ejemplo)
      this.router.navigate(['/tierra']);
    } else {
      // Mostrar error si las credenciales no son válidas
      this.authError = 'Credenciales incorrectas. Inténtalo de nuevo.';
    }
  }

  // Función para navegar al registro (solo si tienes esa funcionalidad)
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
