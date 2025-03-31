import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { trigger, transition, style, animate } from '@angular/animations';

export interface SecurityAlertData {
  id: string;
  title: string;
  message: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  type: 'motion' | 'door' | 'window' | 'gas' | 'fire' | 'water' | 'other';
  location: string;
  timestamp: Date;
  mediaUrl?: string;
  hasCameraAccess?: boolean;
  reviewed?: boolean;
}

@Component({
  selector: 'app-security-alert',
  templateUrl: './security-alert.component.html',
  styleUrls: ['./security-alert.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class SecurityAlertComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input() alertData: SecurityAlertData = {
    id: '',
    title: '',
    message: '',
    severity: 'medium',
    type: 'other',
    location: '',
    timestamp: new Date(),
    hasCameraAccess: false
  };

  @Output() close = new EventEmitter<{ reviewed: boolean }>();
  @Output() emergency = new EventEmitter<SecurityAlertData>();
  @Output() cameraView = new EventEmitter<SecurityAlertData>();

  constructor() { }

  ngOnInit(): void { }

  /**
   * Obtiene el icono correspondiente según el tipo de alerta
   */
  getAlertIcon(): string {
    switch (this.alertData.type) {
      case 'motion':
        return 'motion_sensor';
      case 'door':
        return 'door_front';
      case 'window':
        return 'window';
      case 'gas':
        return 'gas_leak';
      case 'fire':
        return 'local_fire_department';
      case 'water':
        return 'water_drop';
      default:
        return 'warning';
    }
  }

  /**
   * Cierra la alerta
   * @param reviewed Si la alerta fue revisada
   */
  dismiss(reviewed: boolean = false): void {
    this.close.emit({ reviewed });
    this.isVisible = false;
  }

  /**
   * Notifica una emergencia
   */
  notifyEmergency(): void {
    this.emergency.emit(this.alertData);
    // Opcional: No cerrar automáticamente para casos críticos
    if (this.alertData.severity !== 'critical') {
      setTimeout(() => this.dismiss(true), 300);
    }
  }

  /**
   * Abre la vista de cámara
   */
  viewCamera(): void {
    this.cameraView.emit(this.alertData);
    // No cerramos la alerta, el usuario puede querer seguir viéndola
  }
}