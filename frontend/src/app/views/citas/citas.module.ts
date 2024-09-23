import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DemoFlexyModule } from '../../demo-flexy-module'

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

import { CitaListComponent } from './cita-list/cita-list.component';
import { CitaVaccineComponent } from './cita-vaccine/cita-vaccine.component';
import { CitaVaccineUpdateComponent } from './cita-vaccine-update/cita-vaccine-update.component';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    CitaListComponent,
    CitaVaccineComponent,
    CitaVaccineUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgApexchartsModule,
    DemoFlexyModule,
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatCheckboxModule, 
    MatSelectModule, 
    MatButtonModule,
    MatDatepickerModule,
    ComponentsModule
  ],
  exports: [
    CitaListComponent,
    CitaVaccineComponent,
    CitaVaccineUpdateComponent
  ]
})
export class CitasModule { }
