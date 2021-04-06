import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() colecciones: Array<any>;
  cols = 5;
  colores = [];
  // filtros = [];
  filtros = ['Menores', 'Hombre', 'Mujer', 'Minimal', 'Oscuros'];
  etiquetas = ['Fútbol', 'balón', 'Deportivo', 'Juego', 'Número'];
  imgs = ['assets/img/copa.png', 'assets/img/basketball.png', 'assets/img/basketball2.png', 'assets/img/bandera.png', 'assets/img/garra.png', 'assets/img/deportista.png', 'assets/img/espirales.png', 'assets/img/copa.png', 'assets/img/basketball.png', 'assets/img/basketball2.png', 'assets/img/bandera.png', 'assets/img/garra.png', 'assets/img/deportista.png', 'assets/img/espirales.png'];

  constructor() {
  }

  ngOnInit(): void {
    if (this.colecciones.length > 0) {
      for (let x = 0; x < this.colecciones.length; x++) {
        this.colores[x] = this.generarNuevoColor();
      }
    }
  }

  cambiarCols(col: number): void{
    this.cols = col;
  }

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
