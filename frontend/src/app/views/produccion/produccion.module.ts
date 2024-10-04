import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DemoFlexyModule } from '../../demo-flexy-module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProduccionListComponent } from './produccion.list/produccion-list.component';
import { ProduccionRegisterComponent } from './produccion.register/produccion-register.component';

@NgModule({
  declarations: [
    ProduccionListComponent,
    ProduccionRegisterComponent
  ],
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    NgApexchartsModule,
    MatDatepickerModule,
    ComponentsModule,
    DemoFlexyModule,
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    // otros módulos...
  ],
  exports: [
    ProduccionListComponent,
    ProduccionRegisterComponent
  ]
})

export class ProduccionModule { }
