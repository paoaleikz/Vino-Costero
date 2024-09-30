import { Component } from '@angular/core';
import { TipoUvaService } from '../tipo-uva.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

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
  editMode: boolean = false;
  uvaId: number | null = null;

  constructor(
    private tipoUvaService: TipoUvaService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.uvaId = params['id'];
      if (this.uvaId) {
        this.editMode = true;
        const uva = this.tipoUvaService.obtenerUvaPorId(this.uvaId);
        if (uva) {
          this.uva = { ...uva };
        }
      }
    });
  }

  guardarUva(): void {
    // Validación de campos obligatorios
    if (!this.uva.nombre || !this.uva.sabor || !this.uva.uso) {
      this.snackBar.open('Por favor, complete todos los campos obligatorios.', '', { duration: 3000 });
      return; // Detener la ejecución si los campos no están completos
    }

    if (this.editMode) {
      this.tipoUvaService.actualizarUva(this.uva);
      this.snackBar.open('Uva actualizada con éxito', '', { duration: 3000 });
    } else {
      this.tipoUvaService.agregarUva(this.uva);
      this.snackBar.open('Uva agregada con éxito', '', { duration: 3000 });
    }

    this.router.navigate(['/tipoUvas']);
  }

  cancelar(): void {
    this.router.navigate(['/tipoUvas']);
  }
}
