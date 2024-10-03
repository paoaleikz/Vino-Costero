import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { RouterModule } from '@angular/router'; // Importar RouterModule
import { SiembraParcelaListComponent } from './siembra-parcela-list/siembra-parcela-list.component';
import { SiembraParcelaRegisterComponent } from './siembra-parcela-register/siembra-parcela-register.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SiembraParcelaService } from './siembra-parcela.service'; // Importa el servicio

@NgModule({
  declarations: [
    SiembraParcelaListComponent,
    SiembraParcelaRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule, // Para el selector de variedad de uva y estado de siembra
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatCheckboxModule,
    RouterModule,
    ComponentsModule // Para el botón flotante o cualquier otro componente compartido
  ],
  providers: [
    SiembraParcelaService // Proveedor del servicio de siembra
  ],
  exports: [
    SiembraParcelaListComponent,
    SiembraParcelaRegisterComponent
  
  ]
})
export class SiembraParcelaModule { }
