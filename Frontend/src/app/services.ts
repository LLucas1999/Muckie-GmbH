import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Produkt } from './produkt-liste/produkt'; 



@Injectable({
  providedIn: 'root',
})
export class ProduktServices { 
  private apiUrl = 'http://127.0.0.1:8000/api/products/'; 

  constructor(private http: HttpClient) { } 

  getAll(): Observable<Produkt[]> { 
    return this.http.get<Produkt[]>(this.apiUrl);   
  }

  getById(id:number): Observable<Produkt> { 
    return this.http.get<Produkt>(`${this.apiUrl}${id}/`);   
  }

  create(data: Produkt): Observable<Produkt> {
    return this.http.post<Produkt>(this.apiUrl, data);
  } 

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}${id}/`); 
  }
}