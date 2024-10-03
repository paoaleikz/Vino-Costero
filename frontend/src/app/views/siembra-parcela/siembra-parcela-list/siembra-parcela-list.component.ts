import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiembraParcelaService } from '../siembra-parcela.service'; // Asegúrate de que la ruta sea correcta
import { Siembra } from '../Models/siembra.model'; // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-siembra-parcela-list',
  templateUrl: './siembra-parcela-list.component.html',
  styleUrls: ['./siembra-parcela-list.component.scss'],
})
export class SiembraParcelaListComponent implements OnInit {
  siembras: Siembra[] = []; // Arreglo para almacenar las siembras

  constructor(
    private siembraParcelaService: SiembraParcelaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerSiembras(); // Llama a obtener siembras al inicializar el componente
  }

  obtenerSiembras(): void {
    this.siembraParcelaService.obtenerSiembras().subscribe((siembras) => {
      this.siembras = siembras; // Asigna las siembras obtenidas al arreglo
    });
  }

   // Aquí defines la función handleEditClick
   handleEditClick(id: number): void {
    this.router.navigate(['/siembraParcela', id]); // Cambia la ruta según tu configuración
  }

  // Método para eliminar una siembra
  eliminarSiembra(id: number): void {
    this.siembraParcelaService.eliminarSiembra(id); // Llama al servicio para eliminar la siembra
    this.obtenerSiembras(); // Vuelve a obtener la lista de siembras después de eliminar
  }

  handleAddClick(): void {
    this.router.navigate(['/siembraParcela/register']); // Cambia la ruta según tu configuración
  }  
}
