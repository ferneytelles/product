import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtros-radio',
  templateUrl: './filtros-radio.component.html',
  styleUrls: ['./filtros-radio.component.css']
})
export class FiltrosRadioComponent implements OnInit {

  @Input() nombre: string;
  @Input() items: Array<any>;
  active = true;
  constructor() { }

  ngOnInit(): void {
  }

}
