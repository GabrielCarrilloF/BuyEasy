import { Component, Input, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss'],
})
export class ItemCartComponent  implements OnInit {
  @Input() datas!: ICartItem;

  constructor(private CartS: CartService) { }

  ngOnInit() {}

  dilite(id: number){
    this.CartS.dropToCart(id);
  }
}
