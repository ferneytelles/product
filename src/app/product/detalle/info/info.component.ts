import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() seleccionar: boolean;
  colores = ['#000000', '#ffffff', '#595959', '#009136', '#feed01', '#f29400', '#ff0000', '#e2017b', '#93117e', '#182983', '#009de0', '#e0ff77', '#b6e9ff', '#ffd799'];
  parrafo = 'Compara los datos con un producto que ya tengas en casa. Para medir las prendas de ropa, lo mejor es colocarlas en posición horizontal sobre una mesa.';

  constructor() { }

  ngOnInit(): void {
  }

}
