import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-control-produccion-vinos-register',
  styleUrls: ['./control-produccion-vinos.component.scss'],
  templateUrl: './control-produccion-vinos.component.html',
})
export class ControlProduccionVinosRegisterComponent implements OnInit {
  
  checked = true;
  
  constructor(private _router: Router,) { }

  ngOnInit(): void {}

  onBack(): void {
    this._router.navigate(['/control-produccion-vinos-register']);
  }

}
