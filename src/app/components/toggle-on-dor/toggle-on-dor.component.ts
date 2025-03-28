import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-toggle-on-dor',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './toggle-on-dor.component.html',
  styleUrl: './toggle-on-dor.component.scss'
})
export class ToggleOnDorComponent {
 status = false;
}
