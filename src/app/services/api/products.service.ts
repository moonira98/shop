import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './ model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl: string = 'https://api.escuelajs.co/api/v1/products'
  http = inject(HttpClient)

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  addProduct(payload: any): Observable<any> {
    return this.http.post<any>('https://api.escuelajs.co/api/v1/products/', payload)
  }

  getProductById(id: any): Observable<Product[]> {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }
}
