import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tallas',
  templateUrl: './tallas.component.html',
  styleUrls: ['./tallas.component.css']
})
export class TallasComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  tallas = [{talla: 'XS', unds: 65}, {talla: 'S', unds: 15}, {talla: 'M', unds: 43}, {talla: 'L', unds: 0}, {talla: 'XL', unds: 7}, {talla: '2XL', unds: 56}, {talla: '3XL', unds: 98}];

  constructor() { }

  ngOnInit(): void {
  }
  calcPocas(valor: number): boolean{
    let resp: boolean;
    if (valor < 20 && valor >= 10){
      resp = true;
    }else{
      resp = false;
    }
    return resp;
  }
  calcUnds(valor: number): boolean{
    let resp: boolean;
    if (valor < 10 && valor > 0){
      resp = true;
    }else{
      resp = false;
    }
    return resp;
  }

}
