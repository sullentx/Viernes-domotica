import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-gas-sensor',
  templateUrl: './gas-sensor.component.html',
  styleUrls: ['./gas-sensor.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule]
})
export class GasSensorComponent implements OnInit, OnDestroy {
  // Valores del sensor
  gasLevel: number = 0; // ppm (partes por millón)
  gasThreshold: number = 50; // umbral de peligro en ppm
  isGasLevelHigh: boolean = false;
  lastReading: Date = new Date();
  
  // Para la visualización
  gasLevelPercentage: number = 0;
  thresholdPercentage: number = 0;
  
  // Para simulación (reemplazar con WebSocket real)
  private dataSubscription: Subscription | null = null;
  
  constructor() { }

  ngOnInit(): void {
    // Calcular la posición del umbral
    this.thresholdPercentage = (this.gasThreshold / 100) * 100;
    
    // En un entorno real, esto sería una conexión WebSocket
    this.simulateGasReadings();
  }
  
  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
  
  /**
   * Simula lecturas del sensor de gas
   * En producción, esto sería reemplazado por la conexión WebSocket
   */
  simulateGasReadings(): void {
    this.dataSubscription = interval(3000).subscribe(() => {
      // Simular fluctuaciones normales o un evento de fuga de gas
      if (Math.random() > 0.9 && this.gasLevel < 20) {
        // Simular un evento de fuga
        this.gasLevel = Math.min(this.gasLevel + Math.random() * 30 + 10, 100);
      } else {
        // Fluctuación normal
        this.gasLevel = Math.max(0, this.gasLevel + (Math.random() * 10 - 5));
      }
      
      // Actualizar variables derivadas
      this.gasLevelPercentage = this.gasLevel;
      this.isGasLevelHigh = this.gasLevel >= this.gasThreshold;
      this.lastReading = new Date();
    });
  }
  
  /**
   * Conectar a WebSocket real (en producción)
   */
  connectToRealTimeData(): void {
    // Código para conectar con el WebSocket y recibir datos en tiempo real
    
    /* Ejemplo conceptual:
    this.webSocketService.connect('gas-sensor').subscribe(
      (data) => {
        this.gasLevel = data.level;
        this.gasLevelPercentage = this.gasLevel;
        this.isGasLevelHigh = this.gasLevel >= this.gasThreshold;
        this.lastReading = new Date();
      },
      (error) => console.error('WebSocket error:', error)
    );
    */
  }
  
  /**
   * Acción para ventilar la casa
   */
  ventilateHome(): void {
    console.log('Ventilando casa...');
    // Aquí integrarías con sistemas de ventilación
    // Por ejemplo, abriendo ventanas inteligentes o activando extractores
  }
}