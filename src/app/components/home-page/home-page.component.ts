import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { WeatherDetailsComponent } from "../weather-details/weather-details.component";
import { ImageHouseComponent } from "../image-house/image-house.component";
import { ToggleOnDorComponent } from "../toggle-on-dor/toggle-on-dor.component";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { ToggleWindowOnComponent } from "../toggle-window-on/toggle-window-on.component";
import { ToggleLightOnComponent } from "../toggle-light-on/toggle-light-on.component";
import { ToggleLightOutComponent } from "../toggle-light-out/toggle-light-out.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, WeatherDetailsComponent, ImageHouseComponent, ToggleOnDorComponent, SidenavComponent, ToggleWindowOnComponent, ToggleLightOnComponent, ToggleLightOutComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
