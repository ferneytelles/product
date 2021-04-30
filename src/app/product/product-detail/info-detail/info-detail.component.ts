import { Component, OnInit } from '@angular/core';

/**
 * Componente que contiene la información del producto
 */
@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.css']
})
export class InfoDetailComponent implements OnInit {

  /**
   * Arreglo que contiene la información del diseño
   */
  // tslint:disable-next-line: max-line-length
  design = [{name: '* Diseño de color editable:', attr: 'SI'}, {name: '* Diseño en multiples areas:', attr: 'NO'}, {name: '* Inspiración:', attr: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem.'}];
  /**
   * Arreglo que contiene la información del producto
   */
  product = [
    {name: '* Categoría:', attr: 'Camiseta básica hombre.'},
    {name: '* Atributos:', attr: 'cuello redondo, ajuste clásico, manga corta.'},
    {name: '* Material:', attr: '100% Algodón'},
    {name: '* Tipo de impresión:', attr: 'Sublimado'},
    {name: '* ', attr: '¡Confección colombiana de alta calidad! excelentes resultados en estampado.'},
    {name: '* Tallas:', attr: 'S, M, L, XL, XXL (Verifica existencias en tienda).'},
    {name: '* Calidad del material:', attr: 'Premium 150 g/m².'},
    {name: '* Composición:', attr: '100 % algodón (antracita: 50 % algodón, 50 % poliéster; azul jaspeado: 50 % algodón, 50 % poliéster; gris jaspeado: 85 % algodón, 15 % viscosa; rojo bordeaux salpicado: 65 % algodón, 35 % poliéster).'},
    {name: '* Impresión admitida:', attr: 'DTG. serigrafía, vinilo téxtil.'},
    {name: '* Colores:', attr: '12 (Verifica existencias en tienda)'},
  ];
  /**
   * Booleano que indica si la información del diseño esta desplegada
   */
  designOpen = true;
  /**
   * Booleano que indica si la información del producto esta desplegada
   */
  productOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

}
