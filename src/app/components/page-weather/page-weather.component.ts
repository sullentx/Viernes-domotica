import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-page-weather',
  templateUrl: './page-weather.component.html',
  styleUrls: ['./page-weather.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, SidenavComponent, HeaderComponent]
})
export class PageClimateComponent implements OnInit {
  // Datos del sensor DHT11 (interiores)
  indoorTemperature: number = 23.5;
  indoorHumidity: number = 45;
  lastIndoorUpdate: Date = new Date();
  
  // Datos del clima exterior (API)
  outdoorTemperature: number = 28.2;
  weatherDescription: string = 'Soleado';
  cityName: string = 'Ciudad de México';
  
  // Cálculos derivados
  temperatureDiff: number = 4.7;
  temperatureDiffIcon: string = 'arrow_upward';
  temperatureDiffClass: string = 'warmer';
  feelsLike: number = 24.3;
  airQualityIndex: number = 42;
  
  // Estado UI
  selectedRange: 'day' | 'week' | 'month' = 'day';
  
  // Pronóstico
  forecastDays = [
    { day: 'Lun', icon: 'wb_sunny', high: 29, low: 18 },
    { day: 'Mar', icon: 'wb_sunny', high: 30, low: 19 },
    { day: 'Mié', icon: 'cloud', high: 27, low: 17 },
    { day: 'Jue', icon: 'thunderstorm', high: 25, low: 16 },
    { day: 'Vie', icon: 'wb_sunny', high: 28, low: 18 }
  ];
  
