import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChildrenListComponent } from './views/childrens/children-list/children-list.component';
import { CitaListComponent } from './views/citas/cita-list/cita-list.component';
import { CitaVaccineComponent } from './views/citas/cita-vaccine/cita-vaccine.component';
import { VaccinesComponent } from './views/vaccines/vaccines.component';
import { FullComponent } from './layouts/full/full.component';
import { ChildrenRegisterComponent } from './views/childrens/children-register/children-register.component';
import { ChildrenInformationComponent } from './views/childrens/children-information/children-information.component';

const routes: Routes = [
  {
    path:"",
    component:FullComponent,
    children: [
      {path:"", redirectTo:"/home", pathMatch:"full"},
      {path:"home", component:DashboardComponent},
      {path:"childrens", component:ChildrenListComponent},
      {path:"childrens/register", component:ChildrenRegisterComponent},
      {path:"childrens/info", component:ChildrenInformationComponent},
      {path:"citas", component:CitaListComponent},
      {path:"citas/event", component:CitaVaccineComponent},
      {path:"vaccines", component:VaccinesComponent},
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
