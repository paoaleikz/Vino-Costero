import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SiembraParcelaService } from '../siembra-parcela.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-siembra-parcela-register',
  templateUrl: './siembra-parcela-register.component.html',
  styleUrls: ['./siembra-parcela-register.component.scss']
})
export class SiembraParcelaRegisterComponent implements OnInit {
  siembraForm: FormGroup; // Definir el formulario
  siembras: any[] = []; // Array para almacenar las siembras

  constructor(
    private formBuilder: FormBuilder,
    private siembraService: SiembraParcelaService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    // Inicialización del formulario reactivo
    this.siembraForm = this.formBuilder.group({
      variedadUva: ['', Validators.required],
      cantidadSembrada: ['', Validators.required],
      estado: ['', Validators.required],
      fechaSiembra: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Obtenemos las siembras al iniciar el componente
    this.siembras = this.siembraService.obtenerSiembras(); // Asegúrate de que este método retorne un array de siembras
  }

  registrarSiembra() {
    if (this.siembraForm.valid) {
      // Aquí puedes llamar al servicio para registrar la siembra
      this.siembraService.agregarSiembra(this.siembraForm.value);
      this.snackBar.open('Siembra registrada exitosamente', '', {
        duration: 3000,
      });
      this.router.navigate(['/siembra-parcela']); // Redirigir al listado después de registrar
    } else {
      this.snackBar.open('Por favor, completa todos los campos.', '', {
        duration: 3000,
      });
    }
  }

  // Método para cancelar y volver al listado
  onCancel() {
    this.router.navigate(['/siembra-parcela']);
  }
}
