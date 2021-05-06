import { Component, OnInit } from '@angular/core';

/**
 * Componente que contiene la página de tarjetas de regalo
 */
@Component({
  selector: 'app-gift-cards',
  templateUrl: './gift-cards.component.html',
  styleUrls: ['./gift-cards.component.css']
})
export class GiftCardsComponent implements OnInit {

  /**
   * Cadena que contiene la ruta de la imagen del banner superior
   */
  banner = 'assets/img/BannerTarjetas.png';
  /**
   * Cadena que contiene el texto del banner
   */
  text = 'Regalos únicos para gente única, lleva tu tarjeta de regalo.';
  /**
   * Cadena que contiene el tutilo para el banner
   */
  categori = 'tarjetas de regalo';
  /**
   * Arreglo que contiene la ruta de las imagenes de las tarjetas
   */
  cards = ['assets/img/card50.png', 'assets/img/card100.png', 'assets/img/card150.png', 'assets/img/card200.png', 'assets/img/card400.png'];

  /**
   * Constructor que asigna la ruta de la imagen para el banner en móvil
   */
  constructor() {
    if (window.innerWidth <= 830){
      this.banner = 'assets/img/BannerTarjetasMovil.png';
    }
   }

  ngOnInit(): void {
  }

}
