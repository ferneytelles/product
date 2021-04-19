import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';

/**
 * componente que tiene el conteneido de la modal de mis borradores
 */
@Component({
  selector: 'app-mis-borradores',
  templateUrl: './mis-borradores.component.html',
  styleUrls: ['./mis-borradores.component.css']
})
export class MisBorradoresComponent implements OnInit {

  /**
   * contenedor general del componente
   */
  @ViewChild('contenedor', {static: true}) contenedor: ElementRef;
  /**
   * cadena que permite cerrar borradores en version movil
   */
  @Output() close = new EventEmitter<string>();
  /**
   * variable de tiempo que permite reiniciar el tiempo de ejecucion
   * en la funcion onResize()
   */
  resizeTime: NodeJS.Timer;
  /**
   * cadena que determina la altura del contenedor de la
   * imagne del borrador
   */
  height = '130px';
  /**
   * cadena que contiene el texto informativo superior de la modal
   */
  texto = 'Selecciona el borrador de diseño sobre el cual deseas editar. (Regístrate y guarda tus diseños de forma permanente)';
  /**
   * arreglo que contiene la ruta de las imagenes de los
   * borradores que se muestran
   */
  borradores = ['assets/img/3.png', 'assets/img/6.png', 'assets/img/4.png', 'assets/img/1.png', 'assets/img/8.png', 'assets/img/9.png', 'assets/img/3.png', 'assets/img/1.png', 'assets/img/3.png', 'assets/img/8.png'];

  constructor() { }
  /**
   * funcion que ejecuta la funcion seImgHeight() despues de 200 miliseguntos
   * de que se cambien la cantidad de pixeles de ancho de la ventana
   */
  @HostListener('window:resize', ['$event'])
  onResize(): any {
    clearTimeout(this.resizeTime);
    this.resizeTime = setTimeout(() => {
      this.setHeight();
    }, 200);
  }
  /**
   * funcion utilizada paraagregar un relleno en la parte inferior del
   * contenedor general y ejecutar la funcion que asigna el tamaño al
   * contenedor de la imagen del borrador
   */
  ngOnInit(): void {
    this.setHeight();
    // condicion que detecta si el dispositivo es iPhone
    if (/iPad|iPhone/.test(navigator.userAgent)) {
      console.log('iphone');
      //  asignacion de relleno en la parte inferior para dispositivos iphone
      this.contenedor.nativeElement.style.paddingBottom = '75px';
    }
    //  condicion que detecta si se accede desde chrome en dispositivos android
    if (/Android/.test(navigator.userAgent) && navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
      // asignacion de relleno en la parte inferior para chrome en dispositivos android
      this.contenedor.nativeElement.style.paddingBottom = '75px';
    }
  }
  /**
   * funcion que permite cerrar borradores en movil
   * @param valor cadena que se emite para cerrar borradores
   */
  closeBorradores(valor: string): void{
    this.close.emit(valor);
  }
  /**
   * funcion que asigna el tamaño de altura del contenedor
   * de la imagen del borrador dependiendo de los pixeles
   * de ancho de la pantalla
   */
  setHeight(): void{
    if (window.innerWidth < 400){
      this.height = '180px';
    }else if (window.innerWidth >= 400 && window.innerWidth < 450){
      this.height = '200px';
    }else if (window.innerWidth >= 450 && window.innerWidth < 500){
      this.height = '210px';
    }else if (window.innerWidth >= 500 && window.innerWidth < 550){
      this.height = '220px';
    }else if (window.innerWidth >= 550 && window.innerWidth < 600){
      this.height = '230px';
    }else if (window.innerWidth >= 600 && window.innerWidth < 700){
      this.height = '250px';
    }else if (window.innerWidth >= 700 && window.innerWidth < 830){
      this.height = '280px';
    }else if (window.innerWidth >= 830 && window.innerWidth < 960){
      this.height = '320px';
    }else if (window.innerWidth >= 960 && window.innerWidth < 1150){
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
  }

}
