import { Component, EventEmitter, OnInit, Output } from '@angular/core';

/**
 * contenido de la modal de diseños
 */
@Component({
  selector: 'app-design-content',
  templateUrl: './design-content.component.html',
  styleUrls: ['./design-content.component.css']
})
export class DesignContentComponent implements OnInit {

  /**
   * cadena utilizada para cerrar diseños en movil
   */
  @Output() activeDesign = new EventEmitter<string>();
  /**
   * arreglo que contiene objetos con los filtros chequeables,
   * los objetos tienen los siguientes atributos:
   * 1. cadena con el nombre del filtro,
   * 2. arreglo con las opciones de dicho filtro.
   */
  checkFilter = [{name: 'Menores de edad', items: ['Apto para menores de edad']}, {name: 'Colecciones', items: ['Deportes', 'Animales', 'Colombia', 'Personas', 'Cine', 'Figuras', 'Mascotas', 'Militar', 'Comidas', 'Amor']}, {name: 'Fondos recomendados', items: ['Colores claros', 'Colores oscuros', 'Colores ácidos', 'Colores pastel', 'Texturas']}, {name: 'Estilos', items: ['Acuarela', 'Lettering', 'Comic', 'Digital', 'Manga']}, {name: 'Propiedades', items: ['Diseño de color editable']}];

  activeFiltros = false;

  constructor() {}

  ngOnInit(): void {

  }

  /**
   * funcion que para abrir o cerrar la seleccion de diseños en mobiles
   */
  abrirDisenio(valor: string): void{
    this.activeDesign.emit(valor);
  }

  abrirFiltros(valor: boolean): void{
    this.activeFiltros = valor;
  }
}
