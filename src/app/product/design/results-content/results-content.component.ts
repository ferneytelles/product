import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-results-content',
  templateUrl: './results-content.component.html',
  styleUrls: ['./results-content.component.css']
})
export class ResultsContentComponent implements OnInit {

  imgs = ['assets/img/copa.png', 'assets/img/basketball.png', 'assets/img/basketball2.png', 'assets/img/bandera.png', 'assets/img/garra.png', 'assets/img/deportista.png', 'assets/img/espirales.png'];

  constructor() { }

  ngOnInit(): void { }

}
