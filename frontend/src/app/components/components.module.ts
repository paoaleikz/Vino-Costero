import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { DemoFlexyModule } from '../demo-flexy-module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

//CUSTOM COMPONENTS 
import { FloatButtonComponent } from './float-button/float-button.component'
import { InfoVaccineCardComponent } from './info-vaccine-card/info-vaccine-card.components'
import { AgeVaccineCardComponent } from './age-vaccine-card/age-vaccine-card.components'
import { AlertComponent } from './alert/alert.component'

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FloatButtonComponent,
    InfoVaccineCardComponent,
    AgeVaccineCardComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatIconModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    FormsModule
  ],
  exports: [
    FloatButtonComponent,
    InfoVaccineCardComponent,
    AgeVaccineCardComponent,
    AlertComponent
  ]
})
export class ComponentsModule { }
