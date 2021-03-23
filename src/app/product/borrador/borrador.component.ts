import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-borrador',
  templateUrl: './borrador.component.html',
  styleUrls: ['./borrador.component.css']
})
export class BorradorComponent implements OnInit {

  constructor(private modalBorrador: NgbModal) {}

  ngOnInit(): void {
  }
  openModal(borrador: any): void{
    this.modalBorrador.open(borrador);
  }

}
