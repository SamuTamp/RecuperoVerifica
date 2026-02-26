import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importiamo il terzo (nome esportato: ThirdComponent)
import { ThirdComponent } from '../third/third'; 

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule, ThirdComponent], // <-- Aggiunto qui
  templateUrl: './second.html',
  styleUrl: './second.css'
})
export class SecondComponent {
  tuo_cognome = 'secondo';
}