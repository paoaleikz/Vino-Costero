import { Component, OnInit } from '@angular/core';
import { TipoUvaService } from '../tipo-uva.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tipo-uva-list',
  templateUrl: './tipo-uva-list.component.html',
  styleUrls: ['./tipo-uva-list.component.scss']
})
export class TiposUvaListComponent implements OnInit {
  uvas: any[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'sabor', 'uso', 'acciones'];

  constructor(private tipoUvaService: TipoUvaService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.uvas = this.tipoUvaService.obtenerUvas(); // Obtener las uvas desde el servicio
  }

  eliminarUva(id: number): void {
    this.tipoUvaService.eliminarUva(id);
    this.uvas = this.tipoUvaService.obtenerUvas(); // Actualizar la lista de uvas
    this.snackBar.open('Uva eliminada', '', { duration: 3000 });
  }

  editarUva(id: number): void {
    // Lógica para editar la uva (puedes redirigir al formulario de registro con datos)
    const uva = this.tipoUvaService.obtenerUvaPorId(id);
    console.log('Editando uva:', uva);
  }
}


