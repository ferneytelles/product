import { Component, Input, OnInit } from '@angular/core';

/**
 * componente que contiene la parte superior de la busqueda de los diseños:
 * filtros aplicados, etiquetas de los diseño encontrados, 
 */
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  /**
   * arreglo que recibe las colecciones existentes, las cuales que se muestran si no existe
   * ningun filtro aplicado
   */
  @Input() colecciones: Array<any>;
  /**
   * numero de columnas en las que se muestran ordenadoslos diseños,
   * inicialmente se muestra en cinco (5) columnas en version web
   */
  cols = 5;
  /**
   * arreglo de colores para el fondo de las colecciones disponibles 
   */ 
  colores = [];
  /**
   * arreglo que contiene los filtros que se han aplicado
   */
  // filtros = [];
  filtros = ['Menores', 'Hombre', 'Mujer', 'Minimal', 'Oscuros'];
  /**
   * arreglo que contiene la combinacion de etiquetas de los diseños encontrados
   */
  etiquetas = ['Fútbol', 'balón', 'Deportivo', 'Juego', 'Número'];
  /**
   * arreglo que contiene la la ruta de las imagenes de los diseños
   */
  imgs = ['assets/img/copa.png', 'assets/img/basketball.png', 'assets/img/basketball2.png', 'assets/img/bandera.png', 'assets/img/garra.png', 'assets/img/deportista.png', 'assets/img/espirales.png', 'assets/img/copa.png', 'assets/img/basketball.png', 'assets/img/basketball2.png', 'assets/img/bandera.png', 'assets/img/garra.png', 'assets/img/deportista.png', 'assets/img/espirales.png'];
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

  /**
   * genera los colores de fondo 
   */
  ngOnInit(): void {
    if (this.colecciones.length > 0) {
      for (let x = 0; x < this.colecciones.length; x++) {
        this.colores[x] = this.generarNuevoColor();
      }
    }
  }
  /**
   * funcion que asigna la cantidad de columnas a mostrar
   * @param col cantidad de columnas seleccionadas
   */
  cambiarCols(col: number): void{
    this.cols = col;
  }

  /**
   * funcion que genera un color aleatorio con opcacidad de 0.8
   * @returns devuelve una cadena que contiene el valor hexadecimal del color generado
   */
  generarNuevoColor(): string{
    let simbolos: string;
    let color: string;
    simbolos = '0123456789ABCDEF';
    color = '#';
    for (let i = 0; i < 6; i++){
      color = color + simbolos[Math.floor(Math.random() * 16)];
    }
    color = color + '80';
    return color;
  }

}
