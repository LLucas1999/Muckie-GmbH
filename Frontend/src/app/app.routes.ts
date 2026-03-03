import { Routes } from '@angular/router';
import { ProduktListeComponent } from './produkt-liste/produkt-liste';
import { ProduktDetailComponent } from './produkt-detail/produkt-detail';

export const routes: Routes = [
    {path:'', component: ProduktListeComponent},
    {path:'detail/:id', component: ProduktDetailComponent}
];
