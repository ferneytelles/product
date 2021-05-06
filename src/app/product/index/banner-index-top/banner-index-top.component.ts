import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { setInterval } from 'node:timers';

@Component({
  selector: 'app-banner-index-top',
  templateUrl: './banner-index-top.component.html',
  styleUrls: ['./banner-index-top.component.css']
})
export class BannerIndexTopComponent implements OnInit {

  // @ViewChild('imagen', {static: true}) imagen: ElementRef;
  height = '';

  constructor() { }

  ngOnInit(): void {
    // content.getBoundingClientRect()
    // setInterval(() => {
    //   this.imagen.nativeElement.getBoundingClientRect().height();
    // }, 1000);
  }

}
