import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from 'src/app/services/modal.service';

/**
 * Componente que contiene la modal de las tallas para móvil
 */
@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.css']
})
export class SizesComponent implements OnInit, OnDestroy {

  /**
   * Subject que sirve para eliminar la suscripción al servicio de las modales
   */
  unsubscribe = new Subject();
  /**
   * Componente que contiene la modal de las tallas
   */
  @ViewChild('sizes') sizes: any;

  /**
   * Constructor que llama el servicio de las modales
   * @param modalsizes Servicoo que permite crear la modal de tallas
   * @param modalService Servicio que permite ejcutar las modales
   */
  constructor(private modalsizes: NgbModal, private modalService: ModalService) { }

  /**
   * Función utilizada para ejecutar la función de abrir la modal
   */
  ngOnInit(): void {
    this.modalService.sizes
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(() => {
            this.openModal();
          });
  }
  /**
   * Función que ejecuta la moda de las tallas
   */
  openModal(): void{
    this.modalsizes.open(this.sizes, {windowClass: 'sizes'});
  }
  /**
   * Función que elimina la siscripción al servicio de las modales
   */
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
