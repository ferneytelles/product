import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  colecciones = {name: 'colecciones', text: 'Ven a los confines del universo para descubrir toda una galaxia de diseños únicos.', image: 'assets/img/index/colecciones.png'};

  arte = {name: 'vende tu arte', text: '¿Eres artista? Vende con nosotros tu arte y forma parte del club de fuera del molde', image: 'assets/img/index/arte.png'};

  constructor(private api: ApiService) {
    // api.getCategories();
   }

  ngOnInit(): void {
  }

}
