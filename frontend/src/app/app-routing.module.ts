import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlTierraListComponent } from './views/control-tierra/control-tierra-list/control-tierra-list.component';
import { ControlTierraRegisterComponent } from './views/control-tierra/control-tierra-register/control-tierra-register.component';
import { ParcelaRegisterComponent } from './views/parcelas/parcela-register/parcela-register.component';
import { ParcelaListComponent } from './views/parcelas/parecela-list/parcela-list.component';
import { ControlProduccionVinosListComponent } from './views/control-produccion-vinos/control-produccion-vinos-list/control-produccion-vinos-list.component';
import { ControlProduccionVinosRegisterComponent } from './views/control-produccion-vinos/control-produccion-vinos-register/control-produccion-vinos.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path:"",
    component:FullComponent,
    children: [
      {path:"", redirectTo:"/home", pathMatch:"full"},
      {path:"home", component:DashboardComponent},
      {path:"tierra", component:ControlTierraListComponent},
      {path:"tierra/register", component:ControlTierraRegisterComponent}, 
      {path:"parcela", component:ParcelaListComponent},
      {path:"parcela/register", component:ParcelaRegisterComponent},
      {path:"control-produccion-vinos", component:ControlProduccionVinosListComponent},
      {path:"control-produccion-vinos/register", component:ControlProduccionVinosRegisterComponent}
     ]
  },

  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
