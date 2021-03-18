import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  openModal(content: any) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
  }

}
