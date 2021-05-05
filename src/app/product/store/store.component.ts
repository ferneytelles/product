import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Componente que contiene la página de la tienda
 */
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit, OnDestroy {

  /**
   * Arreglo que contiene los ítems que se envían al carrusel de los estilos
   */
  carousel = ['Cuello redondo', 'Cuello en "V"', 'Cuello tortuga', 'Manga corta', 'Manga 3/4', 'Manga larga', 'Regular Fit', 'Slim Fit', 'Muscle Fit'];
  /**
   * Arreglo que contiene las rutas de las imágenes de los productos
   */
  products = ['assets/img/1.png', 'assets/img/11.png', 'assets/img/3.png', 'assets/img/4.png', 'assets/img/16.png', 'assets/img/7.png', 'assets/img/8.png', 'assets/img/9.png', 'assets/img/4.png', 'assets/img/3.png', 'assets/img/7.png', 'assets/img/16.png', 'assets/img/8.png', 'assets/img/11.png', 'assets/img/1.png', 'assets/img/11.png', 'assets/img/3.png', 'assets/img/4.png', 'assets/img/16.png', 'assets/img/7.png', 'assets/img/8.png', 'assets/img/9.png', 'assets/img/4.png', 'assets/img/3.png', 'assets/img/7.png', 'assets/img/16.png', 'assets/img/8.png', 'assets/img/15.png', 'assets/img/1.png', 'assets/img/15.png', 'assets/img/3.png', 'assets/img/4.png', 'assets/img/15.png', 'assets/img/7.png', 'assets/img/8.png', 'assets/img/9.png', 'assets/img/4.png', 'assets/img/3.png', 'assets/img/7.png', 'assets/img/15.png'];
  /**
   * Arreglo que contiene las etiquetas de los producto
   */
  tags = ['Cuentos', 'Anime', 'Comics', 'Ilustración', 'Manga'];
  /**
   * Binario que indica si muestra los filtros en móvil
   */
  filters = false;
  /**
   * Cadena que contiene el ancho del contenedor de la tarjeta del producto
   */
  width = '';
  /**
   * Cadena que contiene el alto del contenedor de la tarjeta del producto
   */
  height = '';
  /**
   * Número que determina las columnas en que se muestran los resultados
   */
  columns: number;
  /**
   * Cadena que determina las vista entre la imagen del producto o el diseño
   */
  view = 'producto';
  /**
   * Variable que permite reiniciar el tiempo en la función onResize()
   */
  resizeTime: NodeJS.Timer;

  params: Array<string>;
  routeActive: string;
  filterOfertas: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((data) => {
      this.params = data.ofertas.split('-');
      if (this.params[0] === 'ofertas'){
        this.filterOfertas = this.params[1];
        this.routeActive = this.params[0].charAt(0).toUpperCase() + this.params[0].slice(1) + ' en ' + this.params[1];
      }else{
        this.routeActive = this.params[1].charAt(0).toUpperCase() + this.params[1].slice(1);
      }
    });
  }

  /**
   * Función que escucha el cambio de los píxeles en el ancho de la ventana
   */
  @HostListener('window:resize', ['$event'])
  onResize(): any {
     // Función que detiene la ejecución programada de la función asignada a la variable resizeTime
     clearTimeout(this.resizeTime);
     // Asignación que permite ejecutar la función setImgHeight() después de 200 milisegundos
     this.resizeTime = setTimeout(() => {
       this.setImgHeight();
     }, 200);
  }
  /**
   * Función utizada para la ejecución de las funciones de asignación de alto y ancho
   * del contenedor de la imagen del producto
   */
  ngOnInit(): void {
    this.setCardWidth();
    this.setImgHeight();
  }
  /**
   * Función utilizada para cambiar la vista de los productos
   * @param value Cadena que determina el cambio de vista de los productos
   */
  changeView(value: string): void{
    this.view = value;
  }
  /**
   * Función para abrir o cerrar los filtros en móvil
   * @param value Binario que indica si se abren los filtros en versión móvil
   */
  openFiltros(value: boolean): void{
    this.filters = value;
  }
  /**
   * Función que reasigna las número de columnas y los tamaños de la tarjeta del producto
   * @param value Número que determina las columnas
   */
  setColumns(value: number): void{
    this.columns = value;
    this.setCardWidth();
    this.setImgHeight();
  }
  /**
   * Función que asigna el ancho de la tarjeta del producto según el número de columnas
   */
  setCardWidth(): void{
    if (this.columns === 4) {
      this.width = '25%';
    }else if (this.columns === 3) {
      this.width = '33.3%';
    }else if (this.columns === 2) {
      this.width = '50%';
    }else if (this.columns === 1) {
      this.width = '100%';
    }
  }
  /**
   * Función que asigna el alto del contenedor de la imagen del producto
   * dependiendo del numero de colummnas y del ancho de la pantalla
   */
  setImgHeight(): void{
    if (this.columns === 4){
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
    }else if (this.columns === 3){
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
    }else if (this.columns === 2){
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
    }else if (this.columns === 1){
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
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
  }

}
