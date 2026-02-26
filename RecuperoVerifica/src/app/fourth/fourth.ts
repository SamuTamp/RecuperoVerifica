import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fourth',
  standalone: true,
  imports: [CommonModule], // Nessun componente da importare, è l'ultimo!
  templateUrl: './fourth.html',
  styleUrl: './fourth.css'
})
export class FourthComponent {
  tuo_cognome = 'quarto';
}