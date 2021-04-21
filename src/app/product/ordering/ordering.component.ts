import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.css']
})
export class OrderingComponent implements OnInit {

  @Output() columnas = new EventEmitter<number>();
  /**
   * numero de columnas en las que se muestran ordenados los productos,
   * inicialmente se muestra en cuatro (4) columnas en version web
   */
   cols = 4;
   /**
    * arreglo que contiene los filtros que se han aplicado
    */
   // filtros = [];
   filtros = ['Hombre', 'Camisetas', 'Negro', 'Blanco', 'M', 'XL'];
  /**
   * cadena usada en version movil para definir las columnas a mostrar
   */
  dosCol = '';

  /**
   * se define la cantidad de columnas inicial a mostrar en version movil
   */
  constructor() {
    if (window.innerWidth <= 960){
      this.cols = 2;
      this.dosCol = 'active';
    }else{
      this.dosCol = '';
    }
   }

  ngOnInit(): void {
    this.columnas.emit(this.cols);
  }

  /**
   * funcion que asigna la cantidad de columnas a mostrar
   * @param col cantidad de columnas seleccionadas
   */
   cambiarCols(col: number): void{
    this.cols = col;
    this.columnas.emit(this.cols);
  }

}
