import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  @Input() colores: Array<any>; 
  constructor() { }

  ngOnInit(): void {
  }

}
