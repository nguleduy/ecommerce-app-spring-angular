import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {ActivatedRoute} from '@angular/router';
import {CartItem} from '../../model/cart-item';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        const id = this.route.snapshot.paramMap.get('id');
        this.getProductById(+id);
      }
    );
  }

  getProductById(id: number): void {
    this.productService.getProductById(id).subscribe(
      data => {
        this.product = data;
      }
    );
  }

  addToCart(product: Product): void {
    const tmpProduct = new CartItem(product);
    this.cartService.addToCart(tmpProduct);
  }
}
