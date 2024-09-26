import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistorialControlService } from '../historial-control.service' // Ajusta la ruta según tu estructura de carpetas

@Component({
  selector: 'app-control-tierra-list',
  styleUrls: ['./control-tierra-list.component.scss'],
  templateUrl: './control-tierra-list.component.html',
})
export class ControlTierraListComponent implements OnInit {
  historial: any[] = [];
  displayedColumns: string[] = ['parcela', 'tipoUva', 'nivelesNutrientes', 'phSuelo', 'tratamientosAplicados', 'fechaControl'];
  filteredHistorial: any[] = [];
  parcelaFilter: string = '';
  tipoUvaFilter: string = '';

  constructor(private router: Router, private historialControlService: HistorialControlService) {}

  ngOnInit(): void {
    this.historial = this.historialControlService.obtenerHistorial();
    this.filteredHistorial = this.historial; // Inicialmente muestra todo el historial
  }

  aplicarFiltro(): void {
    this.filteredHistorial = this.historial.filter(item => {
      return (this.parcelaFilter ? item.parcela.includes(this.parcelaFilter) : true) &&
             (this.tipoUvaFilter ? item.tipoUva.includes(this.tipoUvaFilter) : true);
    });
  }
  handleAddClick(): void {
    this.router.navigate(['/tierra/register']);
  }
}
