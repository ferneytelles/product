import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

/**
 * componente que contiene los detalles del producto
 */
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  /**
   * elemento que tiene todo el contenido los detalles del producto
   */
  @ViewChild('contenedor', {static: true}) contenedor: ElementRef;
  /**
   * boolean que se emite para cerrar los detalles del producto
   */
  @Output() close = new EventEmitter<boolean>();
  /**
   * boolean que determina si esta disponible el boton seleccionar
   * y los colores chequeables
   */
  @Input() seleccionar: boolean;
  /**
   * arreglo que contiene los colores mostrados en los detalles
   */
  colores = ['#000000', '#ffffff', '#595959', '#009136', '#feed01', '#f29400', '#ff0000', '#e2017b', '#93117e', '#182983', '#009de0', '#e0ff77', '#b6e9ff', '#ffd799'];
  /**
   * cadena que contiene el texto de la sugerencia de las tallas
   */
  parrafo = 'Compara los datos con un producto que ya tengas en casa. Para medir las prendas de ropa, lo mejor es colocarlas en posición horizontal sobre una mesa.';
  /**
   * cadena que determina si se muestran las tallas para version movil o web
   */
  tallas = '';

  /**
   * contructor donde se asigna la ruta de la imagen dependiendo
   * si esta en version web o movil
   */
  constructor() {
    if (window.innerWidth < 960){
      this.tallas = 'assets/img/tallas-movil.png';
    }else{
      this.tallas = 'assets/img/tallas.png';
    }
   }

  /**
   * se agrega espacio de relleno para dispositivos iphone
   * y navegadores chrome en android
   */
  ngOnInit(): void {

    // condicion que detecta si el dispositivo es iPhone
    if (/iPad|iPhone/.test(navigator.userAgent)) {
      console.log('iphone');
      //  asignacion de relleno en la parte inferior para dispositivos iphone
      this.contenedor.nativeElement.style.paddingBottom = '75px';
    }
    //  condicion que detecta si se accede desde chrome en dispositivos android
    if (/Android/.test(navigator.userAgent) && navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
      // asignacion de relleno en la parte inferior para chrome en dispositivos android
      this.contenedor.nativeElement.style.paddingBottom = '75px';
    }
  }

  /**
   * funcion que emite una variable para cerrar los detalles del producto
   * @param valor boolean emitido para cerrar los detalles
   */
  closeDetails(valor: boolean): void{
    this.close.emit(valor);
  }

}
