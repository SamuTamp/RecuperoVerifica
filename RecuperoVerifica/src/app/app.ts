import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from './second/second';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SecondComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tuo_cognome = 'app'; 
}