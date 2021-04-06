import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tags = ['Samurai X', 'Japan', 'Otaku', 'Paisaje japonés', 'Naruto', 'Manga', 'Anime'];

  constructor(private modalService: ModalService){

  }

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
}
