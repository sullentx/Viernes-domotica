// src/app/services/geolocation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  constructor(private http: HttpClient) {}

  // Obtener coordenadas del usuario
  getCurrentPosition(): Observable<GeolocationPosition> {
    return new Observable(observer => {
      if (!navigator.geolocation) {
        observer.error('Geolocalización no soportada');
      }

      navigator.geolocation.getCurrentPosition(
        position => {
          observer.next(position);
          observer.complete();
        },
        error => observer.error(error),
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 300000 }
      );
    });
  }

  getLocationName(): Observable<string> {
    return this.getCurrentPosition().pipe(
      switchMap(position => {
        const { latitude, longitude } = position.coords;
        return this.http.get(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
      }),
      map((data: any) => {
        const city = data.address.city || data.address.town || data.address.village || '';
        const state = data.address.state || '';
        return city || state || 'Ubicación desconocida';
      }),
      catchError(() => of('Tuxtla Gutierrez'))
    );
  }
}