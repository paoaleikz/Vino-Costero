import { Component } from '@angular/core';
import { ParcelaService } from '../parcela.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Importa MatSnackBar

@Component({
  selector: 'app-parcela-register',
  styleUrls: ['./parcela-register.component.scss'],
  templateUrl: './parcela-register.component.html',
})
export class ParcelaRegisterComponent {
  parcela: any = { nombre: '', tamano: '', ubicacion: '', tipoSuelo: '' }; // Objeto para el registro de parcela

  constructor(
    private parcelaService: ParcelaService,
    private router: Router,
    private snackBar: MatSnackBar // Inyecta MatSnackBar
  ) {}

  // Método para registrar una nueva parcela
  registrarParcela() {
    if (this.parcela.nombre && this.parcela.tamano && this.parcela.ubicacion && this.parcela.tipoSuelo) {
      this.parcelaService.agregarParcela(this.parcela); // Llama al servicio para agregar la parcela

      // Muestra el mensaje de éxito usando MatSnackBar
      this.snackBar.open('Parcela registrada exitosamente', '', {
        duration: 3000, // El mensaje desaparecerá después de 3 segundos
      });

      // Redirige a la lista de parcelas después de registrar
      this.router.navigate(['/parcela']);
    } else {
      // Muestra un mensaje de error si faltan campos
      this.snackBar.open('Por favor, completa todos los campos.', '', {
        duration: 3000,
      });
    }
  }
  // Método para limpiar el formulario (opcional)
  limpiarFormulario() {
    this.parcela = { nombre: '', tamano: '', ubicacion: '', tipoSuelo: '' }; // Resetea el objeto parcela
    this.router.navigate(['/parcela']); // Redirige a la lista de parcelas
  }
}
