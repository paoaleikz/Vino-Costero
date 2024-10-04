import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduccionService } from '../produccion.service';
import { Produccion } from '../Models/produccion.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-produccion-register',
  templateUrl: './produccion-register.component.html',
  styleUrls: ['./produccion-register.component.scss']
})
export class ProduccionRegisterComponent implements OnInit {
  nuevaProduccion: Produccion = {
    id: 0,
    parcela: '',
    tipoUva: '',
    cantidadEsperada: 0,
    estado: ''
  };

  parcelas = [
    'Parcela 1',
    'Parcela 2',
    'Parcela 3',
    'Parcela 4',
    'Parcela 5',
    'Parcela 6',
    'Parcela 7',
    'Parcela 8',
    'Parcela 9',
    'Parcela 10'
  ];

  tiposUva = [
    'Cabernet Sauvignon',
    'Merlot',
    'Syrah',
    'Malbec',
    'Chardonnay',
    'Sauvignon Blanc',
    'Pinot Noir',
    'Tempranillo',
    'Grenache',
    'Zinfandel'
  ];

  estados = [
    'En proceso',
    'Cosechado',
    'Embotellado',
    'En fermentación',
    'En barrica',
    'Listo para venta',
    'En reposo',
    'Mezclado',
    'Etiquetado'
  ];
  isEditMode = false;
  isReadOnly = false; // Para controlar la habilitación de los campos

  constructor(
    private produccionService: ProduccionService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // Verificar si hay modo de edición (puedes cargar el ID desde el estado)
    const id = this.router.getCurrentNavigation()?.extras.state?.['id'];
    if (id) {
      this.isEditMode = true;
      this.isReadOnly = true; // Deshabilitar campos en modo de edición
      this.cargarProduccion(+id);
    }
  }

  cargarProduccion(id: number): void {
    const produccion = this.produccionService.getProduccion(id);
    if (produccion) {
      this.nuevaProduccion = { ...produccion };
    }
  }

  registrarParcela(): void {
    if (this.isEditMode) {
      // Solo actualiza el estado
      const updatedProduccion = { ...this.nuevaProduccion };
      this.produccionService.updateProduccion(updatedProduccion.id, updatedProduccion);
      this.snackBar.open('Producción actualizada con éxito');
    } else {
      // Registro de nueva producción
      if (this.nuevaProduccion.parcela && this.nuevaProduccion.tipoUva && this.nuevaProduccion.cantidadEsperada && this.nuevaProduccion.estado) {
        this.produccionService.addProduccion(this.nuevaProduccion);
        this.snackBar.open('Producción registrada con éxito', '', {
          duration: 3000,
        });
      } else {
        this.snackBar.open('Por favor, complete todos los campos obligatorios', '', {
          duration: 3000,
        });
      }
    }
    this.router.navigate(['/produccion']);
}


  limpiarFormulario(): void {
    this.nuevaProduccion = { id: 0, parcela: '', tipoUva: '', cantidadEsperada: 0, estado: '' };
    this.router.navigate(['/produccion']);
  }

  mostrarMensaje(mensaje: string): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000,
    });
  }
}
