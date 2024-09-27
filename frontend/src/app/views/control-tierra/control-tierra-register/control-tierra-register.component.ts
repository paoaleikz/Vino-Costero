import { Component } from '@angular/core';
import { HistorialControlService } from '../historial-control.service'
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-control-tierra-register',
  styleUrls: ['./control-tierra-register.component.scss'],
  templateUrl: './control-tierra-register.component.html',
})
export class ControlTierraRegisterComponent {
  parcelaSeleccionada: string | null = null; // Cambia a un tipo apropiado si tienes un modelo
  tipoUvaSeleccionado: string | null = null;  // Cambia a un tipo apropiado si tienes un modelo
  nivelesNutrientes: string = ''; // Inicializar con valor vacío
  phSuelo: number | null = null; // Inicializar con null
  tratamientosAplicados: string = ''; // Inicializar con valor vacío
  fechaControl: Date | null = null; // Inicializar con null
  tiposUva: string[] = ['Cabernet Sauvignon', 'Merlot', 'Chardonnay']; // Definiones de  tus tipos de uva
  parcelas: string[] = ['Parcela 1', 'Parcela 2', 'Parcela 3','Parcela 4']; // Definiones de las parcelas
  mensaje: string = ''; // Mensaje de éxito
  
  constructor(private _service: HistorialControlService,private router: Router) {  // Inyectar Service
    
  }

  registroExitoso: boolean = false; // Propiedad para controlar el mensaje de éxito

  registrarControl() {
    if (this.parcelaSeleccionada && this.tipoUvaSeleccionado && this.nivelesNutrientes && this.phSuelo !== null && this.tratamientosAplicados && this.fechaControl) {
      // Crear un objeto para guardar el control
      const nuevoControl = {
        parcela: this.parcelaSeleccionada,
        tipoUva: this.tipoUvaSeleccionado,
        nivelesNutrientes: this.nivelesNutrientes,
        phSuelo: this.phSuelo,
        tratamientosAplicados: this.tratamientosAplicados,
        fechaControl: this.fechaControl,
      };

      // Agregar el nuevo control a la lista (simulando una llamada a un servicio)
        this._service.agregarRegistro(nuevoControl);
        // Simulación de guardar el registro
        console.log('Registro creado con éxito.');
       // Limpiar el formulario después de crear el registro
          this.limpiarFormulario();
           // Mostrar el mensaje de éxito
    this.registroExitoso = true;

    // Ocultar el mensaje después de unos segundos (opcional)
    setTimeout(() => {
      this.registroExitoso = false;
    }, 5000); // El mensaje desaparecerá después de 5 segundos
  } 
  }

  limpiarFormulario() {
    this.parcelaSeleccionada = null;
    this.tipoUvaSeleccionado = null;
    this.nivelesNutrientes = '';
    this.phSuelo = null;
    this.tratamientosAplicados = '';
    this.fechaControl = null;
  }
  
  goToHistorial(){
    this.router.navigate(['/tierra']);
  }
}
