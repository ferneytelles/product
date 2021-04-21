import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores-radio',
  templateUrl: './colores-radio.component.html',
  styleUrls: ['./colores-radio.component.css']
})
export class ColoresRadioComponent implements OnInit {

  @Input() colores: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
