import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-children-information',
  styleUrls: ['./children-information.component.scss'],
  templateUrl: './children-information.component.html',
})
export class ChildrenInformationComponent implements OnInit {
  
  checked = true;
  
  constructor(private _router: Router,) { }

  ngOnInit(): void {}

  onBack(): void {
    this._router.navigate(['/childrens']);
  }

}
