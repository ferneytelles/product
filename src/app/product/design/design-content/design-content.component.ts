import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-design-content',
  templateUrl: './design-content.component.html',
  styleUrls: ['./design-content.component.css']
})
export class DesignContentComponent implements OnInit {

  @ViewChild('input_left', {static: true}) inputLeft: ElementRef;
  @ViewChild('input_right', {static: true}) inputRight: ElementRef;

  @ViewChild('thumb_left', {static: true}) thumbLeft: ElementRef;
  @ViewChild('thumb_right', {static: true}) thumbRight: ElementRef;
  @ViewChild('range', {static: true}) range: ElementRef;

  @ViewChild('min_value', {static: true}) minValue: ElementRef;
  @ViewChild('max_value', {static: true}) maxValue: ElementRef;

  activeMenores = true;
  activeCateg = true;
  activeColecc = true;
  activeFondos = true;
  activeEstilos = true;
  activePropiedades = true;
  activePrecio = true;
  menores = ['Diseño apto para menores de edad'];
  categorias = ['Hombre', 'Mujer', 'Niño y bebé', 'Acesorios y más', 'Fechas especiales'];
  colecciones = ['Deportes', 'Animales', 'Colombia', 'Personas', 'Cine', 'Figuras', 'Mascotas', 'Militar', 'Comidas', 'Amor'];
  fondos = ['Colores claros', 'Colores oscuros', 'Colores ácidos', 'Colores pastel'];
  estilos = ['Acuarela', 'Lettering', 'Comic', 'Digital', 'Manga'];
  propiedades = ['Diseño de color editable', 'Diseño multicara'];

  constructor() {
    
   }

  ngOnInit(): void {

    this.inputLeft.nativeElement.addEventListener('input', () => {
      this.setLeftValue();
    });

    this.inputRight.nativeElement.addEventListener('input', () => {
      this.setRightValue();
    });

    ////////////////////////////// LEFT //////////////////////////////////////
    this.inputLeft.nativeElement.addEventListener('mouseover', () => {
      this.thumbLeft.nativeElement.classList.add('hover');
    });
    this.inputLeft.nativeElement.addEventListener('mouseout', () => {
      this.thumbLeft.nativeElement.classList.remove('hover');
    });
    this.inputLeft.nativeElement.addEventListener('mousedown', () => {
      this.thumbLeft.nativeElement.classList.add('active');
    });
    this.inputLeft.nativeElement.addEventListener('mouseup', () => {
      this.thumbLeft.nativeElement.classList.remove('active');
    });

    ////////////////////////////// RIGHT //////////////////////////////////////
    this.inputRight.nativeElement.addEventListener('mouseover', () => {
      this.thumbRight.nativeElement.classList.add('hover');
    });
    this.inputRight.nativeElement.addEventListener('mouseout', () => {
      this.thumbRight.nativeElement.classList.remove('hover');
    });
    this.inputRight.nativeElement.addEventListener('mousedown', () => {
      this.thumbRight.nativeElement.classList.add('active');
    });
    this.inputRight.nativeElement.addEventListener('mouseup', () => {
      this.thumbRight.nativeElement.classList.remove('active');
    });

  }

  setLeftValue(): void{

    const _this = this.inputLeft.nativeElement;
    const min = parseInt(_this.min);
    const max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(this.inputRight.nativeElement.value) - 5);

    const percent = Math.floor(((_this.value - min) / (max - min)) * 100);

