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
import { ChildrenListComponent } from './children-list/children-list.component';
import { ChildrenRegisterComponent } from './children-register/children-register.component';
import { ChildrenInformationComponent } from './children-information/children-information.component';
import { ChildrenVaccinesComponent } from './children-information/children-vaccines/children-vaccines.component';

import { ComponentsModule } from 'src/app/components/components.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DemoFlexyModule } from '../../demo-flexy-module';


@NgModule({
  declarations: [
    ChildrenListComponent,
    ChildrenRegisterComponent,
    ChildrenInformationComponent,
    ChildrenVaccinesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgApexchartsModule,
    DemoFlexyModule,
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule, 
    MatCheckboxModule, 
    MatRadioModule, 
    MatButtonModule,
    MatDatepickerModule,
    ComponentsModule
  ],
  exports: [
    ChildrenListComponent,
    ChildrenRegisterComponent,
    ChildrenInformationComponent,
    ChildrenVaccinesComponent
  ]
})
export class ChildrenModule { }
