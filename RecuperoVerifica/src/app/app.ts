import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// Importiamo il secondo componente
import { SecondComponent } from './second/second'; // <-- Controlla che il percorso sia giusto per te!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SecondComponent], // <-- Aggiunto qui per la struttura
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Variabile richiesta dalla consegna
  tuo_cognome = 'app'; 
}