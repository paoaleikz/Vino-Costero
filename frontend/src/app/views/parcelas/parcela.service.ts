import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParcelaService {
  private parcelas: any[] = []; // Asegúrate de que esto contenga tus parcelas

  constructor() {
    // Inicializa algunas parcelas de ejemplo si es necesario
    this.parcelas = [
      { id: 1, nombre: 'Parcela 1', tamano: 10, ubicacion: 'Zona A', tipoSuelo: 'Arcilloso' },
      { id: 2, nombre: 'Parcela 2', tamano: 5, ubicacion: 'Zona B', tipoSuelo: 'Arenoso' },
      // Agrega más parcelas si es necesario
    ];
  }

  // Método para obtener todas las parcelas
  obtenerParcelas(): Observable<any[]> {
    return of(this.parcelas);
  }

  // Método para obtener una parcela por ID
  obtenerParcela(id: number): Observable<any> {
    const parcela = this.parcelas.find(p => p.id === id);
    return of(parcela); // Devuelve un Observable con la parcela encontrada
  }

  // Método para agregar una nueva parcela
  agregarParcela(parcela: any): void {
    // Asigna un nuevo ID a la parcela (simplemente se incrementa el último ID)
    parcela.id = this.parcelas.length ? Math.max(...this.parcelas.map(p => p.id)) + 1 : 1;
    this.parcelas.push(parcela);
  }

  // Método para actualizar una parcela
  actualizarParcela(updatedParcela: any): void {
    const index = this.parcelas.findIndex(p => p.id === updatedParcela.id);
    if (index !== -1) {
      this.parcelas[index] = updatedParcela;
    }
  }

  // Método para eliminar una parcela
  eliminarParcela(id: number): void {
    this.parcelas = this.parcelas.filter(p => p.id !== id);
  }
}
