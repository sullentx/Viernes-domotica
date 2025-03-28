import { Component } from '@angular/core';
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { CardComponent } from "./components/card/card.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { WeatherDetailsComponent } from "./components/weather-details/weather-details.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SidenavComponent, RouterOutlet, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'viernes';
}
