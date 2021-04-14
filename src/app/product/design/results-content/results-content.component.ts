import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

/**
 * componente que contiene los diseños encontrados segun los filtros aplicados
 */
@Component({
  selector: 'app-results-content',
  templateUrl: './results-content.component.html',
  styleUrls: ['./results-content.component.css']
})

export class ResultsContentComponent implements OnInit, OnChanges {

  /**
   * numero que recibe la cantidad de columnas seleccionadas 
   */
  @Input() columnas: number;
  /**
   * arreglo que recibe las rutas de las imagenes de los diseños encontrados
   */
  @Input() imgs: Array<any>;
  /**
   *variable que permite reiniciar el tiempo en la funcion onResize()
   */
  resizeTime: NodeJS.Timer;
  /**
   * cadena que determina el alto de los contenedores de la imagen
   */
  height = '130px';
  /**
   * cadena que determina el ancho de los contenedores de la imagen
   */
  width = '20%';
  /**
   * boolean que permite abrir los detalles del diseño
   */
  informacion = false;
  /**
   * cadena que contiene la imagen del diseño seleccionado
   */
  img = '';

  constructor() {
  }

  /**
   * funcion que escucha el cambio de los pixeles en el ancho de la ventana
   */
  @HostListener('window:resize', ['$event'])
  onResize(): any {
    /**
     * funcion que detiene la ejecucion programada de la funcion asignada
     * a la variable resizeTime
     */
    clearTimeout(this.resizeTime);
    /**
     * asignacion que permite ejecutar la funcion setImgHeight() despues de 200 milisegundos
     */
    this.resizeTime = setTimeout(() => {
      this.setImgHeight();
    }, 200);
  }

  /**
   * permite ejecutar las funciones para la asignacion de alto y acho de los contenedores
   * de las imaganes de los diseños cuando carga el componente
   */
  ngOnInit(): void {
    this.setCardWidth();
    this.setImgHeight();
  }

  /**
   * permite ejecutar las funciones para la asignacion de alto y acho de los contenedores
   * de las imaganes de los diseños cuando hay una cambio en alguno de los Input's
   * @param changes recibe los cambios generados por el componente padre
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.setCardWidth();
    this.setImgHeight();
  }

  /**
   * funcion que permite abrir los detalles del diseño cuando se selecciona un diseño
   * @param valor boolean que se asigna a la variable que permite abrir los detalles
   * del diseño
   * @param img cadena que recibe la ruta de la imagen del diseo seleccionado
   */
  abrirInfo(valor: boolean, img: string): void{
    /**
     * condición que verifica que se ejecuta desde versiones de pantalla móvil
     */
    if (window.innerWidth <= 960){
      this.informacion = valor;
      this.img = img;
    }
  }

