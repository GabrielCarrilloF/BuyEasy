import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  
  @Input() imgUrl: any;
  @Input() price: any;
  @Input() title: any;
  @Input() description: any;

  constructor() { }


}
