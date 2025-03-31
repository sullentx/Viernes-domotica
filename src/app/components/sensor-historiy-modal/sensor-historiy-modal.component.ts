import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

export interface SensorEvent {
  id: string;
  sensorType: 'motion' | 'door' | 'window' | 'gas';
  eventType: string;
  timestamp: Date;
  value?: any;
  location?: string;
}

export interface SensorHistoryModalData {
  title: string;
  sensorType: 'motion' | 'door' | 'window' | 'gas';
  events: SensorEvent[];
}

@Component({
  selector: 'app-sensor-history-modal',
  templateUrl: './sensor-historiy-modal.component.html',
  styleUrls: ['./sensor-historiy-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class SensorHistoryModalComponent implements OnInit {
  // Filtros
  selectedPeriod: 'today' | 'week' | 'month' = 'today';
  filteredEvents: SensorEvent[] = [];
  
  constructor(
    public dialogRef: MatDialogRef<SensorHistoryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SensorHistoryModalData
  ) {}

  ngOnInit(): void {
    this.filterEvents();
  }

  /**
   * Cierra el diálogo
   */
  closeDialog(): void {
    this.dialogRef.close();
  }

  /**
   * Cambia el periodo de filtrado y actualiza los eventos mostrados
   */
  changePeriod(period: 'today' | 'week' | 'month'): void {
    this.selectedPeriod = period;
    this.filterEvents();
  }

  /**
   * Filtra los eventos según el periodo seleccionado
   */
  filterEvents(): void {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    switch (this.selectedPeriod) {
      case 'today':
        this.filteredEvents = this.data.events.filter(
          event => new Date(event.timestamp) >= today
        );
        break;
      
      case 'week':
        const weekAgo = new Date(now);
        weekAgo.setDate(weekAgo.getDate() - 7);
        this.filteredEvents = this.data.events.filter(
          event => new Date(event.timestamp) >= weekAgo
        );
        break;
      
      case 'month':
        const monthAgo = new Date(now);
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        this.filteredEvents = this.data.events.filter(
          event => new Date(event.timestamp) >= monthAgo
        );
        break;
    }
    
    // Ordenar por fecha (más reciente primero)
    this.filteredEvents.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }

  /**
   * Obtiene el icono según el tipo de evento
   */
  getEventIcon(event: SensorEvent): string {
    switch (event.sensorType) {
      case 'motion':
        return 'motion_sensors';
      case 'door':
        return event.eventType === 'opened' ? 'door_front' : 'door_back';
      case 'window':
        return event.eventType === 'opened' ? 'window' : 'window_closed';
      case 'gas':
        return event.eventType === 'high' ? 'warning' : 'gas_detector';
      default:
        return 'sensors';
    }
  }

  /**
   * Formatea el mensaje del evento
   */
  getEventMessage(event: SensorEvent): string {
    switch (event.sensorType) {
      case 'motion':
        return 'Movimiento detectado';
      case 'door':
        return `Puerta ${event.eventType === 'opened' ? 'abierta' : 'cerrada'}`;
      case 'window':
        return `Ventana ${event.eventType === 'opened' ? 'abierta' : 'cerrada'}`;
      case 'gas':
        if (event.eventType === 'high') {
          return `Nivel alto de gas (${event.value} ppm)`;
        } else {
          return `Nivel normal de gas (${event.value} ppm)`;
        }
      default:
        return 'Evento de sensor';
    }
  }
}