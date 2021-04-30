import { Component, OnInit, Output, EventEmitter } from '@angular/core';
/**
 * Componente que contiene los filtros seleccionados
 * y la sección de ordenamiento de los resultados
 */
@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.css']
})
export class OrderingComponent implements OnInit {

  /**
   * Número que se emite con la cantidad de columnas seleccionadas
   */
  @Output() columnas = new EventEmitter<number>();
  /**
   * Cadena que se emite con la vista seleccionada
   */
  @Output() vista = new EventEmitter<string>();
  /**
   * Número de columnas en las que se muestran ordenados los productos,
   * inicialmente se muestra en cuatro (4) columnas en versión web
   */
   cols = 4;
   /**
    * Arreglo que contiene los filtros que se han aplicado
    */
   // filtros = [];
   filtros = ['Hombre', 'Camisetas', 'Negro', 'Blanco', 'M', 'XL'];
  /**
   * Cadena usada en versión móvil para definir las columnas a mostrar
   */
  dosCol = '';

  /**
   * Constructor donde se define la cantidad de columnas inicial a mostrar en version movil
   */
  constructor() {
    if (window.innerWidth <= 960){
      this.cols = 2;
      this.dosCol = 'active';
    }else{
      this.dosCol = '';
    }
   }

   /**
    * Función utilizada para emitir la cantidad de columnas seleccionada
    */
  ngOnInit(): void {
    this.columnas.emit(this.cols);
  }

  /**
   * Función que asigna la cantidad de columnas a mostrar
   * @param col Cantidad de columnas seleccionadas
   */
   cambiarCols(col: number): void{
    this.cols = col;
    this.columnas.emit(this.cols);
  }
  /**
   * Función que emite la vista seleccinada para los productos
   * @param value Cadena que determina la vista seleccionada
   */
  changeView(value: string): void{
    this.vista.emit(value);
  }

}
