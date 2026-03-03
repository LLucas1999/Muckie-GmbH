import { Component, OnInit,Input,inject,signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produkt } from '../core/models/produkt.model';
import { ProduktServices } from '../services';


@Component({
  selector: 'app-produkt-detail',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './produkt-detail.html',
  styleUrl: './produkt-detail.css',
})
export class ProduktDetailComponent {
  
  @Input() id?: string; 

  private produktService = inject(ProduktServices);
  produkt = signal<Produkt | undefined>(undefined);

 ngOnInit() {
  if (this.id) {
    this.produktService.getById(Number(this.id)).subscribe({
      next: (data) => {
        
        this.produkt.set(data); 
      },
      error: (err) => console.error("Verbindung zum Backend fehlgeschlagen", err)
    });
  }
}
  
  }

