import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-borrador',
  templateUrl: './borrador.component.html',
  styleUrls: ['./borrador.component.css']
})
export class BorradorComponent implements OnInit {

  @ViewChild('borrador') borrador: any;
  constructor(private modalBorrador: NgbModal) {}

  ngOnInit(): void {
  }
  openModal(): void{
    this.modalBorrador.open(this.borrador, { windowClass: 'modal-borrador' });
  }

}
