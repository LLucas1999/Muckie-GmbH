import { Component, OnInit,Input,signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produkt } from '../core/models/produkt.model';

@Component({
  selector: 'app-produkt-detail',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './produkt-detail.html',
  styleUrl: './produkt-detail.css',
})
export class ProduktDetailComponent {
  
  @Input() id?: string; 

  
  produkt = signal<Produkt | undefined>(undefined);

  constructor() {
    
    this.produkt.set({
      id: 1,
      name: 'Test Produkt',
      short_description: 'Ein kleiner Test',
      description: 'Ausführliche Beschreibung',
      price: 9.99,
      stock: 42
    });
  }
}

