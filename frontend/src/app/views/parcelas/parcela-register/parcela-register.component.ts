import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-parcela-register',
  styleUrls: ['./parcela-register.component.scss'],
  templateUrl: './parcela-register.component.html',
})
export class ParcelaRegisterComponent implements OnInit {
  
  checked = true;
  
  constructor(private _router: Router,) { }

  ngOnInit(): void {}

  onBack(): void {
    this._router.navigate(['/parcela']);
  }

}
