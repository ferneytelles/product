import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

/**
 * Componente que contiene la index de Fuera del Molde.
 */
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  /**
   * Objeto que contiene la imformacción y la ruta de la imagen para
   * el banner de colecciones.
   */
  colecciones = {name: 'colecciones', text: 'Ven a los confines del universo para descubrir toda una galaxia de diseños únicos.', image: 'assets/img/index/colecciones.png'};
  /**
   * Objeto que contiene la imformacción y la ruta de la imagen para
   * el banner de vende tu arte.
   */
  arte = {name: 'vende tu arte', text: '¿Eres artista? Vende con nosotros tu arte y forma parte del club de fuera del molde', image: 'assets/img/index/arte.png'};

  constructor(private api: ApiService) {
    // api.getCategories();
   }

  ngOnInit(): void {
  }

}
