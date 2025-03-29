import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-toggle-on-dor',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './toggle-on-dor.component.html',
  styleUrls: ['./toggle-on-dor.component.scss']
})
export class ToggleOnDorComponent {
  @Input() status: boolean = false;
  @Output() statusChange = new EventEmitter<boolean>();

  toggleDoor(event: MatSlideToggleChange): void {
    this.status = event.checked;
    this.statusChange.emit(this.status);
  }
}