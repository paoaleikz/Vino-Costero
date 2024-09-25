import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-control-tierra-register',
  styleUrls: ['./control-tierra-register.component.scss'],
  templateUrl: './control-tierra-register.component.html',
})
export class ControlTierraRegisterComponent implements OnInit {

// Datos simulados
parcelas: string[] = ['Parcela 1', 'Parcela 2', 'Parcela 3', 'Parcela 4'];
tiposUva: string[] = ['Cabernet Sauvignon', 'Merlot', 'Pinot Noir', 'Chardonnay', 'Monastrell', 'Garnacha'];

// Form data
parcelaSeleccionada: string = '';
tipoUvaSeleccionado: string = '';
nivelesNutrientes: string = '';
phSuelo: number | null = null;
tratamientosAplicados: string = '';
fechaControl: Date | null = null;

// Historial de controles simulado
historialControles: any[] = [];

constructor() { }

ngOnInit(): void {}

// Función para registrar el control
registrarControl(): void {
  const nuevoRegistro = {
    parcela: this.parcelaSeleccionada,
    tipoUva: this.tipoUvaSeleccionado,
    nutrientes: this.nivelesNutrientes,
    ph: this.phSuelo,
    tratamientos: this.tratamientosAplicados,
    fecha: this.fechaControl
  };

  // Agregar nuevo registro al historial
  this.historialControles.push(nuevoRegistro);

  // Limpiar los campos del formulario después de registrar
  this.limpiarFormulario();

  alert('Registro guardado exitosamente.');
}

// Función para limpiar el formulario
limpiarFormulario(): void {
  this.parcelaSeleccionada = '';
  this.tipoUvaSeleccionado = '';
  this.nivelesNutrientes = '';
  this.phSuelo = null;
  this.tratamientosAplicados = '';
  this.fechaControl = null;
}
}