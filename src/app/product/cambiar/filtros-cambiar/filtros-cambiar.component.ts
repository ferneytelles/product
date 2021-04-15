import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filtros-cambiar',
  templateUrl: './filtros-cambiar.component.html',
  styleUrls: ['./filtros-cambiar.component.css']
})
export class FiltrosCambiarComponent implements OnInit {

  /**
   * elemento contenedor de los filtros
   */
   @ViewChild('categorias', {static: true}) filtros: ElementRef;
  /**
   * cadena que se emite para cerrar cambiar producto en movil
   */
  @Output() activeProduct = new EventEmitter<string>();

  /**
   * arreglo que contiene objetos con los filtros de tipo radiobuttom
   */
  radioFilter = [{name: 'Categorias', items: ['Hombre', 'Mujer', 'Niño y bebé', 'Acesorios y más']}, {name: 'Productos', items: ['Camisetas', 'Camisetas polo', 'Chaquetas', 'Sudaderas', 'Gorros']}];
  /**
   * arreglo que contiene los colores para el filtro chequeable de los colores
   */
  colores = ['#000000', '#ffffff', '#595959', '#009136', '#feed01', '#f29400', '#ff0000', '#e2017b', '#93117e', '#182983', '#009de0', '#e0ff77', '#b6e9ff'];
  /**
   * arreglo  que contiene objetos con los filtros de tipo checkbox
   */
  checkFilter = [{name: 'Talla', items: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']}, {name: 'Caras imprimibles', items: ['Frente', 'Espalda', 'Dos caras']}, {name: 'Material', items: ['Lana', 'Algodon', 'Lino', 'Seda', 'Poliester']}, {name: 'Tipo de cuello', items: ['Cuello redondo', 'Cuello en "V"', 'Cuello tortuga']}, {name: 'Tipo de manga', items: ['Manga corta', 'Manga 3/4', 'Manga larga']}, {name: 'Tipo de ajuste', items: ['Regular Fit', 'Slim Fit', 'Muscle Fit']}, {name: 'Metodo de impresión', items: ['Sublimación', 'Papel transfer', 'Vinilo textil', 'Serigrafía', 'Impresión directa']}];

  /**
   * variable que abre o cierra los filtros
   */
   activeFiltros = false;

  constructor() { }

  ngOnInit(): void {
    // condicion que detecta si el dispositivo es iPhone
    if (/iPad|iPhone/.test(navigator.userAgent)) {
      console.log('iphone');
      this.filtros.nativeElement.style.paddingBottom = '75px';
    }
    // condicion que detecta si se accede desde chrome en dispositivos android
    if (/Android/.test(navigator.userAgent) && navigator.userAgent.toLowerCase().indexOf('chrome') > -1){
      this.filtros.nativeElement.style.paddingBottom = '75px';
    }
  }
  /**
   * funcion que permite cerrar el cambiar producto en moviles emitiendo una variable
   */
   abrirProducto(valor: string): void{
    this.activeProduct.emit(valor);
  }

  /**
   * funcion que cambia el valor para abrir o cerrar los filtros
   * @param valor true: abre los filtros, false: cierra los filtros
   */
   abrirFiltros(valor: boolean): void{
    this.activeFiltros = valor;
  }

}