  // Recomendaciones
  recommendations = [
    { 
      icon: 'air', 
      title: 'Ventilación Recomendada', 
      text: 'Abrir ventanas durante 15 minutos ayudará a regular la temperatura y mejorar la calidad del aire.'
    },
    { 
      icon: 'water', 
      title: 'Humedad Óptima', 
      text: 'La humedad interior está en un nivel ideal. No se requieren acciones.'
    },
    { 
      icon: 'power', 
      title: 'Ahorro Energético', 
      text: 'La diferencia entre temperatura interior y exterior sugiere apagar la climatización.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.calculateDerivedValues();
    this.simulateRealTimeUpdates();
  }
  
  
  calculateDerivedValues(): void {
    // Calcular diferencia de temperatura
    this.temperatureDiff = Math.abs(this.outdoorTemperature - this.indoorTemperature).toFixed(1) as unknown as number;
    
    if (this.outdoorTemperature > this.indoorTemperature) {
      this.temperatureDiffClass = 'warmer';
      this.temperatureDiffIcon = 'arrow_upward';
    } else if (this.outdoorTemperature < this.indoorTemperature) {
      this.temperatureDiffClass = 'colder';
      this.temperatureDiffIcon = 'arrow_downward';
    } else {
      this.temperatureDiffClass = 'same';
      this.temperatureDiffIcon = 'horizontal_rule';
    }
    
    this.feelsLike = this.calculateFeelsLike(this.indoorTemperature, this.indoorHumidity);
    
    this.updateRecommendations();
  }
  
 
  calculateFeelsLike(temp: number, humidity: number): number {
    // Fórmula simplificada de índice de calor
    if (temp >= 27) {
      // Cuando hace calor, la humedad aumenta la sensación térmica
      return parseFloat((temp + (humidity/100) * 3).toFixed(1));
    } else if (temp <= 15) {
      // Cuando hace frío, el viento disminuye la sensación (simulado)
      return parseFloat((temp - 1.5).toFixed(1));
    } else {
      // En temperaturas moderadas, el efecto es menor
      return parseFloat((temp + (humidity/100) - 0.5).toFixed(1));
    }
  }
  
  /**
   * Obtiene descripción del nivel de humedad
   */
  getHumidityStatus(): string {
    if (this.indoorHumidity < 30) {
      return 'Muy seco - Se recomienda humidificador';
    } else if (this.indoorHumidity < 40) {
      return 'Algo seco - Aceptable';
    } else if (this.indoorHumidity <= 60) {
      return 'Nivel óptimo de humedad';
    } else if (this.indoorHumidity <= 70) {
      return 'Algo húmedo - Aceptable';
    } else {
      return 'Muy húmedo - Se recomienda deshumidificador';
    }
  }
  
  /**
   * Obtiene el nivel de confort térmico
   */
  getComfortLevel(): string {
    if (this.feelsLike < 18) {
      return 'Fresco';
    } else if (this.feelsLike <= 24) {
      return 'Confortable';
    } else if (this.feelsLike <= 28) {
      return 'Cálido';
    } else {
      return 'Caluroso';
    }
  }
  
  /**
   * Obtiene clase CSS para calidad del aire
   */
  getAirQualityClass(): string {
    if (this.airQualityIndex <= 25) {
      return 'excellent';
    } else if (this.airQualityIndex <= 50) {
      return 'good';
    } else if (this.airQualityIndex <= 75) {
      return 'moderate';
    } else {
      return 'poor';
    }
  }
  
  /**
   * Obtiene texto descriptivo para calidad del aire
   */
  getAirQualityText(): string {
    if (this.airQualityIndex <= 25) {
      return 'Excelente';
    } else if (this.airQualityIndex <= 50) {
      return 'Buena';
    } else if (this.airQualityIndex <= 75) {
      return 'Moderada';
    } else {
      return 'Deficiente';
    }
  }
  
  /**
   * Cambia el rango de tiempo para el gráfico
   */
  changeTimeRange(range: 'day' | 'week' | 'month'): void {
    this.selectedRange = range;
    // Aquí se implementaría la lógica para actualizar el gráfico
  }
  
  /**
   * Actualiza recomendaciones basadas en condiciones actuales
   */
  updateRecommendations(): void {
    const newRecommendations = [];
    
    // Recomendación basada en diferencia de temperatura
    if (this.outdoorTemperature < this.indoorTemperature && this.temperatureDiff > 3) {
      newRecommendations.push({
        icon: 'air',
        title: 'Enfriamiento Natural',
        text: 'El exterior está ' + this.temperatureDiff + '°C más fresco. Considere abrir ventanas para refrescar.'
      });
    } else if (this.outdoorTemperature > this.indoorTemperature && this.temperatureDiff > 3) {
      newRecommendations.push({
        icon: 'window',
        title: 'Conservar Frescura',
        text: 'El exterior está ' + this.temperatureDiff + '°C más caliente. Mantenga ventanas cerradas.'
      });
    }
    
    // Recomendación basada en humedad
    if (this.indoorHumidity < 30) {
      newRecommendations.push({
        icon: 'water_drop',
        title: 'Ambiente Muy Seco',
        text: 'Considere usar un humidificador para aumentar la humedad y mejorar el confort.'
      });
    } else if (this.indoorHumidity > 70) {
      newRecommendations.push({
        icon: 'water_drop',
        title: 'Humedad Elevada',
        text: 'Use deshumidificador o mejore la ventilación para reducir la humedad.'
      });
    } else if (this.indoorHumidity >= 40 && this.indoorHumidity <= 60) {
      newRecommendations.push({
        icon: 'check_circle',
        title: 'Humedad Óptima',
        text: 'La humedad interior está en niveles ideales para el confort y la salud.'
      });
    }
    
    // Recomendación basada en calidad del aire
    if (this.airQualityIndex > 50) {
      newRecommendations.push({
        icon: 'air_purifier',
        title: 'Calidad de Aire Reducida',
        text: 'Considere usar purificador de aire o ventilar en horas de menor contaminación.'
      });
    }
    
    // Limitar a 3 recomendaciones
    this.recommendations = newRecommendations.slice(0, 3);
  }
  
  /**
   * Simula actualizaciones en tiempo real para la demo
   */
  simulateRealTimeUpdates(): void {
    // Actualizar valores del sensor interior cada minuto con pequeñas variaciones
    setInterval(() => {
      // Variación pequeña en temperatura (-0.3 a +0.3)
      const tempVariation = (Math.random() * 0.6 - 0.3);
      this.indoorTemperature = parseFloat((this.indoorTemperature + tempVariation).toFixed(1));
      
      // Variación pequeña en humedad (-1 a +1)
      const humVariation = Math.floor(Math.random() * 3 - 1);
      this.indoorHumidity = Math.min(Math.max(this.indoorHumidity + humVariation, 25), 75);
      
      // Actualizar timestamp
      this.lastIndoorUpdate = new Date();
      
      // Recalcular valores derivados
      this.calculateDerivedValues();
    }, 60000);
  }
}