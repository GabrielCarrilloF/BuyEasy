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

  dropToCart(producByid: number){
    const index = this.cart.findIndex((item)=>item.id === producByid);
    if(index !== -1){
      this.cart.splice(index, 1)
    }
  }

  clsCart(){
    this.cart = [];
  }
}
