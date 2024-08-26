import { Component, OnInit } from '@angular/core';
import { ProducsService } from '../api/producs.service';
import { environment } from 'src/environments/environment.prod';
import { IProductCatalog } from '../interfaces/IProductCatalog';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  public products: IProductCatalog[] = [];

  constructor(private readonly producsService: ProducsService) {}
  async ngOnInit() {
    const url = environment.URL_BASE + 'products';
    this.products = await this.producsService.get<IProductCatalog[]>(url);
  }

  
  
}
