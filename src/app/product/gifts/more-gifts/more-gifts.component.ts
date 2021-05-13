import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-gifts',
  templateUrl: './more-gifts.component.html',
  styleUrls: ['./more-gifts.component.css']
})
export class MoreGiftsComponent implements OnInit {

  title = 'Personaliza';
  text = 'Prueba nuestro poderoso editor y personaliza regalos para todas las ocaciones.';
  constructor() { }

  ngOnInit(): void {
  }

}
