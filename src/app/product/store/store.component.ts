import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  carousel = ['Cuello redondo', 'Cuello en "V"', 'Cuello tortuga', 'Manga corta', 'Manga 3/4', 'Manga larga', 'Regular Fit', 'Slim Fit', 'Muscle Fit'];
  columnas: number;
  productos = ['assets/img/1.png', 'assets/img/2.png', 'assets/img/3.png', 'assets/img/4.png', 'assets/img/6.png', 'assets/img/7.png', 'assets/img/8.png', 'assets/img/9.png', 'assets/img/4.png', 'assets/img/3.png', 'assets/img/7.png', 'assets/img/2.png', 'assets/img/8.png', 'assets/img/espirales.png'];

  constructor() {}

  ngOnInit(): void {
  }

}
