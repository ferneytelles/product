import { Component, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
/**
 * componente que contiene las tarjetas de los productos encontrados
 */
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnChanges {

  /**
   * numero que recibe la cantidad de columnas en las que se deben
   * mostrar los resultados
   */
  @Input() columnas: number;
  /**
   * arreglo que recibe las imagenes de los productos mostrados
   */
  @Input() imgs: Array<any>;
  /**
   * variable de tiempo que permite reiniciar el tiempo de ejecucion
   * en la funcion onResize()
   */
  resizeTime: NodeJS.Timer;
  /**
   * cadena que determina la altura del contenedor de la imagen del producto
   */
  height = '155px';
  /**
   * cadena que determina el ancho del contenedor de la imagen del producto
   */
  width = '25%';
  /**
   * cadena que determina el tamaño de fuente para los botones del efecto hover
   * en la imagen del producto
   */
  font = '13px';
  /**
   * variable que determina si se abren los detalles del producto
   */
  details = false;

  /**
   * construtor que llama el servicio de las modales
   * @param modalService servicio que permite ejecutar las modales
   */
  constructor(private modalService: ModalService) { }

  /**
   * funcion que ejecuta la funcion seImgHeight() despues de 200 miliseguntos
   * de que se cambien la cantidad de pixeles de ancho de la ventana
   */
  @HostListener('window:resize', ['$event'])
  onResize(): any {
    clearTimeout(this.resizeTime);
    this.resizeTime = setTimeout(() => {
      this.setImgHeight();
    }, 200);
  }

  /**
   * se asignan los tamaños del contenedor de la imagen del producto
   * al cargar el componente completo
   */
  ngOnInit(): void {
    this.setCardWidth();
    this.setImgHeight();
  }

  /**
   * se reasignan los tamaños del contenedor de la imagen cuando hay algun cambio en las variables que recibe del componente padre
   * @param changes cambio que se generaron desde el componente padre
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.setCardWidth();
    this.setImgHeight();
  }

  /**
   * funcion que abre o cierra los detalles del producto para version movil
   * @param valor boolean que determina si se abre o cierra los detalles
   */
  openDetails(valor: boolean): void{
    if (window.innerWidth <= 960){
      this.details = valor;
    }
  }
  /**
   * funcion que ejecuta la modal de detalles del producto de version web
   */
  modalDetalle(): void{
    if (window.innerWidth > 960){
      this.modalService.detalle.next(true);
    }
  }
  /**
   * funcion que asigna el tamaño de ancho del contenedor de la imagen
   * dependiendo de la cantidad de columnas seleccionadas
   */
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
  /**
   * funcion que asigna el tamaño de altura del contenedor de la imagen
   * del producto dependiendo de la cantidad de columas seleccionadas
   * y de los pixeles de la pantalla
   */
  setImgHeight(): void{
    if (this.columnas === 5){
      // tamaño del texto de los botones del hover
      if (window.innerWidth >= 960 && window.innerWidth < 1000){
        this.font = '9px';
      }else if (window.innerWidth >= 1000 && window.innerWidth < 1100){
        this.font = '10px';
      }else if (window.innerWidth >= 1100 && window.innerWidth < 1150){
        this.font = '11px';
      }else if (window.innerWidth >= 1150 && window.innerWidth < 1240){
        this.font = '12px';
      }else{
        this.font = '13px';
      }
      // tamaño de alto del contenedor de la imagen
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
      this.font = '13px';
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
      this.font = '13px';
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
      this.font = '13px';
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

}
