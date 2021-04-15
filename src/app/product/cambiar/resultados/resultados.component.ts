import { Component, Input, OnInit } from '@angular/core';

/**
 * componente que contiene la parte superior de los resultados
 * de productos: filtros aplicados y seccion de ordenar resultados
 */
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  /**
   * cantidad de columnad en las que se muestran los productos
   * aleatorios antes de que se aplique cualquier filtro
   */
  colInicio = 4;
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
   * arreglo que contiene la ruta de las imagenes de los producto
   * que se muestran inicialmente cuando no hay filtros aplicados
   */
  imgInicio = ['assets/img/1.png', 'assets/img/11.png', 'assets/img/13.png', 'assets/img/12.png', 'assets/img/15.png', 'assets/img/9.png', 'assets/img/14.png', 'assets/img/13.png'];
  /**
   * arreglo que contiene la ruta de las imagenes de los productos
   */
  imgs = ['assets/img/1.png', 'assets/img/11.png', 'assets/img/9.png', 'assets/img/16.png', 'assets/img/8.png', 'assets/img/11.png', 'assets/img/16.png', 'assets/img/1.png', 'assets/img/8.png', 'assets/img/9.png', 'assets/img/8.png', 'assets/img/11.png', 'assets/img/9.png', 'assets/img/1.png', 'assets/img/16.png', 'assets/img/11.png'];
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
  }

  /**
   * funcion que asigna la cantidad de columnas a mostrar
   * @param col cantidad de columnas seleccionadas
   */
  cambiarCols(col: number): void{
    this.cols = col;
  }

}
