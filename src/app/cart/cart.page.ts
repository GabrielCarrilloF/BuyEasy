import { Component, NgModule, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ICartItem } from '../interfaces/ICartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})


export class CartPage implements OnInit {
  public products: ICartItem[] = [];
  public totalPrice!: number;

  constructor(private CartS: CartService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.products = this.CartS.getCart();
    this.totalPrice = this.products.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }
  
}
