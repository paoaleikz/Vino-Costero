import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.scss']
})

export class FloatButtonComponent implements OnInit {
  @Input() icon: string = 'add'; // Default icon
  @Input() position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'bottom-right'; // Default position
  @Output() action = new EventEmitter<void>(); // EventEmitter for button click action

  ngOnInit(): void {
    // Additional initialization logic if needed
  }

  onButtonClick(): void {
    this.action.emit(); // Emit event when button is clicked
  }
}