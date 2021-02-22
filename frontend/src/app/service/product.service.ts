import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getProducts(page: number, size: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`http://localhost:8080/api/products?page=${page}&size=${size}`).pipe(map(response => response));
  }

  getProductsByCategory(id: number, page: number, size: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`http://localhost:8080/api/products/by-category?id=${id}&page=${page}&size=${size}`)
      .pipe(map(response => response));
  }

  getProductsByKeyword(keyword: string, page: number, size: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`http://localhost:8080/api/products/by-keyword?keyword=${keyword}&page=${page}&size=${size}`)
      .pipe(map(response => response));
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`http://localhost:8080/api/product?id=${id}`).pipe(map(response => response));
  }

  countProducts(): Observable<number> {
    return this.httpClient.get<number>(`http://localhost:8080/api/count-products`).pipe(map(response => response));
  }

  countProductsByCategory(id: number): Observable<number> {
    return this.httpClient.get<number>(`http://localhost:8080/api/count-products-by-category?id=${id}`).pipe(map(response => response));
  }

  countProductsByKeyword(keyword: string): Observable<number> {
    return this.httpClient.get<number>(`http://localhost:8080/api/count-products-by-keyword?keyword=${keyword}`)
      .pipe(map(response => response));
  }
}
