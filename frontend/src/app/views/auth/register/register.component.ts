import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Asegúrate de que el servicio esté correctamente importado

@Component({
  selector: 'app-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm: FormGroup;
  authError: string | null = null;
  roles: string[] = ['admin', 'supervisor', 'operario']; // Opciones de roles para seleccionar

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService // Inyectamos el AuthService para manejar el registro
  ) {
    // Inicializamos el formulario
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      role: ['', Validators.required] // Campo para seleccionar el rol
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;

    const { email, password, confirmPassword, role } = this.registerForm.value;

    if (password !== confirmPassword) {
      this.authError = 'Las contraseñas no coinciden.';
      return;
    }

    // Llama al servicio para registrar el usuario
    const registrationError = this.authService.registerUser(email, password, role);
    if (registrationError) {
      this.authError = registrationError; // Si hay un error, lo muestra
    } else {
      this.authError = null; // Resetea el error si el registro es exitoso
      alert('Usuario registrado exitosamente'); // Mostramos un mensaje de éxito
      this.router.navigate(['/login']); // Redirige al login después del registro
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
