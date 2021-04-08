import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tags = ['Samurai X', 'Japan', 'Otaku', 'Paisaje japonés', 'Naruto', 'Manga', 'Anime'];

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
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

