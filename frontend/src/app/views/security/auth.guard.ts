import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Ajusta la ruta según tu estructura

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    // Obtén el rol esperado desde los datos de la ruta
    const expectedRole = next.data['expectedRole'];

    // Verifica si el usuario está logueado
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false; // No permite el acceso si no está logueado
    }

    // Verifica si el rol del usuario coincide con el rol esperado
    const userRole = this.authService.getUserRole(); // Cambia a getUserRole()

    if (expectedRole && userRole !== expectedRole) {
      this.router.navigate(['/home']); // Redirige si no tiene el rol necesario
      return false;
    }

    return true; // Permite el acceso si está logueado y tiene el rol correcto
  }
}
