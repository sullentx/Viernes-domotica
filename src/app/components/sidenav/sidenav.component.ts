import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsDialogComponent } from '../notifications-dialog/notifications-dialog.component';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
  
]
})
export class SidenavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    constructor(private dialog:MatDialog) {}

    openNotificationsDialog(event: MouseEvent): void {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
      
      const dialogRef = this.dialog.open(NotificationsDialogComponent, {
        width: '450px',
        data: {} // Puedes pasar datos al diálogo si es necesario
      });
  
      // Opcional: manejar el cierre del diálogo
      dialogRef.afterClosed().subscribe(result => {
        console.log('El diálogo de notificaciones fue cerrado', result);
      });
    }
}
