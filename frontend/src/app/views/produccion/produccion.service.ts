import { Injectable } from '@angular/core';
import { Produccion } from './Models/produccion.model';

@Injectable({
    providedIn: 'root'
})
export class ProduccionService {
    // Lista de producciones inicial
    private producciones: Produccion[] = [
      { id: 1, parcela: 'Parcela 1', tipoUva: 'Cabernet Sauvignon', cantidadEsperada: 500, estado: 'En proceso' },
      { id: 2, parcela: 'Parcela 2', tipoUva: 'Merlot', cantidadEsperada: 300, estado: 'Cosechado' },
      { id: 3, parcela: 'Parcela 3', tipoUva: 'Syrah', cantidadEsperada: 400, estado: 'En fermentación' },
      { id: 4, parcela: 'Parcela 4', tipoUva: 'Malbec', cantidadEsperada: 350, estado: 'En barrica' },
   
  ];
  

    // Obtiene una producción por su ID
    getProduccion(id: number): Produccion | undefined {
        return this.producciones.find(p => p.id === id);
    }

    // Agrega una nueva producción
    addProduccion(produccion: Produccion): void {
        const newId = this.producciones.length ? Math.max(...this.producciones.map(p => p.id)) + 1 : 1;
        this.producciones.push({ ...produccion, id: newId });
    }

    // Actualiza una producción existente
    updateProduccion(id: number, produccion: Produccion): void {
        const index = this.producciones.findIndex(p => p.id === id);
        if (index !== -1) {
            this.producciones[index] = { ...produccion, id }; // Actualiza la producción
        }
    }

    // Elimina una producción por su ID
    deleteProduccion(id: number): void {
        this.producciones = this.producciones.filter(p => p.id !== id);
    }

    // Obtiene todas las producciones
    getProducciones(): Produccion[] {
        return this.producciones;
    }
}
