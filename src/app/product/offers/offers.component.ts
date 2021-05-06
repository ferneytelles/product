import { Component, OnInit } from '@angular/core';

/**
 * Componente que contiene la landing de ofertas
 */
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  /**
   * Cadena que contiene la ruta de la imagen del banner superior
   */
  banner = 'assets/img/BannerOfertas.png';
  /**
   * Cadena que contiene el texto del banner
   */
  text = 'Encuentra las mejores ofertas en todos nuestros productos y diseños.';
  /**
   * Cadena que contiene el tutilo para el banner
   */
  categori = 'ofertas';

  /**
   * Constructor que asigna la ruta de la imagen para el banner en móvil
   */
  constructor() {
    if (window.innerWidth <= 830){
      this.banner = 'assets/img/BannerOfertasMovil.png';
    }
   }

  ngOnInit(): void {
  }

}
