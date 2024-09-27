import { Component, OnInit } from '@angular/core';
import { ParcelaService } from '../parcela.service';
import { Router } from '@angular/router'; // Asegúrate de importar Router si lo necesitas

@Component({
  selector: 'app-parcela-list',
  templateUrl: './parcela-list.component.html',
  styleUrls: ['./parcela-list.component.scss']
})
export class ParcelaListComponent implements OnInit {
  parcelas: any[] = []; // Lista de parcelas
  displayedColumns: string[] = ['nombre', 'tamano', 'ubicacion', 'tipoSuelo', 'acciones']; // Columnas a mostrar en la tabla

  constructor(private parcelaService: ParcelaService, private router: Router) {} // Asegúrate de inyectar Router

  ngOnInit() {
    this.obtenerParcelas(); // Llama al método para obtener las parcelas al inicializar el componente
  }

  // Método para obtener las parcelas del servicio
  obtenerParcelas() {
    this.parcelaService.obtenerParcelas().subscribe(parcelas => {
      this.parcelas = parcelas; // Asigna las parcelas obtenidas a la variable
    });
  }

  // Método para manejar el clic en agregar
  handleAddClick() {
    this.router.navigate(['/parcela/register']); // Cambia a la ruta del formulario de registro
  }
  // Método para manejar el clic en editar
  handleEditClick(id: number) {
    this.router.navigate(['/parcela/edit', id]); // Cambia la ruta según tu configuración
  }

  // Método para eliminar una parcela
  eliminarParcela(index: number) {
    this.parcelaService.eliminarParcela(index); // Llama al servicio para eliminar la parcela por índice
    this.obtenerParcelas(); // Vuelve a obtener la lista de parcelas después de eliminar
  }
  
}
