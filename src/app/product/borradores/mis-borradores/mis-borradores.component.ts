import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-borradores',
  templateUrl: './mis-borradores.component.html',
  styleUrls: ['./mis-borradores.component.css']
})
export class MisBorradoresComponent implements OnInit {

  texto = 'Selecciona el borrador de diseño sobre el cual deseas editar. (Regístrate y guarda tus diseños de forma permanente)';
  borradores = ['assets/img/3.png', 'assets/img/1.png', 'assets/img/7.png', 'assets/img/1.png', 'assets/img/3.png', 'assets/img/1.png', 'assets/img/3.png', 'assets/img/1.png', 'assets/img/3.png', 'assets/img/1.png'];
  constructor() { }

  ngOnInit(): void {
  }

}
