import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-security-status',
  templateUrl: './security-status.component.html',
  styleUrls: ['./security-status.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule]
})
export class SecurityStatusComponent implements OnInit {
  // Estado general de seguridad (normal, warning, alert)
  securityLevel: 'normal' | 'warning' | 'alert' = 'normal';
  
  // Contador de incidencias
  totalIncidents: number = 0;
  
  // Clase CSS basada en número de incidencias
  incidentsClass: 'normal' | 'warning' | 'alert' = 'normal';
  
  // Sensores activos
  activeSensors: number = 0;
  
  // Última actualización
  lastUpdate: Date = new Date();
  
  constructor() { }

  ngOnInit(): void {
    // Simular datos (en producción vendrían de un servicio)
    this.simulateData();
  }
  
  /**
   * Simula datos para la demostración
   */
  simulateData(): void {
    // Número aleatorio de incidencias (0-10)
    this.totalIncidents = Math.floor(Math.random() * 10);
    
    // Determinar clase CSS para incidencias
    if (this.totalIncidents === 0) {
      this.incidentsClass = 'normal';
    } else if (this.totalIncidents <= 3) {
      this.incidentsClass = 'warning';
    } else {
      this.incidentsClass = 'alert';
    }
    
    // Determinar nivel general de seguridad
    if (this.totalIncidents === 0) {
      this.securityLevel = 'normal';
    } else if (this.totalIncidents <= 3) {
      this.securityLevel = 'warning';
    } else {
      this.securityLevel = 'alert';
    }
    
    // Número aleatorio de sensores (3-6)
    this.activeSensors = Math.floor(Math.random() * 4) + 3;
  }
  
  /**
   * Obtiene el icono según el estado de seguridad
   */
  getStatusIcon(): string {
    switch (this.securityLevel) {
      case 'normal':
        return 'verified';
      case 'warning':
        return 'warning';
      case 'alert':
        return 'error';
      default:
        return 'security';
    }
  }
  
  /**
   * Obtiene el mensaje según el estado de seguridad
   */
  getStatusMessage(): string {
    switch (this.securityLevel) {
      case 'normal':
        return 'Todo en orden';
      case 'warning':
        return 'Atención requerida';
      case 'alert':
        return 'Acción inmediata requerida';
      default:
        return 'Estado de seguridad';
    }
  }
}