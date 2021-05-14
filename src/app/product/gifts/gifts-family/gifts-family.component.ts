import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifts-family',
  templateUrl: './gifts-family.component.html',
  styleUrls: ['./gifts-family.component.css']
})
export class GiftsFamilyComponent implements OnInit {

  categori = 'Regalos para la familia';
  text = 'Dale a los tuyos un obsequio especial con todo el amor del mundo.';
  banner = '';

  constructor() {
    if (window.innerWidth <= 830){
      this.banner = 'assets/img/gifts/bannerFamiliaMovil.png';
    }else{
      this.banner = 'assets/img/gifts/bannerFamilia.png';
    }
  }

  ngOnInit(): void {
  }

}