  setCardWidth(): void{
    if (this.columnas === 5) {
      this.width = '20%';
    }else if (this.columnas === 4) {
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
    if (this.columnas === 5){
      if (window.innerWidth >= 960 && window.innerWidth < 1150){
        this.height = '130px';
      }else if (window.innerWidth >= 1150 && window.innerWidth < 1260){
        this.height = '145px';
      }else if (window.innerWidth >= 1260 && window.innerWidth < 1400){
        this.height = '165px';
      }else if (window.innerWidth >= 1400 && window.innerWidth < 1550){
        this.height = '185px';
      }else if (window.innerWidth >= 1550 && window.innerWidth < 1690){
        this.height = '210px';
      }else if (window.innerWidth >= 1690 && window.innerWidth < 1800){
        this.height = '225px';
      }else if (window.innerWidth >= 1800 && window.innerWidth < 1950){
        this.height = '250px';
      }else if (window.innerWidth >= 1950){
        this.height = '270px';
      }
    }else if (this.columnas === 4){
      if (window.innerWidth >= 960 && window.innerWidth < 1150){
        this.height = '155px';
      }else if (window.innerWidth >= 1150 && window.innerWidth < 1260){
        this.height = '170px';
      }else if (window.innerWidth >= 1260 && window.innerWidth < 1400){
        this.height = '195px';
      }else if (window.innerWidth >= 1400 && window.innerWidth < 1550){
        this.height = '220px';
      }else if (window.innerWidth >= 1550 && window.innerWidth < 1690){
        this.height = '260px';
      }else if (window.innerWidth >= 1690 && window.innerWidth < 1800){
        this.height = '290px';
      }else if (window.innerWidth >= 1800 && window.innerWidth < 1950){
        this.height = '306px';
      }else if (window.innerWidth >= 1950){
        this.height = '330px';
      }
    }else if (this.columnas === 3){
      if (window.innerWidth >= 960 && window.innerWidth < 1150){
        this.height = '200px';
      }else if (window.innerWidth >= 1150 && window.innerWidth < 1260){
        this.height = '245px';
      }else if (window.innerWidth >= 1260 && window.innerWidth < 1400){
        this.height = '275px';
      }else if (window.innerWidth >= 1400 && window.innerWidth < 1550){
        this.height = '310px';
      }else if (window.innerWidth >= 1550 && window.innerWidth < 1690){
        this.height = '345px';
      }else if (window.innerWidth >= 1690 && window.innerWidth < 1800){
        this.height = '380px';
      }else if (window.innerWidth >= 1800 && window.innerWidth < 1950){
        this.height = '410px';
      }else if (window.innerWidth >= 1950){
        this.height = '445px';
      }
    }else if (this.columnas === 2){
      if (window.innerWidth < 350){
        this.height = '130px';
      }else if (window.innerWidth >= 350 && window.innerWidth < 400){
        this.height = '150px';
      }else if (window.innerWidth >= 400 && window.innerWidth < 450){
        this.height = '170px';
      }else if (window.innerWidth >= 450 && window.innerWidth < 500){
        this.height = '200px';
      }else if (window.innerWidth >= 500 && window.innerWidth < 550){
        this.height = '220px';
      }else if (window.innerWidth >= 550 && window.innerWidth < 600){
        this.height = '250px';
      }else if (window.innerWidth >= 600 && window.innerWidth < 700){
        this.height = '270px';
      }else if (window.innerWidth >= 700 && window.innerWidth < 830){
        this.height = '320px';
      }else if (window.innerWidth >= 830 && window.innerWidth < 960){
        this.height = '380px';
      }else if (window.innerWidth >= 960 && window.innerWidth < 1150){
        this.height = '305px';
      }else if (window.innerWidth >= 1150 && window.innerWidth < 1260){
        this.height = '370px';
      }else if (window.innerWidth >= 1260 && window.innerWidth < 1400){
        this.height = '410px';
      }else if (window.innerWidth >= 1400 && window.innerWidth < 1550){
        this.height = '465px';
      }else if (window.innerWidth >= 1550 && window.innerWidth < 1690){
        this.height = '520px';
      }else if (window.innerWidth >= 1690 && window.innerWidth < 1800){
        this.height = '570px';
      }else if (window.innerWidth >= 1800 && window.innerWidth < 1950){
        this.height = '610px';
      }else if (window.innerWidth >= 1950){
        this.height = '670px';
      }
    }else if (this.columnas === 1){
      if (window.innerWidth < 350){
        this.height = '280px';
      }else if (window.innerWidth >= 350 && window.innerWidth < 400){
        this.height = '310px';
      }else if (window.innerWidth >= 400 && window.innerWidth < 450){
        this.height = '360px';
      }else if (window.innerWidth >= 450 && window.innerWidth < 500){
        this.height = '410px';
      }else if (window.innerWidth >= 500 && window.innerWidth < 550){
        this.height = '460px';
      }else if (window.innerWidth >= 550 && window.innerWidth < 600){
        this.height = '510px';
      }else if (window.innerWidth >= 600 && window.innerWidth < 700){
        this.height = '560px';
      }else if (window.innerWidth >= 700 && window.innerWidth < 830){
        this.height = '660px';
      }else if (window.innerWidth >= 830 && window.innerWidth < 960){
        this.height = '790px';
      }
    }
  }

  // columnas 5
  // screen 960-1150px  h 130
  // srreen 1150-1260px  h 145
  // screen 1260-1400px  h 165
  // screen 1400-1550px  h 185
  // screen 1550-1690px  h 210
  // screen 1690-1800px  h 225
  // screen 1800-1950px  h 250
  // screen 1950-2080px  h 270

  // columnas 4
  // screen 960-1150px  h 155
  // srreen 1150-1260px  h 170
  // screen 1260-1400px  h 195
  // screen 1400-1550px  h 220
  // screen 1550-1690px  h 260
  // screen 1690-1800px  h 290
  // screen 1800-1950px  h 306
  // screen 1950-2080px  h 330

  // columnas 3
  // screen 960-1150px  h 200
  // srreen 1150-1260px  h 245
  // screen 1260-1400px  h 275
  // screen 1400-1550px  h 310
  // screen 1550-1690px  h 345
  // screen 1690-1800px  h 380
  // screen 1800-1950px  h 410
  // screen 1950-2080px  h 445

  // columnas 2
  // screen 960-1150px  h 305
  // srreen 1150-1260px  h 370
  // screen 1260-1400px  h 410
  // screen 1400-1550px  h 465
  // screen 1550-1690px  h 520
  // screen 1690-1800px  h 570
  // screen 1800-1950px  h 610
  // screen 1950-2080px  h 670

  // mobile
  // columnas 2
  // screen 320-350px  h 130
  // srreen 350-400px  h 150
  // screen 400-450px  h 170
  // screen 450-500px  h 200
  // screen 500-550px  h 220
  // screen 550-600px  h 250
  // screen 600-700px  h 270
  // screen 700-830px  h 320
  // screen 830-960px  h 380

  // columnas 1
  // screen 320-350px  h 280
  // srreen 350-400px  h 310
  // screen 400-450px  h 360
  // screen 450-500px  h 410
  // screen 500-550px  h 460
  // screen 550-600px  h 510
  // screen 600-700px  h 560
  // screen 700-830px  h 660
  // screen 830-960px  h 790

}
