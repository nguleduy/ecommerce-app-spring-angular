import {Component, OnInit} from '@angular/core';
import {CartItem} from '../../model/cart-item';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  price = 0;
  total = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.cartItems = this.cartService.cartItems;
    this.cartService.totalPrice.subscribe(
      data => {
        this.price = data;
      }
    );
    this.cartService.totalQuantity.subscribe(
      data => {
        this.total = data;
      }
    );
    this.cartService.computeCartTotals();
  }

  addItem(item: CartItem) {
    this.cartService.addToCart(item);
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item);
  }
}
