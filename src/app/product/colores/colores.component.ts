import { Component, Input, OnInit } from '@angular/core';

/**
 * componente que contiene los ckechbox de los colores
 */
@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  /**
   * arreglo  que recibe los colores a mostrar en los check
   */
  @Input() colores: Array<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
