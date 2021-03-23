import { Component, HostListener, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

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

  openModal(content: any): void{
      this.modalService.open(content);
  }

  ngOnInit(): void {
  }

}
