import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ControlTierraListComponent } from './views/control-tierra/control-tierra-list/control-tierra-list.component';
import { ControlTierraRegisterComponent } from './views/control-tierra/control-tierra-register/control-tierra-register.component';
import { ParcelaRegisterComponent } from './views/parcelas/parcela-register/parcela-register.component';
import { ParcelaListComponent } from './views/parcelas/parecela-list/parcela-list.component';
import { TipoUvaListComponent } from './views/tipo-uva/tipo-uva-list/tipo-uva-list.component';
import { TipoUvaRegisterComponent } from './views/tipo-uva/tipo-uva-register/tipo-uva-register.component';
import { ControlProduccionVinosListComponent } from './views/control-produccion-vinos/control-produccion-vinos-list/control-produccion-vinos-list.component';
import { ControlProduccionVinosRegisterComponent } from './views/control-produccion-vinos/control-produccion-vinos-register/control-produccion-vinos.component';
import { FullComponent } from './layouts/full/full.component';
import {SiembraParcelaListComponent}from './views/siembra-parcela/siembra-parcela-list/siembra-parcela-list.component';
import {SiembraParcelaRegisterComponent} from './views/siembra-parcela/siembra-parcela-register/siembra-parcela-register.component';
const routes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "", redirectTo: "/home", pathMatch: "full" },
      { path: "home", component: DashboardComponent },

      // Rutas para Control de Tierra (listado y registro)
      { path: "tierra", component: ControlTierraListComponent },               // Lista de controles
      { path: "tierra/register", component: ControlTierraRegisterComponent },  // Formulario de registro

      // Rutas para las parcelas (listado y registro)
      { path: "parcela", component: ParcelaListComponent },
      { path: 'parcela/register', component: ParcelaRegisterComponent },

       // Rutas para las uvas  (listado y registro)
       { path: "tipoUvas", component: TipoUvaListComponent },
      { path: "tipoUvas/register", component: TipoUvaRegisterComponent },

        // Rutas para las siembra parcelas  (listado y registro)
        { path: 'siembraParcela', component: SiembraParcelaListComponent },
        { path: 'siembraParcela/register', component: SiembraParcelaRegisterComponent },

      // Rutas para el Control de Producción de Vinos (listado y registro)
      { path: "control-produccion-vinos", component: ControlProduccionVinosListComponent },
      { path: "control-produccion-vinos/register", component: ControlProduccionVinosRegisterComponent }
    ]
  },

  // Rutas por defecto y de manejo de errores
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home", pathMatch: "full" },  // Manejo de rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

