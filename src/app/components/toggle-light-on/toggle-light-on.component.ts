import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-toggle-light-on',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './toggle-light-on.component.html',
  styleUrls: ['./toggle-light-on.component.scss']
})
export class ToggleLightOnComponent {
  @Input() status: boolean = false;
  @Output() statusChange = new EventEmitter<boolean>();
  @Input() roomName: string = 'Habitación'; 

  toggleLight(event: MatSlideToggleChange): void {
    this.status = event.checked;
    this.statusChange.emit(this.status);
  }
}