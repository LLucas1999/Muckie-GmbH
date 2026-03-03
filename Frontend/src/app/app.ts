import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduktListeComponent } from './produkt-liste/produkt-liste'; 
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,ProduktListeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PinguinDelikatessen');
}
