import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-borradores',
  templateUrl: './borradores.component.html',
  styleUrls: ['./borradores.component.css']
})
export class BorradoresComponent implements OnInit {

  @ViewChild('borradores') borradores: any;
  constructor(private modalBorradores: NgbModal) { }

  ngOnInit(): void {
  }
  openModal(): void{
    this.modalBorradores.open(this.borradores, { windowClass: 'modal-borradores' });
  }

}
