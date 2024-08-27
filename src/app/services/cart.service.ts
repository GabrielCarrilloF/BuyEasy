import { Injectable } from '@angular/core';
import { ICartItem } from '../interfaces/ICartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: ICartItem[] = [];
  
  constructor() { }

  getCart(): ICartItem[] {
    return this.cart;
  }

  addToCart(item: ICartItem): void {
    this.cart.push(item);
  }
}
