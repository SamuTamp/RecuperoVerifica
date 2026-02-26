import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importiamo il quarto (nome esportato: FourthComponent)
import { FourthComponent } from '../fourth/fourth';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [CommonModule, FourthComponent], // <-- Aggiunto qui
  templateUrl: './third.html',
  styleUrl: './third.css'
})
export class ThirdComponent {
  tuo_cognome = 'terzo';
}