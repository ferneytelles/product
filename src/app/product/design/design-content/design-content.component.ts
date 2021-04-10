import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-content',
  templateUrl: './design-content.component.html',
  styleUrls: ['./design-content.component.css']
})
export class DesignContentComponent implements OnInit {

  /**
   * arreglo que contiene objetos con los filtros chequeables,
   * los objetos tienen los siguientes atributos:
   * 1. cadena con el nombre del filtro,
   * 2. arreglo con las opciones de dicho filtro.
   */
  checkFilter = [{name: 'Menores de edad', items: ['Apto para menores de edad']}, {name: 'Colecciones', items: ['Deportes', 'Animales', 'Colombia', 'Personas', 'Cine', 'Figuras', 'Mascotas', 'Militar', 'Comidas', 'Amor']}, {name: 'Fondos recomendados', items: ['Colores claros', 'Colores oscuros', 'Colores ácidos', 'Colores pastel', 'Texturas']}, {name: 'Estilos', items: ['Acuarela', 'Lettering', 'Comic', 'Digital', 'Manga']}, {name: 'Propiedades', items: ['Diseño de color editable']}];

  activeDesign = false;

  constructor() {

   }

  ngOnInit(): void {

  }

  /**
   * funcion que para abrir o cerrar la seleccion de diseños en mobiles
   */
  abrirDiseño(): void{
    this.activeDesign = !this.activeDesign;
  }
}
