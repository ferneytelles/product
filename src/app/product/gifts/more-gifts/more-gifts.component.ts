import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-gifts',
  templateUrl: './more-gifts.component.html',
  styleUrls: ['./more-gifts.component.css']
})
export class MoreGiftsComponent implements OnInit {

  title = 'Personaliza';
  text = 'Prueba nuestro poderoso editor y personaliza regalos para todas las ocaciones.';
  title2 = 'Tarjetas de regalo';
  text2 = 'Regala el poder de elegir lo que quieran en el vasto universo de Fuera del Molde.';

  constructor() { }

  ngOnInit(): void {
  }

}
