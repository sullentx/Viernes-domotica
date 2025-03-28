import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { WeatherDetailsComponent } from "../weather-details/weather-details.component";
import { ImageHouseComponent } from "../image-house/image-house.component";
import { ToggleOnDorComponent } from "../toggle-on-dor/toggle-on-dor.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, WeatherDetailsComponent, ImageHouseComponent, ToggleOnDorComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
