import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WeatherData {
  temperature: number;
  weatherType: 'sunny' | 'cloudy' | 'rainy' | 'stormy';
  humidity: number;
}

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  weatherData: WeatherData = {
    temperature: 24,
    weatherType: 'sunny',
    humidity: 80
  };
  
  weatherStatus: string = '';
  weatherIcon: string = '';
  
  ngOnInit(): void {
    this.setWeatherStatus();
    this.setWeatherIcon();
  }
  
  private setWeatherStatus(): void {
    // Determinar si es caluroso, templado o frío según la temperatura
    if (this.weatherData.temperature >= 28) {
      this.weatherStatus = 'Caluroso';
    } else if (this.weatherData.temperature >= 18) {
      this.weatherStatus = 'Templado';
    } else {
      this.weatherStatus = 'Frío';
    }
  }
  
  private setWeatherIcon(): void {
    // Establecer el icono basado en el tipo de clima
    switch(this.weatherData.weatherType) {
      case 'sunny':
        this.weatherIcon = 'https://www.metaweather.com/static/img/weather/c.svg';
        break;
      case 'cloudy':
        this.weatherIcon = 'https://www.metaweather.com/static/img/weather/hc.svg';
        break;
      case 'rainy':
        this.weatherIcon = 'https://www.metaweather.com/static/img/weather/lr.svg';
        break;
      case 'stormy':
        this.weatherIcon = 'https://www.metaweather.com/static/img/weather/t.svg';
        break;
      default:
        this.weatherIcon = 'https://www.metaweather.com/static/img/weather/c.svg';
    }
  }
  
  getWeatherStatusClass(): string {
    if (this.weatherStatus === 'Caluroso') return 'hot';
    if (this.weatherStatus === 'Templado') return 'mild';
    if (this.weatherStatus === 'Frío') return 'cold';
    return '';
  }
}