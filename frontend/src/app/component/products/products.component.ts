import { Component, OnInit } from '@angular/core';
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

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        this.initProducts();
      }
    );
  }

  initProducts() {
    let dataRoute = this.route.snapshot.paramMap.get("id");
    if (dataRoute) {
      this.idValue = +dataRoute;
      this.listProductsByCategory(this.idValue);
    } else {
      this.listProducts();
    }
  }

  listProducts(): void {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data;
      }
    );
  }

  listProductsByCategory(id: number): void {
    this.productService.getProductsByCategory(id).subscribe(
      data => {
        this.products = data;
      }
    );
  }

}
