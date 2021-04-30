import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente que contiene la imagen del producto
 */
@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  /**
   * Booleano que indica si está en versión web
   */
  @Input() webVersion: boolean;
  /**
   * Booleano que indica la vista seleccionada:
   * true: vista del producto
   * false: vista del diseño
   */
  vista = true;

  constructor() { }

  ngOnInit(): void {
  }
  /**
   * Función que cambia entre la vista del producto y el diseño
   * @param value Booleano que determina la vista seleccionada
   */
  change(value: boolean): void{
    this.vista = value;
  }

}
