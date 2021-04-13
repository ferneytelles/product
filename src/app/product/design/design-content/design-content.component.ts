import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

/**
 * contenido de la modal de diseños
 */
@Component({
  selector: 'app-design-content',
  templateUrl: './design-content.component.html',
  styleUrls: ['./design-content.component.css']
})
export class DesignContentComponent implements OnInit {

  @ViewChild('categorias', {static: true}) filtros: ElementRef;
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
  /**
   * variable que abre o cierra los filtros
   */
  activeFiltros = false;

  constructor() {}

  ngOnInit(): void {
    /**
     * condicion que detecta si el dispositivo es iPhone
     */
    if (/iPad|iPhone/.test(navigator.userAgent)) {
      console.log('iphone');
      this.filtros.nativeElement.style.marginBottom = "55px";
    }
    console.log(navigator.userAgent);
  }

  /**
   * funcion que para abrir o cerrar la seleccion de diseños en mobiles
   */
  abrirDisenio(valor: string): void{
    this.activeDesign.emit(valor);
  }
  /**
   * funcion que cambia el valor para abrir o cerrar los filtros
   * @param valor true: abre los filtros, false: cierra los filtros
   */
  abrirFiltros(valor: boolean): void{
    this.activeFiltros = valor;
  }
}
