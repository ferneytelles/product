import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  banner = 'assets/img/BannerOfertas.png';
  text = 'Encuentra las mejores ofertas en todos nuestros productos y diseños.';
  categori = 'ofertas';
  constructor() {
    if (window.innerWidth <= 830){
      this.banner = 'assets/img/BannerOfertasMovil.png';
    }
   }

  ngOnInit(): void {
  }

}
