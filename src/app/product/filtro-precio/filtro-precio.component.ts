import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-precio',
  templateUrl: './filtro-precio.component.html',
  styleUrls: ['./filtro-precio.component.css']
})
export class FiltroPrecioComponent implements OnInit {

  active = true;
  @Input() nombre: string;

  constructor() { }

  ngOnInit(): void {
  }

}
