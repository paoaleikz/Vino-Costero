import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcelaService {

  private parcelas: any[] = [
   { nombre: 'Parcela 1', 
    tamano: '10', 
    ubicacion: 'Valle de Aconcagua', 
    tipoSuelo: 'Arenoso',
   }

  ]; // Arreglo para almacenar las parcelas
  private parcelasSubject: BehaviorSubject<any[]> = new BehaviorSubject(this.parcelas);

  constructor() {}

  // Método para agregar una nueva parcela
  agregarParcela(parcela: any): void {
    this.parcelas.push(parcela);
    this.parcelasSubject.next(this.parcelas); // Actualiza el observable
    console.log('Parcela agregada:', parcela);
  }

  // Método para obtener todas las parcelas
  obtenerParcelas(): Observable<any[]> {
    return this.parcelasSubject.asObservable(); // Devuelve un observable de parcelas
  }

  // Método para eliminar una parcela por índice
  eliminarParcela(index: number): void {
    if (index >= 0 && index < this.parcelas.length) {
      this.parcelas.splice(index, 1);
      this.parcelasSubject.next(this.parcelas); // Actualiza el observable
      console.log('Parcela eliminada en el índice:', index);
    }
  }
}
