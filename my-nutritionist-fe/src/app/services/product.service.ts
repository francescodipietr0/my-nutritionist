import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { API_ENDPOINTS } from './endpoints';
import { ProductDto } from '../dto/dto';
import { ProductStatus } from 'src/types/types';

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

  // Recupera i prodotti disponibili
  getAvailableProducts(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(this.endpoints.getAvailableProducts());
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


  reorderProducts(products: ProductDto[]): ProductDto[] {
    let enoughProducts: ProductDto[] = [];
    let warningProducts: ProductDto[] = [];
    let emptyProducts: ProductDto[] = [];

    // TODO: gestire il caso in cui stock e consumption sono 0??? gestirlo direttamente in fase di inserimento!
    products.forEach(product => {
      if(product.stock >= (product.consumption * 2)) {
        product.status = "enough";
        enoughProducts.push(product);
      }
      else if(product.stock >= product.consumption) {
        product.status = "warning";
        warningProducts.push(product);
      }
      else {
        product.status = "empty";
        emptyProducts.push(product);
      }
    });
    products = [...enoughProducts, ...warningProducts, ...emptyProducts];

    return products;
  }

  getProductIconStatus(status: ProductStatus): String {
    if(status === "enough") {
      return "assets/svg/check_circle_black.svg";
    }
    if(status === "warning") {
      return "assets/svg/warning_black.svg";
    }
    if(status === "empty") {
      return "assets/svg/error_black.svg";
    }

    return "";
  }
}
