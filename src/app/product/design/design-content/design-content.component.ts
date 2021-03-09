import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-content',
  templateUrl: './design-content.component.html',
  styleUrls: ['./design-content.component.css']
})
export class DesignContentComponent implements OnInit {

  menores = ['Diseño apto para menores de edad'];
  categorias = ['Hombre','Mujer','Niño y bebé','Acesorios y más','Fechas especiales'];

  constructor() { }

  ngOnInit(): void {
  }

}
