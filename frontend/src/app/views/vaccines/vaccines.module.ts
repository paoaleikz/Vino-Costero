import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccinesComponent } from './vaccines.component';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DemoFlexyModule } from '../../demo-flexy-module'

import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    VaccinesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgApexchartsModule,
    DemoFlexyModule,
    ComponentsModule

  ],
  exports: [
    VaccinesComponent
  ]
})
export class VaccinesModule { }
