import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { HttpClientModule } from '@angular/common/http';
import { ProducsService } from '../api/producs.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    HttpClientModule,
    CurrencyPipe
  ],
  declarations: [DetailsPage],
  providers: [ProducsService]
})
export class DetailsPageModule {}
