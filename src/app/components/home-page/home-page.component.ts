import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { WeatherDetailsComponent } from "../weather-details/weather-details.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, WeatherDetailsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
