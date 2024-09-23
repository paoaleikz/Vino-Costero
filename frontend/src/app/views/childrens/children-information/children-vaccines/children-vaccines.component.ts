import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  vacuna: number;
  descripcion: string;
  estado: string;
  badge: string;
  fechaVacunacion: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { vacuna: 1, descripcion: 'Deep Javiya',   estado: 'Low', badge: 'badge-info', fechaVacunacion: '$3.9k' },
  { vacuna: 2, descripcion: 'Nirav Joshi',   estado: 'Medium', badge: 'badge-primary', fechaVacunacion: '$24.5k' },
  { vacuna: 3, descripcion: 'Sunil Joshi',   estado: 'High', badge: 'badge-danger', fechaVacunacion: '$12.8k' },
  { vacuna: 4, descripcion: 'Maruti Makwana', estado: 'Critical', badge: 'badge-success', fechaVacunacion: '$2.4k' },
];


@Component({
  selector: 'app-children-vaccines',
  templateUrl: './children-vaccines.component.html',
  styleUrls: ['./children-vaccines.component.scss']
})
export class ChildrenVaccinesComponent implements OnInit {
  displayedColumns: string[] = ['vacuna', 'descripcion', 'estado', 'fechaVacunacion'];
  //displayedColumns = [];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }


}
