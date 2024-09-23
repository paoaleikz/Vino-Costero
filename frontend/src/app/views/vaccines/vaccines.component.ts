import { Component, OnInit } from '@angular/core';
import { vacunasData, edadesData} from 'src/app/mocksData/dataVaccine'


@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.scss']
})
export class VaccinesComponent implements OnInit {
   vacunas =vacunasData;
   edades = edadesData;
   
   lstInfoVaccine : any[] = [];
   lstAgeVaccine : any[] = [];
   blnShowAgesInfo : boolean = false ;

  constructor() { 
    this.makeListInfo();
    this.makeListAgeVaccine();
  }

  makeListInfo():void {
     this.lstInfoVaccine = this.vacunas.map(vacuna => {
      return {
          ...vacuna,
          dosis: vacuna.dosis.map(dose => {
              const edad = this.edades.find(e => e.edadMeses === dose.edad);
              return {
                  ...dose,
                  descripcionEdad: edad ? edad.descripcion : "Edad no especificada"
              };
          })
      };
  });
  }

  makeListAgeVaccine():void{
    this.lstAgeVaccine = this.edades.map(edad => {
      const vacunasCorrespondientes = this.vacunas.filter(vacuna => 
          vacuna.dosis.some(dose => dose.edad === edad.edadMeses)
      ).map(vacuna => {
          return {
              nombre: vacuna.nombre,
              descripcion: vacuna.descripcion,
              dosis: vacuna.dosis.filter(dose => dose.edad === edad.edadMeses)
          };
      });
  
      return {
          ...edad,
          vacunas: vacunasCorrespondientes
      };
  });
  }

  ngOnInit(): void {
  }

}
