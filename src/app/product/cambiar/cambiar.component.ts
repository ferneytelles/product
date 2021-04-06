import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ModalService } from '../../services/modal.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cambiar',
  templateUrl: './cambiar.component.html',
  styleUrls: ['./cambiar.component.css']
})
export class CambiarComponent implements OnInit, OnDestroy {

  unsubscribe = new Subject();
  @ViewChild('cambiar') cambiar: any;

  constructor(private modalProducto: NgbModal, private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.producto
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(() => {
            this.openModal();
          });
  }
  openModal(): void{
    this.modalProducto.open(this.cambiar, { windowClass: 'modal-producto'});
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
