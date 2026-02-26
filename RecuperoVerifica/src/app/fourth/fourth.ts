import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fourth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fourth.html',
  styleUrl: './fourth.css'
})
export class FourthComponent {
  tuo_cognome = 'quarto';
}