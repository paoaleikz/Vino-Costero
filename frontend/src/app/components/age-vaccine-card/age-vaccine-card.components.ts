import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-age-vaccine-card',
  templateUrl: './age-vaccine-card.component.html',
  styleUrls: ['./age-vaccine-card.component.scss']
})

export class AgeVaccineCardComponent implements OnInit {
  @Input() title: string = ''; // Default icon
  @Input() lstVaccine: any[]=[];

  @Output() action = new EventEmitter<void>(); // EventEmitter for button click action

  ngOnInit(): void {
    // Additional initialization logic if needed
  }

  onButtonClick(): void {
    this.action.emit(); // Emit event when button is clicked
  }
}