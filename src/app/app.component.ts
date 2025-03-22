import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { CardComponent } from "./components/card/card.component";
import { HeaderComponent } from "./components/shared/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'viernes';
}
