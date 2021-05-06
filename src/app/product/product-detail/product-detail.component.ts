import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../services/api.service';

/**
 * Componente que contiene la página de los detalles del producto
 */
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  /**
   * Arreglo que contiene las etiquetas del producto
   */
  tags = ['Cuentos', 'Anime', 'Comics', 'Ilustración', 'Manga'];
  /**
   * Arreglo que contiene los colores del producto
   */
  colores = [
    '#000000',
    '#ffffff',
    '#595959',
    '#009136',
    '#feed01',
    '#f29400',
    '#ff0000',
    '#e2017b',
    '#93117e',
    '#182983',
    '#009de0',
    '#e0ff77',
    '#b6e9ff',
  ];
  /**
   * Booleano que indica si está en versión web
   */
  webVersion = false;

  id = '926c2b1b-c636-46f9-95c2-52eb7afc82a7';

  /**
   * Constructor que sirve para llamar el servicio de las modales
   * y verificar si está en versión web
   * @param modalService Servicio que permite ejecutar las modales
   * @param modales servicio que permite cerrar las modales cuando se destruye el componente de detalle del producto
   */
  constructor(private modalService: ModalService, private modales: NgbModal, private api: ApiService) {
    if (window.innerWidth > 960) {
      this.webVersion = true;
    } else {
      this.webVersion = false;
    }
  }

  getName(): string{
    let productId: string;
    let name: string;
    this.api.getProductDesign(this.id).subscribe(data => {
      productId = data.product;
    });
    this.api.getProduct(productId).subscribe(data => {
      name = data.name;
    });
    return name;
  }

  ngOnInit(): void {}
  /**
   * Función que ejecuta la modal de la guía de tallas
   */
  modalSizesGuide(): void {
    this.modalService.sizeGuide.next(true);
  }
  /**
   * Función que ejecuta la modal de tallas en versión móvil
   */
  modalSizes(): void {
    if (window.innerWidth <= 960) {
      this.modalService.sizes.next(true);
    }
  }
  /**
   * Función que ejecuta la modal de compartir en versión móvil
   */
  modalShare(): void {
    if (window.innerWidth <= 960) {
      this.modalService.share.next(true);
    }
  }
  /**
   * Función utilizada para cerrar las modales cuando se destruye
   * este componente
   */
  ngOnDestroy(): void {
    //  Called once, before the instance is destroyed.
    //  Add 'implements OnDestroy' to the class.
    this.modales.dismissAll();
  }
}
