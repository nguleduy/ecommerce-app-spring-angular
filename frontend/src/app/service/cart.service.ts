import {Injectable} from '@angular/core';
import {CartItem} from '../model/cart-item';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() {
  }

  addToCart(cartItem: CartItem): void {
    let existInCart;
    let existCartItem: CartItem;
    if (this.cartItems.length > 0) {
      existCartItem = this.cartItems.find(item => item.id === cartItem.id);
    }
    existInCart = (existCartItem !== undefined);
    if (existInCart) {
      existCartItem.quantity++;
    } else {
      this.cartItems.push(cartItem);
    }
    this.computeCartTotals();
  }

  public computeCartTotals(): void {
    let totalQuantityValue = 0;
    let totalPriceValue = 0;
    for (const item of this.cartItems) {
      totalQuantityValue += item.quantity;
      totalPriceValue += item.quantity * item.unitPrice;
    }
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }

  removeItem(item: CartItem): void {
    item.quantity--;
    if (item.quantity === 0) {
      this.remove(item);
    } else {
      this.computeCartTotals();
    }
  }

  public remove(item: CartItem) {
    const index = this.cartItems.findIndex(i => i.id === item.id);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.computeCartTotals();
    }
  }
}
