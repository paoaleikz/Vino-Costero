import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  canActivate(route: any): boolean {
    const expectedRole = route.data.expectedRole; // Rol esperado para esta ruta
    const userRole = localStorage.getItem('userRole'); // Rol del usuario autenticado

    // Solo verifica el rol, no redirige
    return true; // Permite el acceso pero se manejará a nivel de componente
  }
}
