import { Component, OnInit } from '@angular/core';

/**
 * Componente que contiene los botones de compartir
 */
@Component({
  selector: 'app-to-share',
  templateUrl: './to-share.component.html',
  styleUrls: ['./to-share.component.css']
})
export class ToShareComponent implements OnInit {

  /**
   * Booleano que determina la visibilidad del aviso de enlace copiado
   */
  link = false;

  constructor() { }

  ngOnInit(): void {
  }
  /**
   * Función que hace que se muestre el aviso por 3 segundos
   */
  linkCopy(): void{
    this.link = true;
    setTimeout(() => {
      this.link = false;
    }, 3000);
  }

}
