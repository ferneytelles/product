import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  @ViewChild('content') content: any;
  resizeTime: NodeJS.Timer;
  constructor(private modalService: NgbModal) { }

  @HostListener('window:resize', ['$event'])
  onResize(): any {
    clearTimeout(this.resizeTime);
    this.resizeTime = setTimeout(() => {
      if (window.innerWidth <= 960){
        this.modalService.dismissAll();
      }
    }, 100);
  }

  openModal(): void{
      this.modalService.open(this.content, { windowClass: 'modal-design' });
  }

  ngOnInit(): void {
  }

}
