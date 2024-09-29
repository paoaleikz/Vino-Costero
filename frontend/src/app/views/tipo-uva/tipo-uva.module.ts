import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TipoUvaRegisterComponent } from './tipo-uva-register/tipo-uva-register.component';
import { TiposUvaListComponent } from './tipo-uva-list/tipo-uva-list.component';
import { FormsModule } from '@angular/forms'; // Asegúrate de incluir FormsModule
import { MatTableModule } from '@angular/material/table'; 

@NgModule({
  declarations: [
    TipoUvaRegisterComponent,
    TiposUvaListComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule, // Incluye FormsModule aquí
    MatTableModule
  ]
})
export class TipoUvaModule { }