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

// Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';
import { ChildrenModule } from './views/childrens/children.module';
import { ControlTierraModule } from './views/control-tierra/control-tierra.module';
import { ParcelaModule } from './views/parcelas/parcela.module';
import { ControlProduccionVinosModule } from './views/control-produccion-vinos/control-produccion-vinos.module';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent
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
    ControlProduccionVinosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
