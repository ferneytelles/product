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

  controlModal = 'Null';

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
    if(window.innerWidth > 960){
    this.modalService.producto.next(true);
    }
  }
  modalDisenio(): void{
    if(window.innerWidth > 960){
    this.modalService.disenio.next(true);
    }
  }
  modalBorrador(): void{
    if(window.innerWidth > 960){
    this.modalService.borrador.next(true);
    }
  }
  modalBorradores(): void{
    if(window.innerWidth > 960){
      this.modalService.borradores.next(true);
    }
  }
  modalDetalle(): void{
    if(window.innerWidth > 960){
    this.modalService.detalle2.next(true);
    }
  }

  modalMovile(valor: string): void{
    if(window.innerWidth <= 960){
      this.controlModal = valor;
    }    
  }

}

