import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SiembraParcelaService {
  private siembras: any[]=[];
    
  constructor() {
    this.siembras=[
    { id: 1, parcela: 'Parcela 1', variedadUva: 'Cabernet Sauvignon', fechaSiembra: '2023-01-15', cantidadSembrada: 100, estadoSiembra: 'En crecimiento', plagas: false, comentarios: '' },
    { id: 2, parcela: 'Parcela 2', variedadUva: 'Merlot', fechaSiembra: '2023-03-20', cantidadSembrada: 150, estadoSiembra: 'Plagas', plagas: true, comentarios: 'Plagas detectadas en las hojas' },
    // Agrega más siembras según sea necesario
  ];
}

  // Método para obtener todas las siembras
  obtenerSiembras(): Observable<any[]> {
    return of(this.siembras);
  }

  // Método para obtener una siembra por ID
    obtenerSiembra(id: number): Observable<any> {
      const siembra = this.siembras.find(p => p.id === id);
    return of(siembra); // Devuelve el objeto de siembra o undefined
  }

  // Método para agregar una nueva siembra
  agregarSiembra(siembra: any): void {
    // Asigna un nuevo ID a la parcela (simplemente se incrementa el último ID)
    siembra.id = this.siembras.length ? Math.max(...this.siembras.map(p => p.id)) + 1 : 1;
    this.siembras.push(siembra);
  }

  // Método para actualizar una siembra existente
  actualizarSiembra(updatedsiembra: any): void {
    const index = this.siembras.findIndex(p => p.id ===  updatedsiembra.id);
    if (index !== -1) {
      this.siembras[index] = updatedsiembra;
    }
  }

  // Método para eliminar una siembra
  eliminarSiembra(id: number): void {
    this.siembras = this.siembras.filter(p => p.id !== id);
  }
}
