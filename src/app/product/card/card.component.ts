import { Component, OnInit, Input } from '@angular/core';

/**
 * componente que contiene la tarjeta del producto utilizada en el carrusel de la venta cruzada
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  /**
   * cadena que recibe la ruta de la imagen del producto
   */
  @Input() url: string;
  /**
   * arreglo que contiene las tallas definidas para el producto
   */
  tallas = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];
  /**
   * arreglo que contiene valores binarios que determinan la disponibilidad
   * de las tallas
   */
  disponible = [true, true, false, true, true, false, true];
  /**
   * arreglo que contiene los colores disponibles del producto
   */
  // colores = ["#000000","#ffffff","#009136","#ff0000","#feed01"];
  // colores = ["#000000","#ffffff","#009136","#ff0000","#feed01","#f29400","#e2017b","#93117e","#182983","#009de0"];
  colores = ['#000000', '#ffffff', '#009136', '#ff0000', '#feed01', '#f29400', '#e2017b', '#93117e', '#182983', '#009de0', '#ffffff', '#009136', '#ff0000', '#feed01', '#f29400', '#e2017b', '#93117e', '#182983', '#009de0', '#009de0', '#ffffff', '#009136', '#ff0000'];
  /**
   * arreglo que contiene los primeros 7 colores del producto
   */
  colores1 = [];
  /**
   * arreglo que contiene los siguientes colores a mostrar del producto
   */
  colores2 = [];
  /**
   * boolean que determina si hay menos de 8 colores
   */
  menorde8 = false;
  /**
   * boolean que determina si hay mas de 8 colores
   */
  mayorde8 = false;
  /**
   * boolean que determina si hay mas de 15 colores
   */
  mayorde15 = false;
  /**
   * boolean que determina el desplegado de los demas colores
   */
  mostrarMas = false;
  /**
   * cadena que contiene la cantidad de colores adicionales
   */
  cantidad = '';


  constructor() {
  }

  /**
   * se obtiene la cantidad de colores y se asignan los colores a los arreglos
   */
  ngOnInit(): void {
    if (this.colores.length <= 8){
      this.menorde8 = true;
    }
    if (this.colores.length > 8){
      this.mayorde8 = true;
      this.colores1 = this.colores.slice(0, 7);
      this.colores2 = this.colores.slice(8, 15);
      if (this.colores.length <= 15){
        this.cantidad = `+${this.colores2.length + 1}`;
      }else{
        this.mayorde15 = true;
        this.colores2 = this.colores.slice(8, 13);
        if (this.colores.length > 16){
          this.cantidad = '+9';
        }else{
          this.cantidad = `+${this.colores2.length + 2}`;
        }
      }
    }
  }

  /**
   * funcion que redefine la cantidad de colores adicionales
   * cuando de desplega la segunda fila de colores
   */
  mas(): void{
    this.mostrarMas = !this.mostrarMas;
    if (this.mostrarMas){
      this.cantidad = '-';
    }else if (!this.mostrarMas && this.mayorde15){
      if (this.colores.length > 16){
        this.cantidad = '+9';
      }else{
        this.cantidad = `+${this.colores2.length + 2}`;
      }
    }else{
      this.cantidad = `+${this.colores2.length + 1}`;
    }
  }
}
