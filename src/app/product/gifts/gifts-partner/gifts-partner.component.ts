import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifts-partner',
  templateUrl: './gifts-partner.component.html',
  styleUrls: ['./gifts-partner.component.css']
})
export class GiftsPartnerComponent implements OnInit {

  categori = 'Regalos para la pareja';
  text = 'Sorprende a esa persona especial dándole un regalo fuera del planeta.';
  banner = '';

  constructor() {
    if (window.innerWidth <= 830){
      this.banner = 'assets/img/gifts/bannerParejasMovil.png';
    }else{
      this.banner = 'assets/img/gifts/bannerParejas.png';
    }
   }

  ngOnInit(): void {
  }

}
