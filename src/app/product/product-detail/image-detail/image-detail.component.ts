import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  @Input() webVersion: boolean;
  vista = true;

  constructor() { }

  ngOnInit(): void {
  }
  change(valor: boolean): void{
    this.vista = valor;
  }

}
