import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component'; // Asegúrate de importar tu componente Home

export const routes: Routes = [
    // Ruta por defecto - redirige a home
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    
    // Ruta de login - muestra el componente LoginComponent
    { path: 'login', component: LoginComponent },
    
    // Ruta de home - muestra el componente HomePageComponent
    { path: 'home', component: HomePageComponent },
    
    // Otras rutas de tu aplicación
    { path: 'card', component: CardComponent },
    { path: 'sidenav', component: SidenavComponent },
    
    // Ruta de comodín - redirige a home cuando no se encuentra la ruta
    { path: '**', redirectTo: 'home' }
];