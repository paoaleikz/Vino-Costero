import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  id: number;
  name: string;
  work: string;
  project: string;
  priority: string;
  badge: string;
  budget: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Deep Javiya', work: 'Frontend Devloper', project: 'Flexy Angular', priority: 'Low', badge: 'badge-info', budget: '$3.9k' },
  { id: 2, name: 'Nirav Joshi', work: 'Project Manager', project: 'Hosting Press HTML', priority: 'Medium', badge: 'badge-primary', budget: '$24.5k' },
  { id: 3, name: 'Sunil Joshi', work: 'Web Designer', project: 'Elite Admin', priority: 'High', badge: 'badge-danger', budget: '$12.8k' },
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Critical', badge: 'badge-success', budget: '$2.4k' },
];


@Component({
  selector: 'app-parcela-list',
  templateUrl: './parcela-list.component.html',
  styleUrls: ['./parcela-list.component.scss']
})
export class ParcelaListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'assigned', 'name', 'priority', 'budget'];
  //displayedColumns = [];
  dataSource = ELEMENT_DATA;
  constructor(private _router: Router,) { }

  ngOnInit(): void {
  }

  handleAddClick(): void {
    this._router.navigate(['/parcela/register']);
    // Implement your logic here
  }
  getInfo(): void {
   // this._router.navigate(['/childrens/info']);
  }
}
