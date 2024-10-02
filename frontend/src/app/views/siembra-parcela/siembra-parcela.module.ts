import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table'; // Asegúrate de importar MatTableModule
import { SiembraParcelaRegisterComponent } from './siembra-parcela-register/siembra-parcela-register.component';
import { MatIconModule } from '@angular/material/icon';
import { SiembraParcelaListComponent } from './siembra-parcela-list/siembra-parcela-list.component';

@NgModule({
  declarations: [
    SiembraParcelaRegisterComponent,
    SiembraParcelaListComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
  ],
  
  providers: [
    MatDatepickerModule // Añade este proveedor
  ]
})
export class SiembraParcelaModule { }
