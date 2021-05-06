import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente que contiene el banner superior de las landing
 */
@Component({
  selector: 'app-banner-top',
  templateUrl: './banner-top.component.html',
  styleUrls: ['./banner-top.component.css']
})
export class BannerTopComponent implements OnInit {

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
