import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { ItemCartComponent } from '../componets/item-cart/item-cart.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    CurrencyPipe
  ],
  declarations: [
    CartPage,
    ItemCartComponent
  ]
})
export class CartPageModule {}
