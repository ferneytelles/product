import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-share',
  templateUrl: './to-share.component.html',
  styleUrls: ['./to-share.component.css']
})
export class ToShareComponent implements OnInit {

  link = false;

  constructor() { }

  ngOnInit(): void {
  }

  linkCopy(): void{
    this.link = true;
    setTimeout(() => {
      this.link = false;
    }, 3000);
  }

}
