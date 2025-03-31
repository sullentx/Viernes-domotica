import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { SecurityStatusComponent } from "../security-status/security-status.component";
import { MotionSensorComponent } from "../motion-sensor/motion-sensor.component";
import { DoorSensorComponent } from "../door-sensor/door-sensor.component";
import { GasSensorComponent } from "../gas-sensor/gas-sensor.component";
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-page-security',
  standalone: true,
  imports: [HeaderComponent, MatIcon,SidenavComponent, SecurityStatusComponent, MotionSensorComponent, DoorSensorComponent, GasSensorComponent,],
  templateUrl: './page-security.component.html',
  styleUrl: './page-security.component.scss'
})
export class PageSecurityComponent {

}
