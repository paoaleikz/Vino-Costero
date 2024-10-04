import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './layouts/full/full.component';
import { DemoFlexyModule } from './demo-flexy-module';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';
import { ChildrenModule } from './views/childrens/children.module';
import { ControlTierraModule } from './views/control-tierra/control-tierra.module';
import { ParcelaModule } from './views/parcelas/parcela.module';
import { TipoUvaModule } from './views/tipo-uva/tipo-uva.module';
import {SiembraParcelaModule} from './views/siembra-parcela/siembra-parcela.module';
import { ProduccionModule } from './views/produccion/produccion.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AccessDeniedComponent } from './views/security/access-denied/access-denied.component';
import { RolesManagementComponent } from './views/security/roles-management/roles-management.component';
import { LoginComponent } from './views/security/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';






@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AccessDeniedComponent,
    RolesManagementComponent,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    DashboardModule,
    ComponentsModule,
    FormsModule,
    ChildrenModule,
    ControlTierraModule,
    ParcelaModule,
    ProduccionModule,
    MatSnackBarModule,
    TipoUvaModule,
    HttpClientModule,
    SiembraParcelaModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
