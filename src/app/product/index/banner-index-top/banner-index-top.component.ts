import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-banner-index-top',
  templateUrl: './banner-index-top.component.html',
  styleUrls: ['./banner-index-top.component.css']
})
export class BannerIndexTopComponent implements OnInit {

  banner1 = '';
  banner2 = '';

  constructor() {
    if (window.innerWidth > 960){
      this.banner1 = 'assets/img/index/indexBannerLeft.png';
      this.banner2 = 'assets/img/index/indexBannerRight.png';
    }else{
      this.banner1 = 'assets/img/index/bannerMovil1.png';
      this.banner2 = 'assets/img/index/bannerMovil2.png';
    }
   }

  ngOnInit(): void {
  }

}
