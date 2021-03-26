import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  @Input() radios: Array<any>;
  valor = 'seleccione una!';
  constructor() { }

  ngOnInit(): void {
  }

}
