import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit, OnDestroy {

  unsubscribe = new Subject();
  @ViewChild('detalle') detalle: any;
  seleccionar = false;
  
  constructor(private modalDetalle: NgbModal, private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.detalle
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(() => {
            this.openModal();
          });
    this.modalService.detalle2
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(() => {
              this.openModal2();
            });
  }
  openModal(): void{
    this.seleccionar = true;
    this.modalDetalle.open(this.detalle, {windowClass: 'modal-detalle'})
  }
  openModal2(): void{
    this.seleccionar = false;
    this.modalDetalle.open(this.detalle, {windowClass: 'modal-detalle'})
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
