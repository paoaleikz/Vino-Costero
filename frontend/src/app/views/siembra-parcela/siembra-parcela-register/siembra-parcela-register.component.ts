import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SiembraParcelaService } from '../siembra-parcela.service'; // Ajusta la ruta según sea necesario
import { Siembra } from '../Models/siembra.model'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-siembra-parcela-register',
  templateUrl: './siembra-parcela-register.component.html',
  styleUrls: ['./siembra-parcela-register.component.scss']
})
export class SiembraParcelaRegisterComponent implements OnInit {
  siembraForm: FormGroup;
  siembra: Siembra | null | undefined= null; // Inicializa como null
  isEditing: boolean = false; // Estado para saber si estamos editando

  constructor(
    private fb: FormBuilder,
    private siembraParcelaService: SiembraParcelaService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute // Asegúrate de que esta línea esté presente
  ) {
    this.siembraForm = this.fb.group({
      parcela: ['', Validators.required],
      variedadUva: ['', Validators.required],
      fechaSiembra: ['', Validators.required],
      cantidadSembrada: [0, [Validators.required, Validators.min(1)]],
      estadoSiembra: ['', Validators.required],
      plagas: [false],
      comentarios: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Uso correcto de ActivatedRoute
    
    // Verificamos si hay un id y si es un número válido
    if (id && !isNaN(+id)) {
      this.isEditing = true; // Estamos en modo de edición
      this.siembraParcelaService.obtenerSiembra(+id).subscribe(
        (siembra: Siembra|undefined) => {
          this.siembra = siembra;
          if (this.siembra) {
            this.siembraForm.patchValue(this.siembra);
          } else {
            this.snackBar.open('Siembra no encontrada.', 'Cerrar', {
              duration: 3000
            });
            this.router.navigate(['/siembraParcela']); // Navegar a la lista si no se encuentra
          }
        },
        (error: any) => { // Especificamos el tipo 'any' aquí
          console.error('Error al obtener la siembra:', error);
          this.snackBar.open('Error al cargar la siembra.', 'Cerrar', {
            duration: 3000
          });
          this.router.navigate(['/siembraParcela']); // Navegar a la lista si ocurre un error
        }
      );
    }
  }

  registrarSiembra(): void {
    if (this.siembraForm.invalid) {
      this.snackBar.open('Por favor, complete todos los campos requeridos.', 'Cerrar', {
        duration: 3000
      });
      return;
    }

    const siembraData: Siembra = { ...this.siembraForm.value, id: this.isEditing ? this.siembra?.id : undefined };

    if (this.isEditing) {
      this.siembraParcelaService.actualizarSiembra(siembraData);
    } else {
      this.siembraParcelaService.agregarSiembra(siembraData);
      this.snackBar.open('Siembra registrada exitosamente.', 'Cerrar', {
        duration: 3000
      });
      this.limpiarFormulario(); // Limpia el formulario después de registrar
    }
  }

  limpiarFormulario(): void {
    this.siembraForm.reset();
    this.isEditing = false; // Volver al estado de no edición
  }
}

