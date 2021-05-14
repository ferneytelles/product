import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifts-groups',
  templateUrl: './gifts-groups.component.html',
  styleUrls: ['./gifts-groups.component.css']
})
export class GiftsGroupsComponent implements OnInit {

  categori = 'Regalos para grupos';
  text = 'Para tu equipo de trabajo o para tu club de lectura, la unión hace la fuerza.';
  banner = '';

  constructor() {
    if (window.innerWidth <= 830){
      this.banner = 'assets/img/gifts/bannerGruposMovil.png';
    }else{
      this.banner = 'assets/img/gifts/bannerGrupos.png';
    }
   }

  ngOnInit(): void {
  }

}
