import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-size-guide',
  templateUrl: './size-guide.component.html',
  styleUrls: ['./size-guide.component.css']
})
export class SizeGuideComponent implements OnInit, OnDestroy {

  unsubscribe = new Subject();
  @ViewChild('sizesGuide') sizesGuide: any;

  constructor(private modalGuide: NgbModal, private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.sizeGuide
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(() => {
            this.openModal();
          });
  }
  openModal(): void{
    this.modalGuide.open(this.sizesGuide, {windowClass: 'modal-size'});
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
