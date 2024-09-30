import { Component, OnInit } from '@angular/core';
import { TipoUvaService } from '../tipo-uva.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-uva-list',
  templateUrl: './tipo-uva-list.component.html',
  styleUrls: ['./tipo-uva-list.component.scss']
})
export class TipoUvaListComponent implements OnInit {
  uvas: any[] = [];
  uvasFiltradas: any[] = []; // Lista filtrada de uvas
  displayedColumns: string[] = ['nombre', 'sabor', 'uso', 'acciones'];
  filtroNombre: string = ''; // Almacena el filtro por nombre
  filtroUso: string = ''; // Almacena el filtro por uso

  constructor(private tipoUvaService: TipoUvaService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.uvas = this.tipoUvaService.obtenerUvas(); // Obtener las uvas desde el servicio
    this.uvasFiltradas = [...this.uvas]; // Inicialmente, todas las uvas son visibles
  }

  eliminarUva(id: number): void {
    this.tipoUvaService.eliminarUva(id);
    this.uvas = this.tipoUvaService.obtenerUvas(); // Actualizar la lista de uvas
    this.uvasFiltradas = [...this.uvas]; // Actualizar la lista filtrada
    this.snackBar.open('Uva eliminada', '', { duration: 3000 });
  }

  editarUva(id: number): void {
    this.router.navigate(['/tipoUvas/register'], { queryParams: { id } });
  }
  handleAddClick(): void {
    this.router.navigate(['/tipoUvas/register']);
  }

  // Aplica filtro por nombre
  aplicarFiltroPorNombre(event: Event): void {
    this.filtroNombre = (event.target as HTMLInputElement).value.toLowerCase().trim();
    this.aplicarFiltros(); // Reaplicamos los filtros combinados
  }

  // Aplica filtro por uso
  aplicarFiltroPorUso(event: Event): void {
    this.filtroUso = (event.target as HTMLInputElement).value.toLowerCase().trim();
    this.aplicarFiltros(); // Reaplicamos los filtros combinados
  }

  // Método que aplica ambos filtros de manera combinada
  aplicarFiltros(): void {
    this.uvasFiltradas = this.uvas.filter(uva => 
      uva.nombre.toLowerCase().includes(this.filtroNombre) &&
      uva.uso.toLowerCase().includes(this.filtroUso)
    );
  }
}
