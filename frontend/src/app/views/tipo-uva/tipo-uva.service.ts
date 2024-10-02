import { Injectable } from '@angular/core';
import { Route } from '@angular/router';

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

  constructor() {}

   // Método para agregar una nueva uva
   agregarUva(uva: any): void {
    this.uvas.push({ ...uva, id: this.uvas.length + 1 }); // Asignar un ID único
  }

  // Método para obtener una uva por ID
  obtenerUvaPorId(id: number): any {
    return this.uvas.find(uva => uva.id === id) || null; // Devuelve la uva o null si no se encuentra
  }

  // Método para actualizar una uva
  actualizarUva(id: number, uvaData: any): void {
    const index = this.uvas.findIndex(uva => uva.id === id);
    if (index !== -1) {
      this.uvas[index] = { ...this.uvas[index], ...uvaData }; // Actualiza la uva
    }
  }

  // Método para eliminar una uva
  eliminarUva(id: number): void {
    this.uvas = this.uvas.filter(uva => uva.id !== id); // Elimina la uva por ID
  }

  // Método para obtener todas las uvas
  obtenerUvas(): any[] {
    return this.uvas; // Devuelve todas las uvas
  }
}