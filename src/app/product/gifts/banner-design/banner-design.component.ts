import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-design',
  templateUrl: './banner-design.component.html',
  styleUrls: ['./banner-design.component.css']
})
export class BannerDesignComponent implements OnInit {

  title = 'Crea el regalo ideal';
  text = 'Diseña un producto para regalar escogiendo entre nuestro banco de diseños o cargando tu propia imagen.';

  constructor() { }

  ngOnInit(): void {
  }

}
