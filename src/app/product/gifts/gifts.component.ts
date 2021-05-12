import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {

  /**
   * Arreglo que contiene las opciones del menu.
   */
  menu = ['Para ella', 'Para él', 'Para la pareja', 'Para la familia', 'Para niños y bebes', 'Para grupos', 'Para mascotas'];
  categori = 'Regalos';
  text = 'Regalos únicos para gente única, lo mejor para ti y para los tuyos';
  banner = '';

  constructor() {
    if (window.innerWidth <= 830){
      this.banner = 'assets/img/gifts/bannerRegalosMovil.png';
    }else{
      this.banner = 'assets/img/gifts/bannerRegalos.png';
    }
   }

  ngOnInit(): void {
  }

}
