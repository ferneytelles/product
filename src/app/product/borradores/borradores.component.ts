import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-borradores',
  templateUrl: './borradores.component.html',
  styleUrls: ['./borradores.component.css']
})
export class BorradoresComponent implements OnInit {

  unsubscribe = new Subject();
  @ViewChild('borradores') borradores: any;
  constructor(private modalBorradores: NgbModal, private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.borradores
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(() => {
            this.openModal();
          });
  }
  openModal(): void{
    this.modalBorradores.open(this.borradores, { windowClass: 'modal-borradores' });
  }

}
