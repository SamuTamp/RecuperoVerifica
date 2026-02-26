import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourthComponent } from '../fourth/fourth';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [CommonModule, FourthComponent],
  templateUrl: './third.html',
  styleUrl: './third.css'
})
export class ThirdComponent {
  tuo_cognome = 'terzo';
}