import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  carousel = ['Cuello redondo', 'Cuello en "V"', 'Cuello tortuga', 'Manga corta', 'Manga 3/4', 'Manga larga', 'Regular Fit', 'Slim Fit', 'Muscle Fit'];

  constructor() {}

  ngOnInit(): void {
  }

}
