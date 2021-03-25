import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  unsubscribe = new Subject();
  @ViewChild('content') content: any;
  resizeTime: NodeJS.Timer;
  constructor(private modalDisenio: NgbModal, private modalService: ModalService) { }

  @HostListener('window:resize', ['$event'])
  onResize(): any {
    clearTimeout(this.resizeTime);
    this.resizeTime = setTimeout(() => {
      if (window.innerWidth <= 960){
        this.modalDisenio.dismissAll();
      }
    }, 100);
  }


  ngOnInit(): void {
    this.modalService.disenio
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(() => {
            this.openModal();
          });
  }

  openModal(): void{
    this.modalDisenio.open(this.content, { windowClass: 'modal-design' });
}

}
