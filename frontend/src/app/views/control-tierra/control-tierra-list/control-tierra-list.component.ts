import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistorialControlService } from '../historial-control.service';

@Component({
  selector: 'app-control-tierra-list',
  styleUrls: ['./control-tierra-list.component.scss'],
  templateUrl: './control-tierra-list.component.html',
})
export class ControlTierraListComponent implements OnInit {
  dataSource: any[] = [];  
  displayedColumns: string[] = ['parcela', 'tipoUva', 'nivelesNutrientes', 'phSuelo', 'tratamientosAplicados', 'fechaControl'];

  constructor(private router: Router, private _service: HistorialControlService) {}

  ngOnInit(): void {
    this.dataSource = this._service.obtenerHistorial();
  }

  handleAddClick(): void {
    this.router.navigate(['/tierra/register']);
  }
}

