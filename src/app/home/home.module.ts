import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { FooterComponent } from '../componets/footer/footer.component';
import { CardComponent } from '../componets/card/card.component';
import { NotFoundComponent } from '../componets/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ProducsService } from '../api/producs.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    CurrencyPipe
  ],
  declarations: [
    HomePage,
    FooterComponent,
    CardComponent,
    NotFoundComponent
  ],
  providers: [ProducsService]
})
export class HomePageModule {}
