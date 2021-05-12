import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente que contiene los banner de colecciones y arte de la index.
 */
@Component({
  selector: 'app-banner-index',
  templateUrl: './banner-index.component.html',
  styleUrls: ['./banner-index.component.css']
})
export class BannerIndexComponent implements OnInit {

  /**
   * Cadena que recibe el titulo del banner
   */
   @Input() categori: string;
   /**
    * Cadena que recibe el texto del banner
    */
   @Input() text: string;
   /**
    * Cadena que recibe la ruta de la imagen del banner
    */
   @Input() url: string;

  constructor() { }

  ngOnInit(): void {
  }

}
