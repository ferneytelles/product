import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  vista = true;
  tags = ['Cuentos', 'Anime', 'Comics', 'Ilustración', 'Manga'];
  /**
   * arreglo que contiene los colores para el filtro chequeable de los colores
   */
  colores = ['#000000', '#ffffff', '#595959', '#009136', '#feed01', '#f29400', '#ff0000', '#e2017b', '#93117e', '#182983', '#009de0', '#e0ff77', '#b6e9ff'];
  webVersion = false;

  constructor() {
    if (window.innerWidth > 960){
      this.webVersion = true;
    }else{
      this.webVersion = false;
    }
   }

  ngOnInit(): void {
  }
  change(valor: boolean): void{
    this.vista = valor;
  }

}
