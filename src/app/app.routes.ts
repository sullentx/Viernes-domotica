import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', component:SidenavComponent},
];
