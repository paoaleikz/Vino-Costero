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

// Angular Material Modules
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // Añadir si usas iconos
import { MatTooltipModule } from '@angular/material/tooltip'; // Añadir si usas tooltips
import { MatCardModule } from '@angular/material/card'; // Añadir si usas tarjetas
import { MatDialogModule } from '@angular/material/dialog'; // Añadir si usas diálogos
import { MatToolbarModule } from '@angular/material/toolbar'; // Añadir si usas toolbar
import { MatListModule } from '@angular/material/list'; // Añadir si usas listas
import { MatGridListModule } from '@angular/material/grid-list'; // Añadir si usas cuadrículas

// Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';
import { ChildrenModule } from './views/childrens/children.module';
import { ControlTierraModule } from './views/control-tierra/control-tierra.module';
import { ParcelaModule } from './views/parcelas/parcela.module';
import { TipoUvaModule } from './views/tipo-uva/tipo-uva.module';
import { SiembraParcelaModule } from './views/siembra-parcela/siembra-parcela.module';
import { ProduccionModule } from './views/produccion/produccion.module';
import { AuthModule} from './views/auth/auth.module'

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
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
    MatFormFieldModule,
    MatIconModule, // Asegúrate de importar esto si usas iconos
    MatTooltipModule, // Asegúrate de importar esto si usas tooltips
    MatCardModule, // Asegúrate de importar esto si usas tarjetas
    MatDialogModule, // Asegúrate de importar esto si usas diálogos
    MatToolbarModule, // Asegúrate de importar esto si usas toolbar
    MatListModule, // Asegúrate de importar esto si usas listas
    MatGridListModule, // Asegúrate de importar esto si usas cuadrículas
    AuthModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
