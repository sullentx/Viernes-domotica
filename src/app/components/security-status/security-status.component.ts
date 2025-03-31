import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface SecurityMetric {
  label: string;
  value: string | number;
  status: 'good' | 'warning' | 'danger';
}

@Component({
  selector: 'app-security-status',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './security-status.component.html',
  styleUrls: ['./security-status.component.scss']
})
export class SecurityStatusComponent implements OnInit {
  securityLevel: 'safe' | 'warning' | 'danger' = 'safe';
  lastCheck: Date = new Date();
  
  securityMetrics: SecurityMetric[] = [
    { label: 'Incidencias este mes', value: 3, status: 'good' },
    { label: 'Sensores activos', value: '8/10', status: 'warning' },
    { label: 'Días sin alarmas', value: 5, status: 'good' },
    { label: 'Nivel de batería', value: '92%', status: 'good' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.determineSecurityLevel();
  }

  getStatusIcon(): string {
    switch (this.securityLevel) {
      case 'safe': return 'verified';
      case 'warning': return 'warning';
      case 'danger': return 'error';
      default: return 'security';
    }
  }

  getStatusMessage(): string {
    switch (this.securityLevel) {
      case 'safe': return 'Todo está seguro';
      case 'warning': return 'Atención requerida';
      case 'danger': return '¡Alerta de seguridad!';
      default: return 'Estado de seguridad';
    }
  }

  runSecurityCheck(): void {
    // Simulación de verificación de seguridad
    console.log('Ejecutando verificación de seguridad...');
    // Actualizar la fecha de última revisión
    this.lastCheck = new Date();
    
    // Lógica para verificar el estado y actualizar securityLevel
    this.determineSecurityLevel();
  }

  private determineSecurityLevel(): void {
    // Lógica para determinar el nivel de seguridad basado en métricas
    const hasWarnings = this.securityMetrics.some(m => m.status === 'warning');
    const hasDangers = this.securityMetrics.some(m => m.status === 'danger');
    
    if (hasDangers) {
      this.securityLevel = 'danger';
    } else if (hasWarnings) {
      this.securityLevel = 'warning';
    } else {
      this.securityLevel = 'safe';
    }
  }
}