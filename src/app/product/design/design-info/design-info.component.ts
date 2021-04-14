import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';

/**
 * componente que contiene los detallas del diseño para la version móvil
 */
@Component({
  selector: 'app-design-info',
  templateUrl: './design-info.component.html',
  styleUrls: ['./design-info.component.css']
})
export class DesignInfoComponent implements OnInit {

  /**
   * contenedor de la ventana de los detalles del diseño
   */
  @ViewChild('contenedor', {static: true}) contenedor: ElementRef;
  /**
   * booleano que emite "false" para cerrar los detalles del diseño
   */
  @Output() cerrar = new EventEmitter<boolean>();
  /**
   * cadena que recibe la ruta de la imagen de diseño
   */
  @Input() imagen: string;
  /**
   * cadena que contiene el texto del concepto del diseño
   */
  concepto = 'Diseño inspirado en la cultura deportiva americana, apto para usarse como logotipo publicitario en equipos de baloncesto y en todo tipo de camisetas.';

  constructor() { }

  ngOnInit(): void {
    /**
     * condicion que detecta si el dispositivo es iPhone
     */
    if (/iPad|iPhone/.test(navigator.userAgent)) {
      console.log('iphone');
      /**
       * asignacion de relleno en la parte inferior para dispositivos
       * iphone
       */
      this.contenedor.nativeElement.style.paddingBottom = '75px';
    }
    /**
     * condicion que detecta si se accede desde chrome en dispositivos
     * android
     */
    if (/Android/.test(navigator.userAgent) && navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
      /**
       * asignacion de relleno en la parte inferior para chrome
       * en dispositivos android
       */
      this.contenedor.nativeElement.style.paddingBottom = '75px';
    }
  }
  /**
   * funcion ejecutada por el boton cerrar del menu superior y emite un valor
   * @param valor valor de tipo boolean, que se emite para cerrar los detalles del
   * diseño
   */
  cerrarInfo(valor: boolean): void{
    this.cerrar.emit(valor);
  }

}
