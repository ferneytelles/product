import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() url: string;
  tallas =["XS","S","M","L","XL","2XL","3XL"];
  colores = ["#000000","#ffffff","#009136","#ff0000"];
  menorde7 = false;
  constructor() { 
    if(this.colores.length<7){
      this.menorde7 = true;
    }
  }

  ngOnInit(): void {
  }

}
