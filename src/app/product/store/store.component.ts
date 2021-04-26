import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  carousel = ['Cuello redondo', 'Cuello en "V"', 'Cuello tortuga', 'Manga corta', 'Manga 3/4', 'Manga larga', 'Regular Fit', 'Slim Fit', 'Muscle Fit'];

  productos = ['assets/img/1.png', 'assets/img/11.png', 'assets/img/3.png', 'assets/img/4.png', 'assets/img/16.png', 'assets/img/7.png', 'assets/img/8.png', 'assets/img/9.png', 'assets/img/4.png', 'assets/img/3.png', 'assets/img/7.png', 'assets/img/16.png', 'assets/img/8.png', 'assets/img/11.png', 'assets/img/1.png', 'assets/img/11.png', 'assets/img/3.png', 'assets/img/4.png', 'assets/img/16.png', 'assets/img/7.png', 'assets/img/8.png', 'assets/img/9.png', 'assets/img/4.png', 'assets/img/3.png', 'assets/img/7.png', 'assets/img/16.png', 'assets/img/8.png', 'assets/img/15.png', 'assets/img/1.png', 'assets/img/15.png', 'assets/img/3.png', 'assets/img/4.png', 'assets/img/15.png', 'assets/img/7.png', 'assets/img/8.png', 'assets/img/9.png', 'assets/img/4.png', 'assets/img/3.png', 'assets/img/7.png', 'assets/img/15.png'];

  tags = ['Cuentos', 'Anime', 'Comics', 'Ilustración', 'Manga'];
  filtros = false;
  width = '';
  height = '';
  columnas: number;
  vista = 'producto';
  /**
   * variable que permite reiniciar el tiempo en la funcion onResize()
   */
   resizeTime: NodeJS.Timer;

  constructor() {
  }

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

  changeView(valor: string): void{
    this.vista = valor;
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
      if (window.innerWidth < 330){
        this.height = '153px';
      }else if (window.innerWidth >= 330 && window.innerWidth < 360){
        this.height = '171px';
      }else if (window.innerWidth >= 360 && window.innerWidth < 400){
        this.height = '189px';
      }else if (window.innerWidth >= 400 && window.innerWidth < 450){
        this.height = '213px';
      }else if (window.innerWidth >= 450 && window.innerWidth < 500){
        this.height = '243px';
      }else if (window.innerWidth >= 500 && window.innerWidth < 550){
        this.height = '273px';
      }else if (window.innerWidth >= 550 && window.innerWidth < 600){
        this.height = '303px';
      }else if (window.innerWidth >= 600 && window.innerWidth < 650){
        this.height = '333px';
      }else if (window.innerWidth >= 650 && window.innerWidth < 700){
        this.height = '363px';
      }else if (window.innerWidth >= 700 && window.innerWidth < 750){
        this.height = '393px';
      }else if (window.innerWidth >= 750 && window.innerWidth < 800){
        this.height = '423px';
      }else if (window.innerWidth >= 800 && window.innerWidth < 870){
        this.height = '453px';
      }else if (window.innerWidth >= 870 && window.innerWidth < 960){
        this.height = '495px';
      }else if (window.innerWidth >= 960 && window.innerWidth < 1024){
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
    }else if (this.columnas === 1){
      if (window.innerWidth < 330){
        this.height = '321px';
      }else if (window.innerWidth >= 330 && window.innerWidth < 360){
        this.height = '357px';
      }else if (window.innerWidth >= 360 && window.innerWidth < 400){
        this.height = '393px';
      }else if (window.innerWidth >= 400 && window.innerWidth < 450){
        this.height = '441px';
      }else if (window.innerWidth >= 450 && window.innerWidth < 500){
        this.height = '501px';
      }else if (window.innerWidth >= 500 && window.innerWidth < 550){
        this.height = '561px';
      }else if (window.innerWidth >= 550 && window.innerWidth < 600){
        this.height = '621px';
      }else if (window.innerWidth >= 600 && window.innerWidth < 650){
        this.height = '681px';
      }else if (window.innerWidth >= 650 && window.innerWidth < 700){
        this.height = '741px';
      }else if (window.innerWidth >= 700 && window.innerWidth < 750){
        this.height = '801px';
      }else if (window.innerWidth >= 750 && window.innerWidth < 800){
        this.height = '861px';
      }else if (window.innerWidth >= 800 && window.innerWidth < 870){
        this.height = '921px';
      }else if (window.innerWidth >= 870 && window.innerWidth < 960){
        this.height = '1000px';
      }
    }
  }

}
