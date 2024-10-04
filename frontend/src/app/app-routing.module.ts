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
import { LoginComponent } from './views/security/login/login.component'; // Importa el componente de Login
import { AuthGuard } from './views/security/auth.guard'; // Asegúrate de que la ruta sea correctaimport { AdminDashboardComponent } from './views/admin-dashboard/admin-dashboard.component'; // Ajusta la ruta según tu estructura


const routes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "admin-dashboard", component: DashboardComponent, canActivate: [AuthGuard], data: { expectedRole: 'admin' }},
      { path: "", redirectTo: "/login", pathMatch: "full" }, // Redirigir a login si la ruta está vacía
      { path: "login", component: LoginComponent }, // Ruta para el componente de Login
      { path: "home", component: DashboardComponent, canActivate: [AuthGuard] }, // Protegido por AuthGuard
      // Rutas para Control de Tierra (listado y registro)
      { path: "tierra", component: ControlTierraListComponent, canActivate: [AuthGuard] },               // Lista de controles
      { path: "tierra/register", component: ControlTierraRegisterComponent, canActivate: [AuthGuard] },  // Formulario de registro

      // Rutas para las parcelas (listado y registro)
      { path: "parcela", component: ParcelaListComponent, canActivate: [AuthGuard] },
      { path: 'parcela/register', component: ParcelaRegisterComponent, canActivate: [AuthGuard] },

      // Rutas para las uvas (listado y registro)
      { path: "tipoUvas", component: TipoUvaListComponent, canActivate: [AuthGuard] },
      { path: "tipoUvas/register", component: TipoUvaRegisterComponent, canActivate: [AuthGuard] },

      // Rutas para la siembra de parcelas (listado y registro)
      { path: 'siembraParcela', component: SiembraParcelaListComponent, canActivate: [AuthGuard] },
      { path: 'siembraParcela/register', component: SiembraParcelaRegisterComponent, canActivate: [AuthGuard] },

      // Rutas para el Control de Producción de Vinos (listado y registro)
      { path: "produccion", component: ProduccionListComponent, canActivate: [AuthGuard] },
      { path: "produccion/register", component: ProduccionRegisterComponent, canActivate: [AuthGuard] },
      { path: 'produccion/edit/:id', component: ProduccionRegisterComponent }
    
    ]

  },

  // Rutas por defecto y de manejo de errores
  { path: "**", redirectTo: "/login", pathMatch: "full" },  // Redirigir a login para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
