import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from 'src/app/services/modal.service';
/**
 * componente que contiene la modal de la guía de tallas
 */
@Component({
  selector: 'app-size-guide',
  templateUrl: './size-guide.component.html',
  styleUrls: ['./size-guide.component.css']
})
export class SizeGuideComponent implements OnInit, OnDestroy {

  /**
   * subject que sirve para eliminar la suscripcion al servicio de las modales
   */
  unsubscribe = new Subject();
  /**
   * elemento que contiene la modal
   */
  @ViewChild('sizesGuide') sizesGuide: any;

  /**
   * contructor donde se llaman el componente de la modal
   * y el servicio de las modales
   * @param modalGuide componente que sirve para crear la modal
   * @param modalService servicio que sirve para ejecutar las modales
   */
  constructor(private modalGuide: NgbModal, private modalService: ModalService) { }
  /**
   * Función utilizada para ejecutar la función de abrir la modal
   */
  ngOnInit(): void {
    this.modalService.sizeGuide
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(() => {
            this.openModal();
          });
  }
  /**
   * Función que ejecuta la modal
   */
  openModal(): void{
    this.modalGuide.open(this.sizesGuide, {windowClass: 'modal-size'});
  }
  /**
   * Función utilizada para eliminar la suscripción al servicio de las modales
   */
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
