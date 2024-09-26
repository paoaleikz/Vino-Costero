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
  tiposUva: string[] = ['Cabernet Sauvignon', 'Merlot', 'Chardonnay']; // Define tus tipos de uva
  parcelas: string[] = ['Parcela 1', 'Parcela 2', 'Parcela 3']; // Define tus parcelas

  constructor(private router: Router, private historialControlService: HistorialControlService) {}

  ngOnInit(): void {
    // Cargar el historial desde el servicio de forma asíncrona
    this.historial=this.historialControlService.obtenerHistorial();
    this.filteredHistorial = this.historial; // Inicialmente mostrar todo el historial
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
