import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  colInicio = 4;
  cols = 4;
  colores = [];
  // filtros = [];
  filtros = ['Hombre', 'Camisetas', 'Negro', 'Blanco', 'M', 'XL'];
  imgInicio = ['assets/img/1.png', 'assets/img/11.png', 'assets/img/13.png', 'assets/img/12.png', 'assets/img/15.png', 'assets/img/9.png', 'assets/img/14.png', 'assets/img/13.png'];
  imgs = ['assets/img/1.png', 'assets/img/11.png', 'assets/img/9.png', 'assets/img/16.png', 'assets/img/8.png', 'assets/img/11.png', 'assets/img/16.png', 'assets/img/1.png', 'assets/img/8.png', 'assets/img/9.png', 'assets/img/8.png', 'assets/img/11.png', 'assets/img/9.png', 'assets/img/1.png', 'assets/img/16.png', 'assets/img/11.png'];

  constructor() { }

  ngOnInit(): void {
  }
  cambiarCols(col: number): void{
    this.cols = col;
  }

}
