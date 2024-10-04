export class Produccion {
  id: number;
  parcela: string;
  tipoUva: string;
  cantidadEsperada: number;
  estado: string;

  constructor(id: number, parcela: string, tipoUva: string, cantidadEsperada: number, estado: string) {
    this.id = id;
    this.parcela = parcela;
    this.tipoUva = tipoUva;
    this.cantidadEsperada = cantidadEsperada;
    this.estado=estado;
  }
}
