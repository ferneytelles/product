import { Component, HostListener, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

/**
 * Componente principal que contiene las modales y la venta cruzada
 */
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  /**
   * Arreglo que contiene las etiquetas del producto actual
   */
  tags = ['Samurai X', 'Japan', 'Otaku', 'Paisaje japonés', 'Naruto', 'Manga', 'Anime'];
  /**
   * Variable de tiempo que permite reiniciar el tiempo de ejecución
   * en la función onResize()
   */
   resizeTime: NodeJS.Timer;
  /**
   * Cadena que determina la modal abierta en móvil
   */
  controlModal = 'Null';

  /**
   * Constructor que llama el servicio de modales
   * @param modalService  servicio que permite ejecutar las modales
   */
  constructor(private modalService: ModalService) { }

  /**
   * función que ejecuta la función seImgHeight() después de 200 miliseguntos
   * de que se cambien la cantidad de píxeles de ancho de la ventana
   */
  @HostListener('window:resize', ['$event'])
  onResize(): any {
    clearTimeout(this.resizeTime);
    this.resizeTime = setTimeout(() => {
      if (window.innerWidth > 960){
        this.controlModal = 'Null';
      }
    }, 200);
  }

  ngOnInit(): void {
  }
  /**
   * Función que ejecuta la modal de cambiar productos en versión web
   */
  modalProducto(): void{
    if (window.innerWidth > 960) {
    this.modalService.producto.next(true);
    }
  }
  /**
   * Función que ejecuta la modal de diseños en versión web
   */
  modalDisenio(): void{
    if (window.innerWidth > 960) {
    this.modalService.disenio.next(true);
    }
  }
  /**
   * Función que ejecuta la modal de borrador en versión web
   */
  modalBorrador(): void{
    if (window.innerWidth > 960) {
    this.modalService.borrador.next(true);
    }
  }
  /**
   * Función que ejecuta la modal de borradores en versión web
   */
  modalBorradores(): void{
    if (window.innerWidth > 960) {
      this.modalService.borradores.next(true);
    }
  }
  /**
   * Función que ejecuta la modal de detalles del producto en versión web
   */
  modalDetalle(): void{
    if (window.innerWidth > 960) {
    this.modalService.detalle2.next(true);
    }
  }
  /**
   * Función que abre las modales en versión móvil
   * @param valor Cadena que contiene el nombre da la modal que se abre
   */
  modalMovile(valor: string): void{
    if (window.innerWidth <= 960) {
      this.controlModal = valor;
    }
  }

}

