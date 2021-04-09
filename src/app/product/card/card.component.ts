import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() url: string;
  tallas = ["XS","S","M","L","XL","2XL","3XL"];
  disponible = [true, true, false, true, true, false, true];
  // colores = ["#000000","#ffffff","#009136","#ff0000","#feed01"];
  // colores = ["#000000","#ffffff","#009136","#ff0000","#feed01","#f29400","#e2017b","#93117e","#182983","#009de0"];
  colores = ["#000000","#ffffff","#009136","#ff0000","#feed01","#f29400","#e2017b","#93117e","#182983","#009de0","#ffffff","#009136","#ff0000","#feed01","#f29400","#e2017b","#93117e","#182983","#009de0","#009de0","#ffffff","#009136","#ff0000"];
  colores1 = [];
  colores2 = [];
  menorde8 = false;
  mayorde8 = false;
  mayorde15 = false;
  mostrarMas = false;
  cantidad = '';


  constructor() { 
    
  }

  ngOnInit(): void {
    if(this.colores.length<=8){
      this.menorde8 = true;
    }
    if(this.colores.length>8){
      this.mayorde8 = true;
      this.colores1 = this.colores.slice(0,7);
      this.colores2 = this.colores.slice(8,15);
      if (this.colores.length<=15){
        this.cantidad = `+${this.colores2.length + 1}`;
      }else{
        this.mayorde15 = true;
        this.colores2 = this.colores.slice(8,13);
        if(this.colores.length>16){
          this.cantidad = '+9';
        }else{
          this.cantidad = `+${this.colores2.length + 2}`;
        }  
      }      
    }
  }
  mas(): void{
    this.mostrarMas = !this.mostrarMas;
    if (this.mostrarMas){
      this.cantidad = '-';
    }else if(!this.mostrarMas && this.mayorde15){
      if(this.colores.length>16){
        this.cantidad = '+9';
      }else{
        this.cantidad = `+${this.colores2.length + 2}`;
      }
    }else{
      this.cantidad = `+${this.colores2.length + 1}`;
    }
  }

}
