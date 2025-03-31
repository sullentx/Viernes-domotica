import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-toggle-light-out',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './toggle-light-out.component.html',
  styleUrls: ['./toggle-light-out.component.scss']
})
export class ToggleLightOutComponent {
  @Input() status: boolean = false;
  @Output() statusChange = new EventEmitter<boolean>();

  toggleLight(event: MatSlideToggleChange): void {
    this.status = event.checked;
    this.statusChange.emit(this.status);
  }
}