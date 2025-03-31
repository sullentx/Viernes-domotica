import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-image-house',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './image-house.component.html',
  styleUrls: ['./image-house.component.scss']
})
export class ImageHouseComponent implements OnInit {
  @Input() nameOfHouse: string = 'Casa de Eduardo';
  @ViewChild('fileInput') fileInput!: ElementRef;
  
  imageUrl: string = ''
  defaultImage: string = 'assets/images/house-default.jpg'; 
  
  constructor(private snackBar: MatSnackBar) {}
  
  ngOnInit(): void {
    // Intentar cargar una imagen guardada previamente
    const savedImage = localStorage.getItem('houseImage');
    if (savedImage) {
      this.imageUrl = savedImage;
    } else {
      // Usar imagen por defecto (opcional)
      this.imageUrl = this.defaultImage;
    }
  }
  
  openImageSelector(): void {
    this.fileInput.nativeElement.click();
  }
  
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      
      // Validar que sea una imagen
      if (!file.type.includes('image/')) {
        this.snackBar.open('Por favor seleccione un archivo de imagen válido', 'Cerrar', {
          duration: 3000
        });
        return;
      }
      
      // Límite de tamaño (opcional, 5MB en este ejemplo)
      if (file.size > 5 * 1024 * 1024) {
        this.snackBar.open('La imagen es demasiado grande. Máximo 5MB.', 'Cerrar', {
          duration: 3000
        });
        return;
      }
      
      // Leer y mostrar la imagen
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
        
        // Guardar la imagen en localStorage (para persistencia básica)
        localStorage.setItem('houseImage', this.imageUrl);
        
        this.snackBar.open('Imagen cargada correctamente', 'Cerrar', {
          duration: 2000
        });
      };
      reader.readAsDataURL(file);
    }
  }
  
  // Método para eliminar la imagen (opcional)
  removeImage(): void {
    this.imageUrl = '';
    localStorage.removeItem('houseImage');
    this.snackBar.open('Imagen eliminada', 'Cerrar', {
      duration: 2000
    });
  }
}