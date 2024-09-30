import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';


import { TipoUvaRegisterComponent } from './tipo-uva-register/tipo-uva-register.component';
import { TipoUvaListComponent } from './tipo-uva-list/tipo-uva-list.component';

import { ComponentsModule } from 'src/app/components/components.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DemoFlexyModule } from '../../demo-flexy-module';

@NgModule({
  declarations: [
    TipoUvaRegisterComponent,
    TipoUvaListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatDatepickerModule,
    ComponentsModule,
    NgApexchartsModule,
    DemoFlexyModule
  ],
  exports: [
    TipoUvaRegisterComponent,
    TipoUvaListComponent
    
  ]
})
export class TipoUvaModule { }

