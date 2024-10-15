import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
 
})
export class RegisterComponent {
  registerForm: FormGroup;
  authError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    const { email, password, confirmPassword } = this.registerForm.value;

    if (password !== confirmPassword) {
      this.authError = 'Las contraseñas no coinciden.';
      return;
    }

    this.authError = null; // Resetea el error si todo está bien
    // Aquí puedes manejar el registro con datos estáticos o lo que necesites
    this.router.navigate(['/login']); // Redirige al login después del registro
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
