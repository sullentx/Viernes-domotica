import { Component } from '@angular/core';

@Component({
  selector: 'app-image-house',
  standalone: true,
  imports: [],
  templateUrl: './image-house.component.html',
  styleUrl: './image-house.component.scss'
})
export class ImageHouseComponent {
  nameOfHouse: string = 'Casa de Eduardo';
}
