import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { interval, Subscription } from 'rxjs';
import { SensorEvent } from '../sensor-historiy-modal/sensor-historiy-modal.component';
import { SensorHistoryModalComponent } from '../sensor-historiy-modal/sensor-historiy-modal.component';
@Component({
  selector: 'app-motion-sensor',
  templateUrl: './motion-sensor.component.html',
  styleUrls: ['./motion-sensor.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule]
})
export class MotionSensorComponent implements OnInit, OnDestroy {
  // Estado del sensor
  motionDetected: boolean = false;
  lastDetection: Date | null = null;
  
  // Historial de eventos (en producción, estos vendrían de un servicio)
  motionEvents: SensorEvent[] = [];
  
  // Para simulación (reemplazar con WebSocket real)
  private dataSubscription: Subscription | null = null;
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    // En un entorno real, esto sería una conexión WebSocket
    this.simulateMotionDetection();
    
    // Generar algunos eventos históricos para demostración
    this.generateHistoricalEvents();
  }
  
  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
  
  /**
   * Simula lecturas del sensor PIR
   * En producción, esto sería reemplazado por la conexión WebSocket
   */
  simulateMotionDetection(): void {
    this.dataSubscription = interval(5000).subscribe(() => {
      // Simular detección de movimiento con probabilidad del 30%
      const newMotionState = Math.random() > 0.7;
      
      // Solo actualizar cuando hay un cambio o cuando se detecta movimiento
      if (newMotionState !== this.motionDetected || newMotionState) {
        this.motionDetected = newMotionState;
        
        if (this.motionDetected) {
          this.lastDetection = new Date();
          
          // Registrar el evento
          this.addMotionEvent();
          
          // Cuando hay movimiento, automáticamente volver a estado sin movimiento después de 3-7 segundos
          setTimeout(() => {
            this.motionDetected = false;
          }, Math.random() * 4000 + 3000);
        }
      }
    });
  }
  
  /**
   * Genera eventos históricos aleatorios para demostración
   */
  generateHistoricalEvents(): void {
    const now = new Date();
    
    // Generar eventos de los últimos 30 días
    for (let i = 0; i < 20; i++) {
      const eventDate = new Date(now);
      eventDate.setDate(now.getDate() - Math.floor(Math.random() * 30));
      eventDate.setHours(
        Math.floor(Math.random() * 24),
        Math.floor(Math.random() * 60)
      );
      
      this.motionEvents.push({
        id: `motion-${i}`,
        sensorType: 'motion',
        eventType: 'detected',
        timestamp: eventDate,
        location: 'Sala principal'
      });
    }
    
    // Ordenar por fecha (más reciente primero)
    this.motionEvents.sort((a, b) => 
      b.timestamp.getTime() - a.timestamp.getTime());
  }
  
  /**
   * Añade un nuevo evento de movimiento
   */
  addMotionEvent(): void {
    const event: SensorEvent = {
      id: `motion-${Date.now()}`,
      sensorType: 'motion',
      eventType: 'detected',
      timestamp: new Date(),
      location: 'Sala principal'
    };
    
    this.motionEvents.unshift(event);
  }
  
  /**
   * Ver historial de detecciones en un modal
   */
  viewHistory(): void {
    this.dialog.open(SensorHistoryModalComponent, {
      data: {
        title: 'Historial de Detecciones de Movimiento',
        sensorType: 'motion',
        events: this.motionEvents
      },
      width: '600px',
      panelClass: 'sensor-history-dialog'
    });
  }
}