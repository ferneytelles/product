import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente que contiene la tarjeda de producto utilizada
 * en la tienda
 */
@Component({
  selector: 'app-card-store',
  templateUrl: './card-store.component.html',
  styleUrls: ['./card-store.component.css']
})
export class CardStoreComponent implements OnInit {

  /**
   * Cadena que recibe la opción de la vista del producto
   */
  @Input() view: string;
  /**
   * Cadena que recibe la ruta de la imagen del producto
   */
  @Input() url: string;
  /**
   * Cadena que recibe el alto del contenedor de la imagen del producto
   */
  @Input() height: string;
  /**
   * Arreglo que contiene las tallas del producto
   */
  sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];
  /**
   * Arreglo que contiene la disponibilidad de las tallas del producto
   */
  available = [true, true, false, true, true, false, true];
  /**
   * Arreglo que contiene los colores del producto
   */
  // colores = ["#000000","#ffffff","#009136","#ff0000","#feed01"];
  // colores = ["#000000","#ffffff","#009136","#ff0000","#feed01","#f29400","#e2017b","#93117e","#182983","#009de0"];
  colors = ['#000000', '#ffffff', '#009136', '#ff0000', '#feed01', '#f29400', '#e2017b', '#93117e', '#182983', '#009de0', '#ffffff', '#009136', '#ff0000', '#feed01', '#f29400', '#e2017b', '#93117e', '#182983', '#009de0', '#009de0', '#ffffff', '#009136', '#ff0000'];
  /**
   * Arreglo que contine los colores del producto mostrados en la tarjeta
   */
  colors1 = [];

  cant = '';

  constructor() { }

  /**
   * Función utilizada para verificar si el producto tiene más de 5 colores
   * para asignar la cantidad mostrada en el boton de más colores
   */
  ngOnInit(): void {
    this.colors1 = this.colors.slice(0, 5);
    if (this.colors.length > 5){
      if (this.colors.length < 14){
      this.cant = `${this.colors.length - 5}`;
      }else{
        this.cant = '+9';
      }
    }
  }

}
