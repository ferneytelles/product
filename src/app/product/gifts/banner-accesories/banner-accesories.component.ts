import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-accesories',
  templateUrl: './banner-accesories.component.html',
  styleUrls: ['./banner-accesories.component.css']
})
export class BannerAccesoriesComponent implements OnInit {

  title = 'Accesorios para grupos';
  text = 'Personaliza gorras, tazas, libretas, etc... Con el diseño o logo que identifique a tu grupo.';

  constructor() { }

  ngOnInit(): void {
  }

}
