import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gift-cards',
  templateUrl: './gift-cards.component.html',
  styleUrls: ['./gift-cards.component.css']
})
export class GiftCardsComponent implements OnInit {

  banner = 'assets/img/BannerTarjetas.png';
  text = 'Regalos únicos para gente única, lleva tu tarjeta de regalo.';
  categori = 'tarjetas de regalo';
  cards = ['assets/img/card50.png', 'assets/img/card100.png', 'assets/img/card150.png', 'assets/img/card200.png', 'assets/img/card400.png'];

  constructor() {
    if (window.innerWidth <= 830){
      this.banner = 'assets/img/BannerTarjetasMovil.png';
    }
   }

  ngOnInit(): void {
  }

}
