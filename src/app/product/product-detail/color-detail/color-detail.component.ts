import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente que contiene los botones radio de colores
 */
@Component({
  selector: 'app-color-detail',
  templateUrl: './color-detail.component.html',
  styleUrls: ['./color-detail.component.css']
})
export class ColorDetailComponent implements OnInit {

  /**
   * Arreglo que recibe los colores del producto
   */
  @Input() colores: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
