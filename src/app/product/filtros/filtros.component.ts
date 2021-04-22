import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  @Output() close = new EventEmitter<boolean>();
  @Input() filtrar: boolean;
  radioFilter = [{name: 'Categoría', items: ['Hombre', 'Mujer', 'Niño y bebé', 'Acesorios y más']}, {name: 'Producto', items: ['Camisetas', 'Camisetas polo', 'Chaquetas', 'Sudaderas', 'Gorros', 'Hoodies', 'Tazas', 'Bolsas ecológicas', 'Posters', 'Mochilas']}];

  colorFilter = [{name: 'Colores', items: ['#000000', '#ffffff', '#595959','#009136', '#feed01', '#f29400', '#ff0000', '#e2017b', '#93117e', '#182983', '#009de0', '#e0ff77', '#b6e9ff']}];

  checkFilter = [{name: 'Tallas', items: ['XS','S', 'M', 'L', 'XL', '2XL', '3XL']}, {name: 'Caras imprimibles', items: ['Frente', 'Espalda', 'Dos caras']}, {name: 'Material', items: ['Lana', 'Algodon', 'Lino', 'Seda', 'Poliester']}, {name: 'Tipo de cuello', items: ['Cuello redondo', 'Cuello en "V"', 'Cuello tortuga']}, {name: 'Tipo de manga', items: ['Manga corta', 'Manga 3/4', 'Manga larga']}, {name: 'Tipo de ajuste', items: ['Regular Fit', 'Slim Fit', 'Muscle Fit']}, {name: 'Método de impresión', items: ['Sublimación', 'Papel transfer', 'Vinilo textil', 'Serigrafía', 'Impresión directa']}];

  checkFilter2 = [{name: 'Menores de edad', items: ['Apto para menores de edad']}, {name: 'Colecciones', items: ['Deportes', 'Animales', 'Colombia', 'Personas', 'Cine', 'Figuras', 'Mascotas', 'Militar', 'Comidas', 'Amor']}, {name: 'Fondos recomendados', items: ['Colores claros', 'Colores oscuros', 'Colores ácidos', 'Colores pastel', 'Texturas']}, {name: 'Estilos', items: ['Acuarela', 'Lettering', 'Comic', 'Digital', 'Manga']}, {name: 'Propiedades', items: ['Diseño de color editable']}];
  @ViewChild('elemento', {static: true}) elem: ElementRef;
  @ViewChild('aplicar', {static: true}) aplicar: ElementRef;
  botonFijo = true;

  constructor() { }

  ngOnInit(): void {
    // condicion que detecta si el dispositivo es iPhone
    if (/iPad|iPhone/.test(navigator.userAgent)) {
      this.elem.nativeElement.style.maxHeight = 'calc(100vh - 168px)';
    }
    // condicion que detecta si se accede desde chrome en dispositivos android
    if (/Android/.test(navigator.userAgent) && navigator.userAgent.toLowerCase().indexOf('chrome') > -1){
      this.elem.nativeElement.style.maxHeight = 'calc(100vh - 155px)';
    }
    setInterval(() => {
      if (window.innerWidth > 960){
        const posTop = window.scrollY;
        const posBut = posTop + window.innerHeight;
        const elemTop = this.elem.nativeElement.offsetTop;
        const elemBut = elemTop + this.elem.nativeElement.offsetHeight;
        if (elemBut < posBut){
          this.botonFijo = false;
        }else{
          this.botonFijo = true;
        }
      }else{
        this.botonFijo = false;
      }
    }, 500);

  }
  closeFilters(valor: boolean): void{
    this.close.emit(valor);
  }

}
