import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { FooterComponent } from '../componets/footer/footer.component';
import { CardComponent } from '../componets/card/card.component';
import { NotFoundComponent } from '../componets/not-found/not-found.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    FooterComponent,
    CardComponent,
    NotFoundComponent
  ]
})
export class HomePageModule {}
