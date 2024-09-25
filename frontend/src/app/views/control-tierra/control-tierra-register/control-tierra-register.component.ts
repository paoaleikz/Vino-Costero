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
   tiposUva: string[] = ['Cabernet Sauvignon', 'Merlot', 'Pinot Noir', 'Chardonnay','Monastrell','Garnacha'];
 
   constructor() { }
 
   ngOnInit(): void {
   }

}
