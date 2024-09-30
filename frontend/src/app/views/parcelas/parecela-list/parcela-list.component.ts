import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParcelaService } from '../parcela.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-parcela-list',
  templateUrl: './parcela-list.component.html',
  styleUrls: ['./parcela-list.component.scss']
})
export class ParcelaListComponent implements OnInit {
  parcelas: any[] = [];
  displayedColumns: string[] = ['nombre', 'tamano', 'ubicacion', 'tipoSuelo', 'acciones'];

  constructor(private parcelaService: ParcelaService, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.parcelaService.obtenerParcelas().subscribe(parcelas => {
      this.parcelas = parcelas;
    });
  }

  eliminarParcela(id: number): void {
    this.parcelaService.eliminarParcela(id);
    this.snackBar.open('Parcela eliminada con éxito', '', { duration: 3000 });
    // Actualiza la lista después de eliminar
    this.parcelaService.obtenerParcelas().subscribe(parcelas => {
      this.parcelas = parcelas;
    });
  }

  handleEditClick(id: number): void {
    // Aquí se redirige a la ruta de registro con el ID de la parcela
    this.router.navigate(['/parcela/register'], { queryParams: { id } });
  }

  handleAddClick(): void {
    this.router.navigate(['/parcela/register']);
  }
}
