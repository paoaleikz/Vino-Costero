export interface Siembra {
  id: number; // ID único para la siembra
  parcela: string; // Identificador de la parcela
  variedadUva: string; // Variedad de uva
  fechaSiembra: string; // Fecha de siembra en formato de cadena
  cantidadSembrada: number; // Cantidad sembrada
  estadoSiembra: string; // Estado de la siembra
  plagas: boolean; // Indica si hay plagas (true o false)
  comentarios: string; // Comentarios adicionales
}