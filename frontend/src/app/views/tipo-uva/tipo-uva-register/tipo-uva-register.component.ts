import { Component } from '@angular/core';
import { TipoUvaService } from '../tipo-uva.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tipo-uva-register',
  templateUrl: './tipo-uva-register.component.html',
  styleUrls: ['./tipo-uva-register.component.scss']
})
export class TipoUvaRegisterComponent {
  uva: any = {
    nombre: '',
    sabor: '',
    uso: ''
  };

  constructor(private tipoUvaService: TipoUvaService, private snackBar: MatSnackBar) {}

  guardarUva(): void {
    if (this.uva.nombre && this.uva.sabor && this.uva.uso) {
      this.tipoUvaService.agregarUva(this.uva);
      this.snackBar.open('Uva agregada', '', { duration: 3000 });
      this.limpiarFormulario(); // Limpiar el formulario después de guardar

      
    } else {
      this.snackBar.open('Por favor completa todos los campos', '', { duration: 3000 });

    }
  }

  limpiarFormulario(): void {
    this.uva = {
      nombre: '',
      sabor: '',
      uso: ''
    };
  }
}
