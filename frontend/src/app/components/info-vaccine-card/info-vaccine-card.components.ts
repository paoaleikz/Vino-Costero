import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-info-vaccine-card',
  templateUrl: './info-vaccine-card.component.html',
  styleUrls: ['./info-vaccine-card.component.scss']
})

export class InfoVaccineCardComponent implements OnInit {
  @Input() title: string = ''; // Default icon
  @Input() lstDosis: any[]=[];
  @Input() lstPrevenciones: any[]=[];

  @Output() action = new EventEmitter<void>(); // EventEmitter for button click action

  ngOnInit(): void {
    // Additional initialization logic if needed
  }

  onButtonClick(): void {
    this.action.emit(); // Emit event when button is clicked
  }
}