import { Component, OnInit, inject, signal } from '@angular/core';
import { ProduktServices } from '../services';
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
  private productService = inject(ProduktServices);
  produkte = signal<Produkt[]>([])
  
  ngOnInit(){
    this.productService.getAll().subscribe({
      next: (data) => this.produkte.set(data),
      error: (err) => console.error('Backend nicht erreichbar', err)
    })
  }
}