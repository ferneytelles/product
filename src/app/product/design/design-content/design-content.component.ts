import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-design-content',
  templateUrl: './design-content.component.html',
  styleUrls: ['./design-content.component.css']
})
export class DesignContentComponent implements OnInit {

  @ViewChild('slider', {static: true}) slider: ElementRef;
  // slider: any;
  activeMenores = true;
  activeCateg = true;
  activeColecc = true;
  activeFondos = true;
  activeEstilos = true;
  activePropiedades = true;
  activePrecio = true;
  menores = ['Diseño apto para menores de edad'];
  categorias = ['Hombre', 'Mujer', 'Niño y bebé', 'Acesorios y más', 'Fechas especiales'];
  colecciones = ['Colombia', 'Cristiano', 'Minimal', 'Asia', 'Viajes'];
  fondos = ['Colores claros', 'Colores oscuros', 'Colores ácidos', 'Colores pastel'];
  estilos = ['Acuarela', 'Lettering', 'Comic', 'Digital', 'Manga'];
  propiedades = ['Diseño de color editable', 'Diseño multicara'];

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
