import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TipoUvaService } from '../tipo-uva.service';

@Component({
  selector: 'app-tipo-uva-register',
  templateUrl: './tipo-uva-register.component.html',
  styleUrls: ['./tipo-uva-register.component.scss']
})
export class TipoUvaRegisterComponent implements OnInit {
  tipoUvaForm: FormGroup;
  isEditing: boolean = false; // Variable para determinar si estamos en modo edición
  uvaId: number | null = null; // Almacena el ID de la uva a editar

  constructor(
    private fb: FormBuilder,
    private tipoUvaService: TipoUvaService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    // Inicializar el formulario
    this.tipoUvaForm = this.fb.group({
      nombre: ['', Validators.required],
      sabor: ['', Validators.required],
      uso: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtener el ID de la uva si estamos en modo edición
    this.route.queryParams.subscribe(params => {
      this.uvaId = params['id'] ? Number(params['id']) : null;
      if (this.uvaId) {
        this.isEditing = true;
        const uva = this.tipoUvaService.obtenerUvaPorId(this.uvaId);
        if (uva) {
          this.tipoUvaForm.patchValue({
            nombre: uva.nombre,
            sabor: uva.sabor,
            uso: uva.uso
          });
        }
      }
    });
  }

  guardarUva(): void {
    if (this.tipoUvaForm.valid) {
      const uvaData = this.tipoUvaForm.value;
      if (this.isEditing && this.uvaId !== null) {
        this.tipoUvaService.actualizarUva(this.uvaId, uvaData); // Usar actualizarUva
        this.snackBar.open('Uva actualizada con éxito', '', { duration: 3000 });
      } else {
        this.tipoUvaService.agregarUva(uvaData);
        this.snackBar.open('Uva registrada con éxito', '', { duration: 3000 });
      }
      this.router.navigate(['/tipoUvas']);
    }
  }

  // Método para manejar la cancelación y redirigir a la lista
  cancelar(): void {
    this.router.navigate(['/tipoUvas']);
  }
}
