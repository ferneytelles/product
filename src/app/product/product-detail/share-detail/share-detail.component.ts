import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-share-detail',
  templateUrl: './share-detail.component.html',
  styleUrls: ['./share-detail.component.css']
})
export class ShareDetailComponent implements OnInit, OnDestroy {

  unsubscribe = new Subject();
  @ViewChild('share') share: any;

  constructor(private modalShare: NgbModal, private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.share
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(() => {
            this.openModal();
          });
  }
  openModal(): void{
    this.modalShare.open(this.share, {windowClass: 'share'});
  }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
