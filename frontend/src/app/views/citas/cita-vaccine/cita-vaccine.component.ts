import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}

interface Hijo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cita-vaccine',
  templateUrl: './cita-vaccine.component.html',
  styleUrls: ['./cita-vaccine.component.scss']
})
export class CitaVaccineComponent implements OnInit {
  vacunas: Food[] = [
    {value: 'steak-0', viewValue: 'Vacuna1'},
    {value: 'pizza-1', viewValue: 'Vacuna2'},
    {value: 'tacos-2', viewValue: 'Vacuna3'},
  ];

  hijos: Hijo[] = [
    {value: '0', viewValue: 'Nestor Tzunun'},
    {value: '1', viewValue: 'Paola Merida'},
    {value: '2', viewValue: 'Aleix Tzunun'},
  ];
  selectedDate: Date;

  constructor(private _router:Router,) {
    this.selectedDate = new Date(); // Fecha seleccionada inicialmente (opcional)
  }
  ngOnInit(): void {
  }

  onBack(): void {
    this._router.navigate(['/citas']);
    // Implement your logic here
  }
}
