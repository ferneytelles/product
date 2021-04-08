import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtros-check',
  templateUrl: './filtros-check.component.html',
  styleUrls: ['./filtros-check.component.css']
})
export class FiltrosCheckComponent implements OnInit {

  @Input() active: boolean;
  @Input() nombre: string;
  @Input() items: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
