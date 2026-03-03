import { Component, signal } from '@angular/core';
import { Produkt } from '../core/models/produkt.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produkt-liste',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './produkt-liste.html',
  styleUrl: './produkt-liste.css',
})
export class ProduktListeComponent {
  produkte = signal<Produkt[]>([
    {id:1, name:'LED Display Blau', short_description: 'kleiner, blauer, Display', price:7.99},
    {id:2, name:'Drucktaster LED Blau', short_description: 'blauer Drucktaster', price:6.99},
    {id:3, name:'Drucktaster LED Gelb', short_description: 'gelber Drucktaster', price:6.99},
    {id:3, name:'Drucktaster LED Gelb', short_description: 'gelber Drucktaster', price:6.99},
    {id:3, name:'Drucktaster LED Gelb', short_description: 'gelber Drucktaster', price:6.99},
    {id:3, name:'Drucktaster LED Gelb', short_description: 'gelber Drucktaster', price:6.99},

    
  ])

}