import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../../services/modal.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-borrador',
  templateUrl: './borrador.component.html',
  styleUrls: ['./borrador.component.css']
})
export class BorradorComponent implements OnInit, OnDestroy {

  unsubscribe = new Subject();
  @ViewChild('borrador') borrador: any;
  constructor(private modalBorrador: NgbModal, private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.borrador
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(() => {
            this.openModal();
          });
  }
  openModal(): void{
    this.modalBorrador.open(this.borrador, { windowClass: 'modal-borrador' });
  }
  modalBorradores(): void{
    this.modalBorrador.dismissAll();
    this.modalService.borradores.next(true);
  }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
