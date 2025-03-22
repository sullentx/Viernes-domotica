import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/shared/header/header.component';

export const routes: Routes = [
    // Opción 1: Redirección a otra ruta
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    
    // Opción 2: Cargar un componente para una ruta
    { path: 'home', component: HeaderComponent },
    
    // Otras rutas de tu aplicación
    { path: 'card', component: CardComponent },
    { path: 'sidenav', component: SidenavComponent },
    
    // Ruta de comodín para manejar rutas no encontradas (opcional)
    { path: '**', redirectTo: 'home' }
];