import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  carousel = ['Cuello redondo', 'Cuello en "V"', 'Cuello tortuga', 'Manga corta', 'Manga 3/4', 'Manga larga', 'Regular Fit', 'Slim Fit', 'Muscle Fit'];

  productos = ['assets/img/1.png', 'assets/img/2.png', 'assets/img/3.png', 'assets/img/4.png', 'assets/img/6.png', 'assets/img/7.png', 'assets/img/8.png', 'assets/img/9.png', 'assets/img/4.png', 'assets/img/3.png', 'assets/img/7.png', 'assets/img/2.png', 'assets/img/8.png', 'assets/img/espirales.png'];
  filtros = false;
  width = '';
  columnas: number;

  constructor() {}

  ngOnInit(): void {
    this.setCardWidth();
  }

  openFiltros(valor: boolean): void{
    this.filtros = valor;
  }

  setColumns(valor: number): void{
    this.columnas = valor;
    this.setCardWidth();
  }

  setCardWidth(): void{
    if (this.columnas === 4) {
      this.width = '25%';
    }else if (this.columnas === 3) {
      this.width = '33.3%';
    }else if (this.columnas === 2) {
      this.width = '50%';
    }else if (this.columnas === 1) {
      this.width = '100%';
    }
  }

}
