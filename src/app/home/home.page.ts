import { Component, OnInit } from '@angular/core';
import { ProducsService } from '../api/producs.service';
import { environment } from 'src/environments/environment.prod';
import { Category, IProductCatalog } from '../interfaces/IProductCatalog';
import { NavController } from '@ionic/angular';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  public products: IProductCatalog[] = [];
  public categories!: Category; 
  url = environment.URL_BASE + 'products';
  public size!: number;
  constructor(
    private readonly producsService: ProducsService,
    private readonly navCTR: NavController,
    private CartS: CartService
  ) {}
  async ngOnInit() {
    this.products = await this.producsService.get<IProductCatalog[]>(this.url);
    this.categories = await this.producsService.get<Category>(this.url+'/categories');

    console.log('Samir es caga');
    this.size = this.CartS.getCart().length;
  }
  

  async onOptionSelected(event: any) {
    if(event.detail.value != 'all'){
      this.products = await this.producsService.get<IProductCatalog[]>(this.url+'/category/'+event.detail.value);
    }else{
      this.ngOnInit();
    }
  }

  public doNavegate(id: number) {
    console.log(id);
    this.navCTR.navigateForward('details/'+id);
  }
  
}