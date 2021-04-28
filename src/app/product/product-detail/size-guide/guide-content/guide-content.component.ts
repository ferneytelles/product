import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-content',
  templateUrl: './guide-content.component.html',
  styleUrls: ['./guide-content.component.css']
})
export class GuideContentComponent implements OnInit {

  /**
   * cadena que contiene el texto de la sugerencia de las tallas
   */
  parrafo = 'Compara los datos con un producto que ya tengas en casa. Para medir las prendas de ropa, lo mejor es colocarlas en posición horizontal sobre una mesa.';
  /**
   * cadena que determina si se muestran las tallas para version movil o web
   */
  tallas = '';

  constructor() {
    if (window.innerWidth < 960){
      this.tallas = 'assets/img/tallas-movil.png';
    }else{
      this.tallas = 'assets/img/tallas.png';
    }
  }

  ngOnInit(): void {
  }

}
