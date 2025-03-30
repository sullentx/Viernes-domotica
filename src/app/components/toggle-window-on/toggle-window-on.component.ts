import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-toggle-window-on',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './toggle-window-on.component.html',
  styleUrls: ['./toggle-window-on.component.scss']
})
export class ToggleWindowOnComponent {
  @Input() status: boolean = false;
  @Output() statusChange = new EventEmitter<boolean>();

  toggleWindow(event: MatSlideToggleChange): void {
    this.status = event.checked;
    this.statusChange.emit(this.status);
  }
}