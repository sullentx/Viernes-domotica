import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/shared/header/header.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },    
    { path: 'card', component: CardComponent },
    { path: 'sidenav', component: SidenavComponent },
    { path: '**', redirectTo: 'home' }
];