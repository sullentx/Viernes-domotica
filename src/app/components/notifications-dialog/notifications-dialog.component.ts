import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
@Component({
  selector: 'app-notifications-dialog',
  templateUrl: './notifications-dialog.component.html',
  styleUrls: ['./notifications-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogActions, MatDialogContent]
})
export class NotificationsDialogComponent {
  // Ejemplo de notificaciones
  notifications = [
    { 
      id: 1, 
      title: 'Alerta de seguridad', 
      message: 'Se detectó un movimiento en la entrada principal', 
      time: '10:45 AM',
      read: false
    },
    { 
      id: 2, 
      title: 'Clima', 
      message: 'Advertencia: posible lluvia intensa hoy', 
      time: 'Ayer',
      read: true
    },
    { 
      id: 3, 
      title: 'Recordatorio', 
      message: 'Actualizar contraseña del sistema', 
      time: 'Hace 2 días',
      read: true
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<NotificationsDialogComponent>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  markAsRead(notification: any): void {
    notification.read = true;
  }

  deleteNotification(id: number): void {
    this.notifications = this.notifications.filter(notification => notification.id !== id);
  }
}