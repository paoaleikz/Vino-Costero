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

import { ControlTierraListComponent } from './control-tierra-list/control-tierra-list.component';
import { ControlTierraRegisterComponent } from './control-tierra-register/control-tierra-register.component';

import { ComponentsModule } from 'src/app/components/components.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DemoFlexyModule } from '../../demo-flexy-module';

@NgModule({
  declarations: [
    ControlTierraListComponent,
    ControlTierraRegisterComponent,
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
    ControlTierraListComponent,
    ControlTierraRegisterComponent
  ]
})
export class ControlTierraModule { }

