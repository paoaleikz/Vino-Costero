import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-children-register',
  styleUrls: ['./children-register.component.scss'],
  templateUrl: './children-register.component.html',
})
export class ChildrenRegisterComponent implements OnInit {
  
  checked = true;
  
  constructor(private _router: Router,) { }

  ngOnInit(): void {}

  onBack(): void {
    this._router.navigate(['/childrens']);
  }

}
