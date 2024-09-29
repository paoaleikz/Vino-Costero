import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoUvaService {
  private uvas: any[] = [
    { id: 1, nombre: 'Cabernet Sauvignon', sabor: 'Intenso', uso: 'Vinos tintos' },
    { id: 2, nombre: 'Chardonnay', sabor: 'Frutal', uso: 'Vinos blancos' },
    { id: 3, nombre: 'Merlot', sabor: 'Suave', uso: 'Vinos tintos' },
    { id: 4, nombre: 'Sauvignon Blanc', sabor: 'Cítrico', uso: 'Vinos blancos' },
  ];

  obtenerUvas(): any[] {
    return this.uvas;
  }

  eliminarUva(id: number): void {
    this.uvas = this.uvas.filter(uva => uva.id !== id);
  }

  obtenerUvaPorId(id: number): any {
    return this.uvas.find(uva => uva.id === id);
  }

  agregarUva(nuevaUva: any): void {
    const nuevoId = this.uvas.length ? Math.max(...this.uvas.map(uva => uva.id)) + 1 : 1;
    this.uvas.push({ id: nuevoId, ...nuevaUva });
  }

  actualizarUva(actualizadaUva: any): void {
    const index = this.uvas.findIndex(uva => uva.id === actualizadaUva.id);
    if (index !== -1) {
      this.uvas[index] = actualizadaUva;
    }
  }
}