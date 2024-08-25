import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor() {}
  data = {
    title: 'Zapatos deportivos',
    description: 'Zapatos cómodos para correr',
    price: '$89.99',
    imgUrl: 'https://ionicframework.com/docs/img/demos/card-media.png'
  };
}
