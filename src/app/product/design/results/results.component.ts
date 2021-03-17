import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() colecciones: Array<any>;
  colores = [];
  filtros = false;

  constructor() { }

  ngOnInit(): void {
    if (this.colecciones.length > 0) {
      for (let x = 0; x < this.colecciones.length; x++) {
        this.colores[x] = this.generarNuevoColor();
      }
    }
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
