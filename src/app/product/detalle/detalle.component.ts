import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

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
  }
  openModal(): void{
    this.seleccionar = true;
    this.modalDetalle.open(this.detalle, {windowClass: 'modal-detalle'})
  }

}
