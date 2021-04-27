import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-detail',
  templateUrl: './color-detail.component.html',
  styleUrls: ['./color-detail.component.css']
})
export class ColorDetailComponent implements OnInit {

  @Input() colores: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
