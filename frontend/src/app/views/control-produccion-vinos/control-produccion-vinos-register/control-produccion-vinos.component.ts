import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-control-produccion-vinos',
  styleUrls: ['./control-produccion-vinos.component.scss'],
  templateUrl: './control-produccion-vinos.component.html',
})
export class ControlProduccionVinosRegisterComponent implements OnInit {
 
  selectedParcela: string = '';
  selectedTipoUva: string = '';
  cantidadEsperada: number = 0;

  parcelas: string[] = ['Parcela A', 'Parcela B', 'Parcela C']; // Datos de ejemplo
  tiposUva: string[] = ['Cabernet Sauvignon', 'Chardonnay', 'Merlot']; // Datos de ejemplo
 
  constructor(private _router: Router,) { }

  ngOnInit(): void {}

 

  registerProduccion() {
    // Aquí puedes implementar la lógica para registrar la producción
    alert(`Producción registrada: Parcela: ${this.selectedParcela}, Tipo de Uva: ${this.selectedTipoUva}, Cantidad: ${this.cantidadEsperada}`);
  }

  onCancel() {
    // Lógica para cancelar el registro, por ejemplo, limpiar los campos
    this.selectedParcela = '';
    this.selectedTipoUva = '';
    this.cantidadEsperada = 0;
  }

  onBack(): void {
    this._router.navigate(['/control-produccion-vinos']);
  }

}
