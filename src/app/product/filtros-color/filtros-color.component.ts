import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtros-color',
  templateUrl: './filtros-color.component.html',
  styleUrls: ['./filtros-color.component.css']
})
export class FiltrosColorComponent implements OnInit {

  @Input() nombre: string;
  @Input() items: Array<any>;
  active = true;

  constructor() { }

  ngOnInit(): void {
  }

}
