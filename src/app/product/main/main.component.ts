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
   * Arreglo que contiene las etiquetas de los productos
   */
  tags = ['Samurai X', 'Japan', 'Otaku', 'Paisaje japonés', 'Naruto', 'Manga', 'Anime'];

  controlModal = 'false';

  /**
   * Constructor que llama el servicio de modales
   * @param modalService  servicio que permite ejecutar las modales
   */
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }
  /**
   * funcion que ejecuta la modal de cambiar productos
   */
  modalProducto(): void{
    this.modalService.producto.next(true);
  }
  modalDisenio(): void{
    this.modalService.disenio.next(true);
  }
  modalBorrador(): void{
    this.modalService.borrador.next(true);
  }
  modalBorradores(): void{
    this.modalService.borradores.next(true);
  }
  modalDetalle(): void{
    this.modalService.detalle2.next(true);
  }

  modalMovile(valor: string): void{
    this.controlModal = valor;
  }

}

