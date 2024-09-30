import { Component, OnInit } from '@angular/core';
import { ParcelaService } from '../parcela.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-parcela-register',
  styleUrls: ['./parcela-register.component.scss'],
  templateUrl: './parcela-register.component.html',
})
export class ParcelaRegisterComponent implements OnInit {
  parcela: any = { nombre: '', tamano: '', ubicacion: '', tipoSuelo: '' };
  isEditing: boolean = false; // Indica si estamos editando

  constructor(
    private parcelaService: ParcelaService,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute // Inyecta ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.isEditing = true;
      this.parcelaService.obtenerParcela(+id).subscribe(parcela => {
        this.parcela = parcela || { nombre: '', tamano: '', ubicacion: '', tipoSuelo: '' }; // Maneja el caso en que no se encuentre la parcela
      });
    }
  }

  registrarParcela() {
    if (this.parcela.nombre && this.parcela.tamano && this.parcela.ubicacion && this.parcela.tipoSuelo) {
      if (this.isEditing) {
        this.parcelaService.actualizarParcela(this.parcela); // Llama al servicio para actualizar la parcela
        this.snackBar.open('Parcela actualizada exitosamente', '', {
          duration: 3000,
        });
      } else {
        this.parcelaService.agregarParcela(this.parcela);
        this.snackBar.open('Parcela registrada exitosamente', '', {
          duration: 3000,
        });
      }
      this.router.navigate(['/parcela']);
    } else {
      this.snackBar.open('Por favor, completa todos los campos.', '', {
        duration: 3000,
      });
    }
  }

  limpiarFormulario() {
    this.parcela = { nombre: '', tamano: '', ubicacion: '', tipoSuelo: '' };
    this.router.navigate(['/parcela']);
  }
}
