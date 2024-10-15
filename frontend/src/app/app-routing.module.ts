import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlTierraListComponent } from './views/control-tierra/control-tierra-list/control-tierra-list.component';
import { ControlTierraRegisterComponent } from './views/control-tierra/control-tierra-register/control-tierra-register.component';
import { ParcelaRegisterComponent } from './views/parcelas/parcela-register/parcela-register.component';
import { ParcelaListComponent } from './views/parcelas/parecela-list/parcela-list.component';
import { TipoUvaListComponent } from './views/tipo-uva/tipo-uva-list/tipo-uva-list.component';
import { TipoUvaRegisterComponent } from './views/tipo-uva/tipo-uva-register/tipo-uva-register.component';
import { ProduccionListComponent } from './views/produccion/produccion.list/produccion-list.component';
import { ProduccionRegisterComponent } from './views/produccion/produccion.register/produccion-register.component';
import { FullComponent } from './layouts/full/full.component';
import { SiembraParcelaListComponent } from './views/siembra-parcela/siembra-parcela-list/siembra-parcela-list.component';
import { SiembraParcelaRegisterComponent } from './views/siembra-parcela/siembra-parcela-register/siembra-parcela-register.component';
import { authGuard } from './guards/auth.guard';  // Un guard opcional para proteger rutas
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: "",
    component: FullComponent,
    canActivate: [authGuard],
    children: [
      { path: "", redirectTo: "/childrens", pathMatch: "full" },
      { path: "home", component: DashboardComponent },
      { path: "tierra", component: ControlTierraListComponent },               // Lista de controles
      { path: "tierra/register", component: ControlTierraRegisterComponent },  // Formulario de registro
      { path: "parcela", component: ParcelaListComponent },
      { path: 'parcela/register', component: ParcelaRegisterComponent },
      { path: "tipoUvas", component: TipoUvaListComponent },
      { path: "tipoUvas/register", component: TipoUvaRegisterComponent },
      { path: 'siembraParcela', component: SiembraParcelaListComponent },
      { path: 'siembraParcela/register', component: SiembraParcelaRegisterComponent },
      { path: "produccion", component: ProduccionListComponent },
      { path: "produccion/register", component: ProduccionRegisterComponent },
      { path: 'produccion/edit/:id', component: ProduccionRegisterComponent }
    ]
  },
  { path: "**", redirectTo: "/login", pathMatch: "full" },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
