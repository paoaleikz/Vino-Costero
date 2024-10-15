import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {

  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private router: Router) { }

  async logout() {
    try {
      this.router.navigate(['/login']);  // Redirigir al login u otra página después de cerrar sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [
  
    {
      link: "/parcela",
      icon: "perm_media",
      menu: "Parcelas",
    },
    
    {
      link: "/tipoUvas",
      icon: "hive",
      menu: "Registro Tipos de Uvas",
    },
    {
      link: "/tierra",
      icon: "landscape",
      menu: "Registro Tierras",
    },
    {
      link: "/siembraParcela",
      icon: "compost",
      menu: "Registro Siembra Parcelas",
    },
    {
      link: "/produccion",
      icon: "liquor",
      menu: "Control Produccion Vinos",
    },
   
    
    
  ]

}
