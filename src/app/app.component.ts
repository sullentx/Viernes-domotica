import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { CardComponent } from "./components/card/card.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { WeatherDetailsComponent } from "./components/weather-details/weather-details.component";
import { HomePageComponent } from "./components/home-page/home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, WeatherDetailsComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'viernes';
}
