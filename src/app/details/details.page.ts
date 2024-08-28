import { Component, OnInit } from '@angular/core';
import { ProducsService } from '../api/producs.service';
import { environment } from 'src/environments/environment.prod';
import { IProductCatalog } from '../interfaces/IProductCatalog';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ICartItem } from '../interfaces/ICartItem';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  
  public products!: IProductCatalog;
  quantity: number = 1;
  constructor(
    private readonly producsService: ProducsService,
    private readonly ActRoutd: ActivatedRoute,
    private CartS: CartService
  ) { }

  addQuantity(){
    this.quantity = this.quantity+1;
  }

  removeQuantity(){
    if(this.quantity > 1){
      this.quantity = this.quantity-1 ;
    }
  }

  addCart(){
    const newItem: ICartItem = 
    { 
      id: this.products.id,
      quantity: this.quantity,
      price: this.products.price*this.quantity,
      title: this.products.title,
      image: this.products.image,
      category: this.products.category
    }; 
    this.CartS.addToCart(newItem);
  }
  async ngOnInit() {
    this.ActRoutd.params.subscribe(async(ActRoutd) => {
      const url = environment.URL_BASE + 'products/'+ActRoutd['id'];
      this.products = await this.producsService.get<IProductCatalog>(url);
    });
  }

  

}
