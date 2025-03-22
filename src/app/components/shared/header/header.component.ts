import { Component, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SidenavComponent } from "../../sidenav/sidenav.component";
import { ClockComponent } from "../../clock/clock.component";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatCardModule, SidenavComponent, ClockComponent],

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
