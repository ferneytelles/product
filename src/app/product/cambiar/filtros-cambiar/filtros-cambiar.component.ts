import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtros-cambiar',
  templateUrl: './filtros-cambiar.component.html',
  styleUrls: ['./filtros-cambiar.component.css']
})
export class FiltrosCambiarComponent implements OnInit {

  activePrecio = true;
  activeCategorias = true;
  activeProductos = true;
  activeColores = true;
  activeTalla = true;
  activeCaras = true;
  activeMaterial = true;
  activeCuello = true;
  activeManga = true;
  activeAjuste = true;
  activeImpresion = true;
  categorias = ['Hombre', 'Mujer', 'Niño y bebé', 'Acesorios y más'];
  productos = ['Camisetas', 'Camisetas polo', 'Chaquetas', 'Sudaderas', 'Gorros'];
  colores = ['#000000', '#ffffff', '#595959', '#009136', '#feed01', '#f29400', '#ff0000', '#e2017b', '#93117e', '#182983', '#009de0', '#e0ff77', '#b6e9ff'];
  talla = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];
  caras = ['Frente', 'Espalda', 'Dos caras'];
  material = ['Lana', 'Algodon', 'Lino', 'Seda', 'Poliester'];
  cuello = ['Cuello redondo', 'Cuello en "V"', 'Cuello tortuga'];
  manga = ['Manga corta', 'Manga 3/4', 'Manga larga'];
  ajuste = ['Regular Fit', 'Slim Fit', 'Muscle Fit'];
  impresion = ['Sublimación', 'Papel transfer', 'Vinilo textil', 'Serigrafía', 'Impresión directa'];


  constructor() { }

  ngOnInit(): void {
  }

}
