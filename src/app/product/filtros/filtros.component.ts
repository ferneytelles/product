import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  radioFilter = [{name: 'Categoría', items: ['Hombre', 'Mujer', 'Niño y bebé', 'Acesorios y más']}, {name: 'Producto', items: ['Camisetas', 'Camisetas polo', 'Chaquetas', 'Sudaderas', 'Gorros', 'Hoodies', 'Tazas', 'Bolsas ecológicas', 'Posters', 'Mochilas']}];

  colorFilter = [{name: 'Colores', items: ['#000000', '#ffffff', '#595959','#009136', '#feed01', '#f29400', '#ff0000', '#e2017b', '#93117e', '#182983', '#009de0', '#e0ff77', '#b6e9ff']}];

  checkFilter = [{name: 'Tallas', items: ['XS','S', 'M', 'L', 'XL', '2XL', '3XL']}, {name: 'Caras imprimibles', items: ['Frente', 'Espalda', 'Dos caras']}, {name: 'Material', items: ['Lana', 'Algodon', 'Lino', 'Seda', 'Poliester']}, {name: 'Tipo de cuello', items: ['Cuello redondo', 'Cuello en "V"', 'Cuello tortuga']}, {name: 'Tipo de manga', items: ['Manga corta', 'Manga 3/4', 'Manga larga']}, {name: 'Tipo de ajuste', items: ['Regular Fit', 'Slim Fit', 'Muscle Fit']}, {name: 'Método de impresión', items: ['Sublimación', 'Papel transfer', 'Vinilo textil', 'Serigrafía', 'Impresión directa']}];

  checkFilter2 = [{name: 'Menores de edad', items: ['Apto para menores de edad']}, {name: 'Colecciones', items: ['Deportes', 'Animales', 'Colombia', 'Personas', 'Cine', 'Figuras', 'Mascotas', 'Militar', 'Comidas', 'Amor']}, {name: 'Fondos recomendados', items: ['Colores claros', 'Colores oscuros', 'Colores ácidos', 'Colores pastel', 'Texturas']}, {name: 'Estilos', items: ['Acuarela', 'Lettering', 'Comic', 'Digital', 'Manga']}, {name: 'Propiedades', items: ['Diseño de color editable']}];

  constructor() { }

  ngOnInit(): void {
  }

}
