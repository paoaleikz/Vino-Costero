import { Component, OnInit } from '@angular/core';
import { ProduccionService } from '../produccion.service';
import { Produccion } from '../Models/produccion.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-produccion-list',
    templateUrl: './produccion-list.component.html',
    styleUrls: ['./produccion-list.component.scss']
})
export class ProduccionListComponent implements OnInit {
    producciones: Produccion[] = [];
    userRole: string | null = localStorage.getItem('userRole');

    // Verifica si el usuario tiene acceso a la funcionalidad
    canEdit() {
      return this.userRole === 'admin'; // Solo el admin puede editar
    }

    constructor(
        private produccionService: ProduccionService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.loadProducciones();
    }

    loadProducciones(): void {
        this.producciones = this.produccionService.getProducciones(); // Obtiene la lista de producciones
    }

    selectProduccion(produccion: Produccion): void {
        // Redirige a la página de registro pasando el id en el estado
        this.router.navigate(['/produccion/register'], { state: { id: produccion.id } });
    }

    deleteProduccion(id: number): void {
        this.produccionService.deleteProduccion(id); // Llama al método de eliminación
        this.loadProducciones(); // Recarga la lista después de eliminar
    }

    handleAddClick(): void {
        this.router.navigate(['/produccion/register']); // Redirige a la página de registro
    }
    editarProduccion(id: number): void {
      this.router.navigate(['/produccion/edit', id]);
    }
    
}
