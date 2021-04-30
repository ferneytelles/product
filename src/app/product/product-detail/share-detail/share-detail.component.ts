import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from 'src/app/services/modal.service';

/**
 * Compinente que contiene la modal de compartir
 */
@Component({
  selector: 'app-share-detail',
  templateUrl: './share-detail.component.html',
  styleUrls: ['./share-detail.component.css']
})
export class ShareDetailComponent implements OnInit, OnDestroy {

  /**
   * Subject que permite eliminar la suscripción del servicio de las modales
   */
  unsubscribe = new Subject();
  /**
   * Componente que contiene la modal compartir
   */
  @ViewChild('share') share: any;

  /**
   * Contructor utilizado para llamar al servicio de las modales
   * @param modalShare Servico que permite crear la modal compartir
   * @param modalService Servicoo que permite ejecutar la modal de compartir
   */
  constructor(private modalShare: NgbModal, private modalService: ModalService) { }

  /**
   * Función utilizada para ejecutar la funcón de abrir modal
   */
  ngOnInit(): void {
    this.modalService.share
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(() => {
            this.openModal();
          });
  }
  /**
   * Función que ejecuta la modal de compartir
   */
  openModal(): void{
    this.modalShare.open(this.share, {windowClass: 'share'});
  }
  /**
   * Función utilizada para eliminar la siscribción al servicio de las modales
   */
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
