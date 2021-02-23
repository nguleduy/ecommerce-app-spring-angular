import {Component, OnInit} from '@angular/core';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {

  price = 0;
  total = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.updateCart();
  }

  updateCart(): void {
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
  }

}
