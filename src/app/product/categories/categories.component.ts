import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  menu = ['Camisetas', 'Sacos', 'Gorras', 'Hoodies', 'Polos', 'Tazas', 'Libretas', 'Bolsas Ecológicas', 'Tennis', 'Posters', 'Mochila', 'Cubiertas de celular', 'Chaquetas'];

  constructor() { }

  ngOnInit(): void {
  }

}
