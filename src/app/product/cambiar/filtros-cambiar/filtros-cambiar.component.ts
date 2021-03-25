import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtros-cambiar',
  templateUrl: './filtros-cambiar.component.html',
  styleUrls: ['./filtros-cambiar.component.css']
})
export class FiltrosCambiarComponent implements OnInit {

  activePrecio = true;
  activeCategorias = true;
  activeProductos = true;
  activeColores = true;
  categorias = ['Hombre', 'Mujer', 'Niño y bebé', 'Acesorios y más'];
  productos = ['Camisetas', 'Camisetas polo', 'Chaquetas', 'Sudaderas', 'Gorros'];
  colores = ['#000000', '#ffffff', '#0000ff'];

  constructor() { }

  ngOnInit(): void {
  }

}
