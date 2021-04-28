import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.css']
})
export class SizesComponent implements OnInit, OnDestroy {

  unsubscribe = new Subject();
  @ViewChild('sizes') sizes: any;

  constructor(private modalsizes: NgbModal, private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.sizes
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(() => {
            this.openModal();
          });
  }
  openModal(): void{
    this.modalsizes.open(this.sizes, {windowClass: 'sizes'});
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
