import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiembraParcelaService {
  private siembras: any[] = [];

  constructor() {}

  obtenerSiembras(): any[] {
    // Devuelve las siembras existentes (puedes reemplazar con lógica de API en el futuro)
    return this.siembras;
  }

  agregarSiembra(siembra: any): void {
    // Añade la siembra al array
    this.siembras.push(siembra);
  }
}
