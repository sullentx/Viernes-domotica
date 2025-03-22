import { Component, OnInit, OnDestroy } from '@angular/core';
import {formatDate } from '@angular/common';
import { GeolocationService } from '../../services/geolocation.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-clock',
  standalone: true,
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
  imports: [MatProgressSpinnerModule]
})
export class ClockComponent implements OnInit, OnDestroy {
  date: string = '';
  time: string = '';
  location: string = 'Obteniendo ubicación...';
  isLoadingLocation: boolean = true;
  private locationSubscription: any;
  private timer: any;

  constructor(private geolocationService: GeolocationService){}
  ngOnInit(): void {
    this.updateDateTime();
    
    this.timer = setInterval(() => {
      this.updateDateTime();
    }, 1000);
    this.getLocation();
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (this.locationSubscription) {
      this.locationSubscription.unsubscribe();
    }
  }

  private updateDateTime(): void {
    const now = new Date();
    
    this.date = formatDate(now, 'EEEE, MMMM d', 'es-MX');
    
        this.time = formatDate(now, 'HH:mm', 'es-MX');
  }

  private getLocation (): void{
    this.isLoadingLocation = true;
    this.locationSubscription = this.geolocationService.getLocationName().subscribe({
      next: (locationName) => {
        this.location = locationName;
        this.isLoadingLocation = false;
      }, 
      error: (error) => {
        console.error('Error al obtener la ubicación', error);
        this.location = 'Ubicación desconocida';
        this.isLoadingLocation = false;
      }
    })
  }
}