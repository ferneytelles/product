import { Component, OnInit } from '@angular/core';

/**
 * Componente que contiene las tallas del producto
 */
@Component({
  selector: 'app-tallas',
  templateUrl: './tallas.component.html',
  styleUrls: ['./tallas.component.css']
})
export class TallasComponent implements OnInit {

  /**
   * Arreglo que contiene las tallas y la cantidad de cada una
   */
  // tslint:disable-next-line: max-line-length
  tallas = [{talla: 'XS', unds: 65}, {talla: 'S', unds: 15}, {talla: 'M', unds: 43}, {talla: 'L', unds: 0}, {talla: 'XL', unds: 7}, {talla: '2XL', unds: 56}, {talla: '3XL', unds: 98}];

  constructor() { }

  ngOnInit(): void {
  }
  /**
   * Función que verifica si quedan pocas unidades
   * @param value Número que contiene la cantidad de unidades de la talla.
   * @returns Retorna true, si quedan entre 10 y 20 unidades.
   */
  calcPocas(value: number): boolean{
    if (value < 20 && value >= 10){
      return true;
    }else{
      return false;
    }
  }
  /**
   * Función que verifica si quedan menos de 10 unidades
   * @param value Número que contiene la cantidad de unidades de la talla.
   * @returns Retorna true, si quedan menos de 10 unidades
   */
  calcUnds(value: number): boolean{
    if (value < 10 && value > 0){
      return true;
    }else{
      return false;
    }
  }

}
