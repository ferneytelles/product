import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente que contiene la sección de las etiquetas
 */
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  /**
   * Arreglo que recibe las etiquetas del producto
   */
  @Input() tags: Array<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
