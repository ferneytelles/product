import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() url: string;
  tallas =["XS","S","M","L","XL","2XL","3XL"];
  colores = ["#000000","#ffffff","#009136","#ff0000","#feed01","#f29400","#e2017b","#009de0"];
  menorde8 = false;
  constructor() { 
    if(this.colores.length<=8){
      this.menorde8 = true;
    }
  }

  ngOnInit(): void {
  }

}
