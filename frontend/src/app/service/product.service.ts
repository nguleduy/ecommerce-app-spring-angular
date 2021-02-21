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

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:8080/api/products').pipe(map(response => response));
  }

  getProductsByCategory(id: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`http://localhost:8080/api/products/by-category?id=${id}`).pipe(map(response => response));
  }
}
