import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit  {

  @Input() datas: any;
  stars: number = 1;
  constructor() { }

  ngOnInit(){
    this.stars = (Math.floor(this.datas.rating.rate));
  }
}
