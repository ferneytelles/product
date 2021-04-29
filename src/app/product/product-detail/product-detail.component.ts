import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  vista = true;
  tags = ['Cuentos', 'Anime', 'Comics', 'Ilustración', 'Manga'];
  /**
   * arreglo que contiene los colores para el filtro chequeable de los colores
   */
  colores = ['#000000', '#ffffff', '#595959', '#009136', '#feed01', '#f29400', '#ff0000', '#e2017b', '#93117e', '#182983', '#009de0', '#e0ff77', '#b6e9ff'];
  webVersion = false;

  constructor(private modalService: ModalService, private modales: NgbModal) {
    if (window.innerWidth > 960){
      this.webVersion = true;
    }else{
      this.webVersion = false;
    }
   }

  ngOnInit(): void {
  }
  change(valor: boolean): void{
    this.vista = valor;
  }
  modalSizesGuide(): void{
    this.modalService.sizeGuide.next(true);
  }
  modalSizes(): void{
    if (window.innerWidth <= 960){
      this.modalService.sizes.next(true);
    }
  }
  modalShare(): void{
    if (window.innerWidth <= 960){
      this.modalService.share.next(true);
    }
  }
  ngOnDestroy(): void {
    //  Called once, before the instance is destroyed.
    //  Add 'implements OnDestroy' to the class.
    console.log('Destruido el componente Detalle del producto');
    this.modales.dismissAll();
  }

}
