import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

/**
 * componente principal que contiene las modales y la venta cruzada
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
   * cadena que determina la modal abierta en movil
   */
  controlModal = 'Null';

  /**
   * Constructor que llama el servicio de modales
   * @param modalService  servicio que permite ejecutar las modales
   */
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }
  /**
   * funcion que ejecuta la modal de cambiar productos en version web
   */
  modalProducto(): void{
    if (window.innerWidth > 960) {
    this.modalService.producto.next(true);
    }
  }
  /**
   * funcion que ejecuta la modal de diseños en version web
   */
  modalDisenio(): void{
    if (window.innerWidth > 960) {
    this.modalService.disenio.next(true);
    }
  }
  /**
   * funcion que ejecuta la modal de borrador en version web
   */
  modalBorrador(): void{
    if (window.innerWidth > 960) {
    this.modalService.borrador.next(true);
    }
  }
  /**
   * funcion que ejecuta la modal de borradores en version web
   */
  modalBorradores(): void{
    if (window.innerWidth > 960) {
      this.modalService.borradores.next(true);
    }
  }
  /**
   * funcion que ejecuta la modal de detalles del producto en version web
   */
  modalDetalle(): void{
    if (window.innerWidth > 960) {
    this.modalService.detalle2.next(true);
    }
  }
  /**
   * funcion que abre las modales en version movil
   * @param valor cadena que contiene el nombre da la modal que se abre
   */
  modalMovile(valor: string): void{
    if (window.innerWidth <= 960) {
      this.controlModal = valor;
    }
  }

}

