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
  constructor(
    private readonly producsService: ProducsService,
    private readonly ActRoutd: ActivatedRoute,
    private CartS: CartService
  ) { }

  addCart(){
    const newItem: ICartItem = { id: this.products.id, quantity: 5}; 
    this.CartS.addToCart(newItem);

    console.log(this.CartS.getCart());
  }
  async ngOnInit() {
    this.ActRoutd.params.subscribe(async(ActRoutd) => {
      const url = environment.URL_BASE + 'products/'+ActRoutd['id'];
      this.products = await this.producsService.get<IProductCatalog>(url);
      console.log(this.products);
    });
  }

}
