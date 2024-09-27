import { Component } from '@angular/core';
import { ParcelaService } from '../parcela.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parcela-register',
  styleUrls: ['./parcela-register.component.scss'],
  templateUrl: './parcela-register.component.html',
 
})
export class ParcelaRegisterComponent {
  parcela: any = { nombre: '', tamano: '', ubicacion: '', tipoSuelo: '' }; // Objeto para el registro de parcela

  constructor(private parcelaService: ParcelaService, private router: Router) {}

  // Método para registrar una nueva parcela
  registrarParcela() {
    this.parcelaService.agregarParcela(this.parcela); // Llama al servicio para agregar la parcela
    this.router.navigate(['/parcela']); // Redirige a la lista de parcelas después de registrar
  }

  // Método para limpiar el formulario (opcional)
  limpiarFormulario() {
    this.parcela = { 
      nombre: '', 
      tamano: '', 
      ubicacion: '', 
      tipoSuelo: '' }; // Resetea el objeto parcela
      
    this.router.navigate(['/parcela']); // Redirige a la lista de parcelas después de registrar
  }
  
}
