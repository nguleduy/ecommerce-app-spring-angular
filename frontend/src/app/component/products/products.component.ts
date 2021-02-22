import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  idValue: number;
  keywordValue: string;

  page = 0;
  size = 10;
  numElement = 0;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        this.initProducts();
      }
    );
  }

  initProducts(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const keyword = this.route.snapshot.paramMap.get('keyword');
    if (id) {
      this.idValue = +id;
      this.listProductsByCategory(this.idValue);
    } else if (keyword) {
      this.keywordValue = keyword;
      this.listProductsByKeyword(this.keywordValue);
    } else {
      this.listProducts();
    }
  }

  listProducts(): void {
    this.productService.countProducts().subscribe(
      data => {
        this.numElement = data;
      }
    );
    this.productService.getProducts(this.page > 0 ? this.page - 1 : 0, this.size).subscribe(
      data => {
        this.products = data;
      }
    );
  }

  listProductsByCategory(id: number): void {
    this.productService.countProductsByCategory(id).subscribe(
      data => {
        this.numElement = data;
      }
    );
    this.productService.getProductsByCategory(id, this.page > 0 ? this.page - 1 : 0, this.size).subscribe(
      data => {
        this.products = data;
      }
    );
  }

  listProductsByKeyword(keyword: string): void {
    this.productService.countProductsByKeyword(keyword).subscribe(
      data => {
        this.numElement = data;
      }
    );
    this.productService.getProductsByKeyword(keyword.trim(), this.page > 0 ? this.page - 1 : 0, this.size).subscribe(
      data => {
        this.products = data;
      }
    );
  }

  done(): void {
    this.initProducts();
  }

  editPageSize(event: Event): void {
    this.size = +(event.target as HTMLInputElement).value;
    this.initProducts();
  }

}
