import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoToPayPageRoutingModule } from './go-to-pay-routing.module';

import { GoToPayPage } from './go-to-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoToPayPageRoutingModule,
    CurrencyPipe
  ],
  declarations: [GoToPayPage]
})
export class GoToPayPageModule {}
