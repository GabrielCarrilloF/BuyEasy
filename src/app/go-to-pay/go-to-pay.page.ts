import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ICartItem } from '../interfaces/ICartItem';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-go-to-pay',
  templateUrl: './go-to-pay.page.html',
  styleUrls: ['./go-to-pay.page.scss'],
})
export class GoToPayPage implements OnInit {
  public products: ICartItem[] = [];

  public totalPrice!: number;
  constructor(
    private CartS: CartService, 
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  pay(){
    this.CartS.clsCart();
    this.presentAlert();
    this.router.navigate(['/home']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Process completed',
      subHeader: 'Successful purchase',
      message: 'The purchase ended successfully.',
      buttons: ['Ok'],
    });

    await alert.present();
  }

  ionViewWillEnter(){
    this.products = this.CartS.getCart();
    this.totalPrice = this.products.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }

}
