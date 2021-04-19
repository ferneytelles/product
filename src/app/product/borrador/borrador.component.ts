import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../../services/modal.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * componente que contiene la modal de borrador
 */
@Component({
  selector: 'app-borrador',
  templateUrl: './borrador.component.html',
  styleUrls: ['./borrador.component.css']
})
export class BorradorComponent implements OnInit, OnDestroy {

  /**
   * subject que permite quitar la suscripcion al servicio
   */
  unsubscribe = new Subject();
  /**
   * contenedor de la modal de borrador
   */
  @ViewChild('borrador') borrador: any;

  /**
   * constructor que llama el servicio de las modales y el modulo
   * de las modales de ng-bootstrap
   * @param modalBorrador modulo de ng-bootstrap que permite crear la modal
   * @param modalService servicio que permite ejecutar las modales
   */
  constructor(private modalBorrador: NgbModal, private modalService: ModalService) {}

  /**
   * ejecuta la funcion de abrir modal cuando hay un cambio en la
   * variable borrador del servicio de las modales
   */
  ngOnInit(): void {
    this.modalService.borrador
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(() => {
            this.openModal();
          });
  }
  /**
   * funcion que ejecuta la modal de borrador asignandole una
   * clase personalizada al componente de la modal-dialog
   */
  openModal(): void{
    this.modalBorrador.open(this.borrador, { windowClass: 'modal-borrador' });
  }
  /**
   * funcion que cierra todas las modales y ejecuta la modal de borradores
   */
  modalBorradores(): void{
    this.modalBorrador.dismissAll();
    this.modalService.borradores.next(true);
  }
  /**
   * funcion utilizada para cancelar la suscripcion al servicio de las modales
   */
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
