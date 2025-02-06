import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../components/cart/cart.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllCarts(): Observable<Cart[]> {
    console.log('getProducts service');
    return this.http.get<Cart[]>(`${this.apiUrl}/cart/allcarts`);
  }

//   deleteProduct(id: number): Observable<any> {
//     console.log('getProducts service');
//     return this.http.delete(`${this.apiUrl}/products/deleteproduct${id}`);
//   }

//   // Méthode pour créer un nouveau produit
//   createProduct(product: Product): Observable<Product> {
//     return this.http.post<Product>(`${this.apiUrl}/products/createproduct`, product);
//   }

//   // Méthode pour mettre à jour un produit existant
//   updateProduct(id: number, product: Partial<Product>): Observable<Product> {
    
//     return this.http.put<Product>(`${this.apiUrl}/products/updateproduct${id}`, product);
//   }
}
