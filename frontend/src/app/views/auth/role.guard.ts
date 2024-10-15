import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: any): boolean {
    const expectedRoles = route.data.expectedRoles; // Array de roles esperados
    const userRole = localStorage.getItem('userRole'); // Rol del usuario autenticado

    // Verifica si el rol del usuario está en los roles esperados
    if (expectedRoles.includes(userRole)) {
      return true; // Acceso permitido
    }

    // Opcional: Manejar el acceso denegado si es necesario
    return false; // Acceso denegado
  }
}
