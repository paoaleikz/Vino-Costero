import { Component, OnInit } from '@angular/core';
import { SiembraParcelaService } from '../siembra-parcela.service';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-siembra-parcela-list',
  templateUrl: './siembra-parcela-list.component.html',
  styleUrls: ['./siembra-parcela-list.component.scss']
})
export class SiembraParcelaListComponent implements OnInit {
  siembras: any[] = []; // Aquí almacenaremos las siembras obtenidas del servicio

  constructor(private siembraService: SiembraParcelaService, private router: Router) {} // Cambiar Route por Router

  ngOnInit(): void {
    // Obtenemos las siembras al iniciar el componente
    this.obtenerSiembras();
  }

  obtenerSiembras(): void {
    // Llamamos al método del servicio para obtener las siembras
    this.siembras = this.siembraService.obtenerSiembras();
  }

  eliminarSiembra(index: number): void {
    // Removemos la siembra del array
    this.siembras.splice(index, 1); // Aquí puedes agregar lógica de eliminación real si tienes backend
  }

  handleAddClick(): void {
    this.router.navigate(['/parcelaParcela/register']);
  }
}
