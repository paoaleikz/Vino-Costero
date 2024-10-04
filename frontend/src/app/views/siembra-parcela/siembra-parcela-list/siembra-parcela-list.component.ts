import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiembraParcelaService } from '../siembra-parcela.service'; // Asegúrate de que la ruta sea correcta
import { MatSnackBar } from '@angular/material/snack-bar'; // Agregar para usar MatSnackBar

@Component({
  selector: 'app-siembra-parcela-list',
  templateUrl: './siembra-parcela-list.component.html',
  styleUrls: ['./siembra-parcela-list.component.scss'],
})
export class SiembraParcelaListComponent implements OnInit {
  siembras: any[] = []; // Arreglo para almacenar las siembras
  displayedColumns: string[] = ['parcela', 'variedadUva', 'fechaSiembra', 'cantidadSembrada', 'estadoSiembra','plagas','comentarios', 'acciones'];

  constructor(
    private siembraParcelaService: SiembraParcelaService,
    private router: Router,
    private snackBar: MatSnackBar // Inyección de MatSnackBar
  ) {}

  ngOnInit(): void {
    this.siembraParcelaService.obtenerSiembras().subscribe(siembras => {
      this.siembras = siembras;
    });
  }
    eliminarSiembra(id: number): void {
      this.siembraParcelaService.eliminarSiembra(id); // Llama al servicio para eliminar la siembra
      this.snackBar.open('Siembra eliminada con éxito', '', { duration: 3000 }); // Notificación de eliminación
       // Actualiza la lista después de eliminar
    this.siembraParcelaService.obtenerSiembras().subscribe(siembras => {
      this.siembras = siembras;
    });
  }
  handleEditClick(id: number): void {
    this.router.navigate(['/siembraParcela/register'], { queryParams: { id }}); // Cambia la ruta según tu configuración
  }

 

  handleAddClick(): void {
    this.router.navigate(['/siembraParcela/register']); // Cambia la ruta según tu configuración
  }  
}
