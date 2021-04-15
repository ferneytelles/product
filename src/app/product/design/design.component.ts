import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from 'src/app/services/modal.service';

/**
 * componente que contiene la modal de diseños
 */
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit, OnDestroy {

  /**
   * variable de tipo subject que permite quitar la suscripcion
   * al servicio una vez se cierre la modal
   */
  unsubscribe = new Subject();
  /**
   * elemento contenedor de la modal de diseños
   */
  @ViewChild('content') content: any;
  /**
   * variable que permite reiniciar el tiempo en la funcion onResize()
   */
  resizeTime: NodeJS.Timer;
  /**
   * constructor que llama el servicio de las modales y el modulo
   * de las modales de ng-bootstrap
   * @param modalDisenio modulo del componente de modal de ng-bootstratp
   * @param modalService servicio que permite ejecutar las modales
   */
  constructor(private modalDisenio: NgbModal, private modalService: ModalService) { }

  /**
   * funcion que escucha el cambio de los pixeles en el ancho de la ventana
   */
  @HostListener('window:resize', ['$event'])
  onResize(): any {
    clearTimeout(this.resizeTime);
    this.resizeTime = setTimeout(() => {
      if (window.innerWidth <= 960){
        this.modalDisenio.dismissAll();
      }
    }, 100);
  }

  /**
   * ejecuta la funcion de abrir modal cuando hay un cambio en la variable
   * diseño del servicio ModalService
   */
  ngOnInit(): void {
    this.modalService.disenio
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(() => {
            this.openModal();
          });
  }

  /**
   * funcion que ejecuta la modal de diseño asignandole una
   * clase personalizada al componente de la modal-dialog
   */
  openModal(): void{
    this.modalDisenio.open(this.content, { windowClass: 'modal-design' });
  }

  /**
   * funcion que permite quitar eliminar la suscripcion al servicio
   * de las modales
   */
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
