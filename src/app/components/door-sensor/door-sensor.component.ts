import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { SensorEvent } from '../sensor-historiy-modal/sensor-historiy-modal.component';
import { SensorHistoryModalComponent } from '../sensor-historiy-modal/sensor-historiy-modal.component';
@Component({
  selector: 'app-door-sensor',
  templateUrl: './door-sensor.component.html',
  styleUrls: ['./door-sensor.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule]
})
export class DoorSensorComponent implements OnInit {
  // Estados de los sensores
  doorStatus: boolean = false; // false = cerrado, true = abierto
  windowStatus: boolean = false; // false = cerrado, true = abierto
  
  // Última actividad
  doorLastActivity: Date | null = null;
  windowLastActivity: Date | null = null;
  
  // Historial de eventos
  accessEvents: SensorEvent[] = [];
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    // Simular sensores
    this.simulateSensorUpdates();
    
    // Generar algunos eventos históricos para demostración
    this.generateHistoricalEvents();
  }
  
  // Simular actualizaciones de sensores
  simulateSensorUpdates(): void {
    // Simular apertura/cierre de puerta cada 10-30 segundos
    setInterval(() => {
      const previousStatus = this.doorStatus;
      this.doorStatus = !this.doorStatus;
      this.doorLastActivity = new Date();
      
      // Registrar el evento
      this.addAccessEvent('door', this.doorStatus ? 'opened' : 'closed');
    }, Math.random() * 20000 + 10000);
    
    // Simular apertura/cierre de ventana cada 15-45 segundos
    setInterval(() => {
      const previousStatus = this.windowStatus;
      this.windowStatus = !this.windowStatus;
      this.windowLastActivity = new Date();
      
      // Registrar el evento
      this.addAccessEvent('window', this.windowStatus ? 'opened' : 'closed');
    }, Math.random() * 30000 + 15000);
  }
  
  /**
   * Genera eventos históricos aleatorios para demostración
   */
  generateHistoricalEvents(): void {
    const now = new Date();
    const sensorTypes: ('door' | 'window')[] = ['door', 'window'];
    const eventTypes: string[] = ['opened', 'closed'];
    
    // Generar eventos de los últimos 30 días
    for (let i = 0; i < 30; i++) {
      const eventDate = new Date(now);
      eventDate.setDate(now.getDate() - Math.floor(Math.random() * 30));
      eventDate.setHours(
        Math.floor(Math.random() * 24),
        Math.floor(Math.random() * 60)
      );
      
      const sensorType = sensorTypes[Math.floor(Math.random() * sensorTypes.length)];
      const eventType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
      
      this.accessEvents.push({
        id: `access-${i}`,
        sensorType: sensorType,
        eventType: eventType,
        timestamp: eventDate,
        location: sensorType === 'door' ? 'Entrada principal' : 'Ventana sala'
      });
    }
    
    // Ordenar por fecha (más reciente primero)
    this.accessEvents.sort((a, b) => 
      b.timestamp.getTime() - a.timestamp.getTime());
  }
  
  /**
   * Añade un nuevo evento de acceso
   */
  addAccessEvent(sensorType: 'door' | 'window', eventType: string): void {
    const event: SensorEvent = {
      id: `access-${Date.now()}`,
      sensorType: sensorType,
      eventType: eventType,
      timestamp: new Date(),
      location: sensorType === 'door' ? 'Entrada principal' : 'Ventana sala'
    };
    
    this.accessEvents.unshift(event);
  }
  
  /**
   * Ver historial de accesos en un modal
   */
  viewHistory(): void {
    this.dialog.open(SensorHistoryModalComponent, {
      data: {
        title: 'Historial de Accesos',
        sensorType: 'door', // Esto es solo para el título, el modal mostrará ambos tipos
        events: this.accessEvents
      },
      width: '600px',
      panelClass: 'sensor-history-dialog'
    });
  }
}