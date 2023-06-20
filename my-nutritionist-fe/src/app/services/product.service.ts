import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from './endpoints';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private endpoints = API_ENDPOINTS;

  constructor(private http: HttpClient) { }

  // Recupera tutti i prodotti
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.endpoints.getProducts);
  }

//   // Recupera un prodotto specifico
//   getProduct(id: number): Observable<any> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.get<any>(url);
//   }

//   // Aggiungi un nuovo prodotto
//   addProduct(prodotto: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, prodotto);
//   }

//   // Aggiorna un prodotto esistente
//   updateProduct(prodotto: any): Observable<any> {
//     const url = `${this.apiUrl}/${prodotto.id}`;
//     return this.http.put<any>(url, prodotto);
//   }

//   // Elimina un prodotto
//   deleteProduct(id: number): Observable<any> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.delete<any>(url);
//   }
}
