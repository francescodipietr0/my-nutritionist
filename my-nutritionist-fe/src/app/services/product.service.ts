import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { API_ENDPOINTS } from './endpoints';
import { ProductDto } from '../dto/dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private endpoints = API_ENDPOINTS;

  constructor(private http: HttpClient) { }

  // Recupera tutti i prodotti
  getAllProducts(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(this.endpoints.getProducts());
  }

  // Recupera tutti i prodotti presenti
  getExistingProducts(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(this.endpoints.getProducts())
      .pipe(
        map(products => {
          return products.filter(product => product.stock >= 0)
        })
      );
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

  // Aggiorna un prodotto esistente
  updateProduct(product: ProductDto): Observable<ProductDto> {
    return this.http.put<ProductDto>(this.endpoints.updateProduct(product.id), product);
  }

//   // Elimina un prodotto
//   deleteProduct(id: number): Observable<any> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.delete<any>(url);
//   }
}
