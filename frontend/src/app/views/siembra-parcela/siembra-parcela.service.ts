import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Siembra } from './Models/siembra.model'; // Asegúrate de que la ruta es correcta

@Injectable({
  providedIn: 'root',
})
export class SiembraParcelaService {
  private siembras: Siembra[] = [
    { id: 1, parcela: 'Parcela 1', variedadUva: 'Cabernet Sauvignon', fechaSiembra: '2023-01-15', cantidadSembrada: 100, estadoSiembra: 'En crecimiento', plagas: false, comentarios: '' },
    { id: 2, parcela: 'Parcela 2', variedadUva: 'Merlot', fechaSiembra: '2023-03-20', cantidadSembrada: 150, estadoSiembra: 'Plagas', plagas: true, comentarios: 'Plagas detectadas en las hojas' },
    // Agrega más siembras según sea necesario
  ];

  constructor() {}

  // Método para obtener todas las siembras
  obtenerSiembras(): Observable<Siembra[]> {
    return of(this.siembras);
  }

  // Método para obtener una siembra por ID
    obtenerSiembra(id: number): Observable<Siembra | undefined> {
    const siembra = this.siembras.find(s => s.id === id);
    return of(siembra); // Devuelve el objeto de siembra o undefined
  }

  // Método para agregar una nueva siembra
  agregarSiembra(siembra: Siembra): void {
    siembra.id = this.obtenerSiguienteId();
    this.siembras.push(siembra);
  }

  // Método para actualizar una siembra existente
  actualizarSiembra(siembraActualizada: Siembra): void {
    const index = this.siembras.findIndex(s => s.id === siembraActualizada.id);
    if (index !== -1) {
      this.siembras[index] = siembraActualizada;
    }
  }

  // Método para eliminar una siembra
  eliminarSiembra(id: number): void {
    this.siembras = this.siembras.filter(s => s.id !== id);
  }

  // Método para obtener el siguiente ID de siembra
  private obtenerSiguienteId(): number {
    return this.siembras.length ? Math.max(...this.siembras.map(s => s.id)) + 1 : 1;
  }
}
