import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-top',
  templateUrl: './banner-top.component.html',
  styleUrls: ['./banner-top.component.css']
})
export class BannerTopComponent implements OnInit {

  @Input() url: string;
  constructor() { }

  ngOnInit(): void {
  }

}
