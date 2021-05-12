import { Component, OnInit } from '@angular/core';

/**
 * Componente que contiene el banner superior de la index.
 */
@Component({
  selector: 'app-banner-index-top',
  templateUrl: './banner-index-top.component.html',
  styleUrls: ['./banner-index-top.component.css']
})
export class BannerIndexTopComponent implements OnInit {

  /**
   * Cadena que contiene la ruta de la primera imagen del banner.
   */
  banner1 = '';
  /**
   * Cadena que contiene la ruta de la segunda imagen del banner.
   */
  banner2 = '';

  /**
   * Contructor que asigna la ruta de la imagen dependiendo
   * del tamaño del dispositivo
   */
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
