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
import { RoleGuard } from './views/auth/role.guard'; // Importa el guard de roles


const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "home", component: DashboardComponent },

      // Rutas para el Control de Tierra
      { 
        path: "tierra", 
        component: ControlTierraListComponent, 
        canActivate: [RoleGuard], 
        data: { expectedRole: 'admin' } // Solo admin tiene acceso
      },
      { 
        path: "tierra/register", 
        component: ControlTierraRegisterComponent, 
        canActivate: [RoleGuard], 
        data: { expectedRole: 'supervisor' } // Supervisor puede registrar
      },

      // Rutas para Parcelas
      { 
        path: "parcela", 
        component: ParcelaListComponent, 
        canActivate: [RoleGuard], 
        data: { expectedRole: 'admin' } // Solo admin tiene acceso
      },
      { 
        path: 'parcela/register', 
        component: ParcelaRegisterComponent, 
        canActivate: [RoleGuard], 
        data: { expectedRole: 'admin' } // Solo admin tiene acceso
      },

      // Rutas para Tipos de Uvas
      { 
        path: "tipoUvas", 
        component: TipoUvaListComponent, 
        canActivate: [RoleGuard], 
        data: { expectedRole: 'admin' } // Solo admin tiene acceso
      },
      { 
        path: "tipoUvas/register", 
        component: TipoUvaRegisterComponent, 
        canActivate: [RoleGuard], 
        data: { expectedRole: 'admin' } // Solo admin tiene acceso
      },

      // Rutas para Siembra de Parcelas
      { 
        path: 'siembraParcela', 
        component: SiembraParcelaListComponent, 
        canActivate: [RoleGuard], 
        data: { expectedRole: 'supervisor' } // Solo supervisor tiene acceso
      },
      { 
        path: 'siembraParcela/register', 
        component: SiembraParcelaRegisterComponent, 
        canActivate: [RoleGuard], 
        data: { expectedRole: 'supervisor' } // Solo supervisor tiene acceso
      },

      // Rutas para Producción
      { 
        path: "produccion", 
        component: ProduccionListComponent, 
        canActivate: [RoleGuard], 
        data: { expectedRole: 'supervisor' } // Supervisor también puede ver producción
      },
      { 
        path: "produccion/register", 
        component: ProduccionRegisterComponent, 
        canActivate: [RoleGuard], 
        data: { expectedRole: 'admin' } // Solo admin tiene acceso
      },
      { 
        path: 'produccion/edit/:id', 
        component: ProduccionRegisterComponent, 
        canActivate: [RoleGuard], 
        data: { expectedRole: 'admin' } // Solo admin tiene acceso
      },
    ]
  },
  { path: "**", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }