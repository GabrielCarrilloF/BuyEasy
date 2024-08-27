import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit  {

  @Input() datas: any;
  @Output() doClick = new EventEmitter();
  stars: number = 1;
  constructor() { }

  click(id: number){
    this.doClick.emit(id);
  }

  ngOnInit(){
    this.stars = (Math.floor(this.datas.rating.rate));
  }
}