    this.thumbLeft.nativeElement.style.left = `${percent}%`;
    this.range.nativeElement.style.left = `${percent}%`;
    this.minValue.nativeElement.value = `${percent}`;
  }

  setInputLeft(): void{
    const entrada = this.minValue.nativeElement;
    const entradaValue = +this.minValue.nativeElement.value;
    const mayor = +this.maxValue.nativeElement.value;
    if (entradaValue < 0) {
      entrada.value = 0;
      this.inputLeft.nativeElement.value = 0;
      this.thumbLeft.nativeElement.style.left = `0%`;
      this.range.nativeElement.style.left = `0%`;
    }else if (entradaValue > 100) {
      this.maxValue.nativeElement.value = 100;
      this.inputRight.nativeElement.value = 100;
      this.thumbRight.nativeElement.style.right = `0%`;
      this.range.nativeElement.style.right = `0%`;

      entrada.value = `${100 - 5}`;
      this.inputLeft.nativeElement.value = 95;
      this.thumbLeft.nativeElement.style.left = `95%`;
      this.range.nativeElement.style.left = `95%`;

    }else if (entradaValue <= (mayor - 5)) {
      this.inputLeft.nativeElement.value = `${entradaValue}`;
      this.thumbLeft.nativeElement.style.left = `${entradaValue}%`;
      this.range.nativeElement.style.left = `${entradaValue}%`;
    }else if ((entradaValue > (mayor - 5)) && (entradaValue <= mayor)) {
      entrada.value = mayor - 5;
      this.inputLeft.nativeElement.value = `${mayor - 5}`;
      this.thumbLeft.nativeElement.style.left = `${mayor - 5}%`;
      this.range.nativeElement.style.left = `${mayor - 5}%`;
    }else if (entradaValue > mayor && entradaValue < (mayor + 5)) {
      entrada.value = entradaValue - 5;
      this.inputLeft.nativeElement.value = `${entradaValue - 5}`;
      this.thumbLeft.nativeElement.style.left = `${entradaValue - 5}%`;
      this.range.nativeElement.style.left = `${entradaValue - 5}%`;

      this.maxValue.nativeElement.value = entradaValue;
      this.inputRight.nativeElement.value = `${entradaValue}`;
      this.thumbRight.nativeElement.style.right = `${100 - entradaValue}%`;
      this.range.nativeElement.style.right = `${100 - entradaValue}%`;
    }else if (entradaValue >= mayor + 5) {
      entrada.value = this.maxValue.nativeElement.value;
      this.inputLeft.nativeElement.value = `${this.maxValue.nativeElement.value}`;
      this.thumbLeft.nativeElement.style.left = `${this.maxValue.nativeElement.value}%`;
      this.range.nativeElement.style.left = `${this.maxValue.nativeElement.value}%`;

      this.maxValue.nativeElement.value = entradaValue;
      this.inputRight.nativeElement.value = `${entradaValue}`;
      this.thumbRight.nativeElement.style.right = `${100 - entradaValue}%`;
      this.range.nativeElement.style.right = `${100 - entradaValue}%`;
    }
  }

  setRightValue(): void{
    const _this = this.inputRight.nativeElement;
    const min = parseInt( _this.min );
    const max = parseInt( _this.max );
    _this.value = Math.max(parseInt(_this.value), parseInt(this.inputLeft.nativeElement.value) + 5);

    const percent = Math.floor(((_this.value - min) / (max - min)) * 100);

    this.thumbRight.nativeElement.style.right = `${100 - percent}%`;
    this.range.nativeElement.style.right = `${100 - percent}%`;

    this.maxValue.nativeElement.value = `${percent}`;
  }

  setInputRight(): void{
    const entrada = this.maxValue.nativeElement;
    const entradaValue = +this.maxValue.nativeElement.value;
    const menor = +this.minValue.nativeElement.value;
    if (entradaValue > 100) {
      entrada.value = 100;
      this.inputRight.nativeElement.value = 100;
      this.thumbRight.nativeElement.style.right = `0%`;
      this.range.nativeElement.style.right = `0%`;
    }else if (entradaValue < 0) {
      this.minValue.nativeElement.value = 0;
      this.inputLeft.nativeElement.value = 0;
      this.thumbLeft.nativeElement.style.left = `0%`;
      this.range.nativeElement.style.left = `0%`;

      entrada.value = `${5}`;
      this.inputRight.nativeElement.value = 5;
      this.thumbRight.nativeElement.style.right = `95%`;
      this.range.nativeElement.style.right = `95%`;
    }else if (entradaValue >= (menor + 5)) {
      this.inputRight.nativeElement.value = `${entradaValue}`;
      this.thumbRight.nativeElement.style.right = `${100 - entradaValue}%`;
      this.range.nativeElement.style.right = `${100 - entradaValue}%`;
    }else if ((entradaValue < (menor + 5)) && (entradaValue >= menor)) {
      entrada.value = menor + 5;
      this.inputRight.nativeElement.value = `${menor + 5}`;
      this.thumbRight.nativeElement.style.right = `${100 - (menor + 5)}%`;
      this.range.nativeElement.style.right = `${100 - (menor + 5)}%`;
    }else if (entradaValue < menor && entradaValue > (menor - 5)) {
      this.minValue.nativeElement.value = entradaValue;
      this.inputLeft.nativeElement.value = `${entradaValue}`;
      this.thumbLeft.nativeElement.style.left = `${entradaValue}%`;
      this.range.nativeElement.style.left = `${entradaValue}%`;

      entrada.value = entradaValue + 5;
      this.inputRight.nativeElement.value = `${entradaValue + 5}`;
      this.thumbRight.nativeElement.style.right = `${100 - (entradaValue + 5)}%`;
      this.range.nativeElement.style.right = `${100 - (entradaValue + 5)}%`;
    }else if (entradaValue <= (menor - 5)) {
      entrada.value = this.minValue.nativeElement.value;
      this.inputRight.nativeElement.value = this.minValue.nativeElement.value;
      this.thumbRight.nativeElement.style.right = `${100 - this.minValue.nativeElement.value}%`;
      this.range.nativeElement.style.right = `${100 - this.minValue.nativeElement.value}%`;

      this.minValue.nativeElement.value = entradaValue;
      this.inputLeft.nativeElement.value = `${entradaValue}`;
      this.thumbLeft.nativeElement.style.left = `${entradaValue}%`;
      this.range.nativeElement.style.left = `${entradaValue}%`;
    }
  }

}
