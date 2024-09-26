import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root' // Esto hace que el servicio esté disponible globalmente
})
export class HistorialControlService {
  private historial: any[] = [
      {
        parcela: 'Parcela 1',
        tipoUva: 'Cabernet Sauvignon',
        nivelesNutrientes: 'Altos',
        phSuelo: 6.5,
        tratamientosAplicados: 'Fertilizante',
        fechaControl: new Date('2024-01-15'),
      },
      {
        parcela: 'Parcela 2',
        tipoUva: 'Merlot',
        nivelesNutrientes: 'Medios',
        phSuelo: 6.8,
        tratamientosAplicados: 'Herbicida',
        fechaControl: new Date('2024-01-16'),
      },
      {
        parcela: 'Parcela 3',
        tipoUva: 'Merlot',
        nivelesNutrientes: 'Medios',
        phSuelo: 6.8,
        tratamientosAplicados: 'Herbicida',
        fechaControl: new Date('2024-01-17'),
      }
  ];

  constructor() {}

  agregarRegistro(registro: any): void {
    this.historial.push(registro);
    console.log('Registro agregado:', registro);
  }

  obtenerHistorial(): any[] {
    return this.historial;
  }

  filtrarHistorial(tipoUva: string, parcela: string): any[] {
    return this.historial.filter(item => 
      (!tipoUva || item.tipoUva.toLowerCase() === tipoUva.toLowerCase()) &&
      (!parcela || item.parcela.toLowerCase() === parcela.toLowerCase())
    );
  }
}
