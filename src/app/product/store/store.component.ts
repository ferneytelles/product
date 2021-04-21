import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  carousel = ['Cuello redondo', 'Cuello en "V"', 'Cuello tortuga', 'Manga corta', 'Manga 3/4', 'Manga larga', 'Regular Fit', 'Slim Fit', 'Muscle Fit'];

  productos = ['assets/img/1.png', 'assets/img/2.png', 'assets/img/3.png', 'assets/img/4.png', 'assets/img/6.png', 'assets/img/7.png', 'assets/img/8.png', 'assets/img/9.png', 'assets/img/4.png', 'assets/img/3.png', 'assets/img/7.png', 'assets/img/2.png', 'assets/img/8.png', 'assets/img/espirales.png'];
  filtros = false;
  width = '';
  height = '';
  columnas: number;
  /**
   * variable que permite reiniciar el tiempo en la funcion onResize()
   */
   resizeTime: NodeJS.Timer;

  constructor() {}

  /**
   * funcion que escucha el cambio de los pixeles en el ancho de la ventana
   */
   @HostListener('window:resize', ['$event'])
   onResize(): any {
     // funcion que detiene la ejecucion programada de la funcion asignada a la variable resizeTime
     clearTimeout(this.resizeTime);
     // asignacion que permite ejecutar la funcion setImgHeight() despues de 200 milisegundos
     this.resizeTime = setTimeout(() => {
       this.setImgHeight();
     }, 200);
   }

  ngOnInit(): void {
    this.setCardWidth();
    this.setImgHeight();
  }

  openFiltros(valor: boolean): void{
    this.filtros = valor;
  }

  setColumns(valor: number): void{
    this.columnas = valor;
    this.setCardWidth();
    this.setImgHeight();
  }

  setCardWidth(): void{
    if (this.columnas === 4) {
      this.width = '25%';
    }else if (this.columnas === 3) {
      this.width = '33.3%';
    }else if (this.columnas === 2) {
      this.width = '50%';
    }else if (this.columnas === 1) {
      this.width = '100%';
    }
  }

  setImgHeight(): void{
    if (this.columnas === 4){
      if (window.innerWidth >= 960 && window.innerWidth < 1024){
        this.height = '181px';
      }else if (window.innerWidth >= 1024 && window.innerWidth < 1100){
        this.height = '195px';
      }else if (window.innerWidth >= 1100 && window.innerWidth < 1200){
        this.height = '212px';
      }else if (window.innerWidth >= 1200 && window.innerWidth < 1300){
        this.height = '235px';
      }else if (window.innerWidth >= 1300 && window.innerWidth < 1400){
        this.height = '258px';
      }else if (window.innerWidth >= 1400){
        this.height = '280px';
      }
    }else if (this.columnas === 3){
      if (window.innerWidth >= 960 && window.innerWidth < 1024){
        this.height = '247px';
      }else if (window.innerWidth >= 1024 && window.innerWidth < 1100){
        this.height = '266px';
      }else if (window.innerWidth >= 1100 && window.innerWidth < 1200){
        this.height = '289px';
      }else if (window.innerWidth >= 1200 && window.innerWidth < 1300){
        this.height = '319px';
      }else if (window.innerWidth >= 1300 && window.innerWidth < 1400){
        this.height = '349px';
      }else if (window.innerWidth >= 1400){
        this.height = '379px';
      }
    }else if (this.columnas === 2){
      if (window.innerWidth >= 960 && window.innerWidth < 1024){
        this.height = '381px';
      }else if (window.innerWidth >= 1024 && window.innerWidth < 1100){
        this.height = '410px';
      }else if (window.innerWidth >= 1100 && window.innerWidth < 1200){
        this.height = '444px';
      }else if (window.innerWidth >= 1200 && window.innerWidth < 1300){
        this.height = '489px';
      }else if (window.innerWidth >= 1300 && window.innerWidth < 1400){
        this.height = '534px';
      }else if (window.innerWidth >= 1400){
        this.height = '579px';
      }
    }
  }

}
