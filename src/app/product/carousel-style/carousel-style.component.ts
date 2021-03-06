import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente que contiene el carrusel de los estilos del producto
 */
@Component({
  selector: 'app-carousel-style',
  templateUrl: './carousel-style.component.html',
  styleUrls: ['./carousel-style.component.css']
})
export class CarouselStyleComponent implements OnInit {

  /**
   * Arreglo que contiene los estilos del producto
   */
  @Input() slides: Array<any>;

  /**
   * Variable que contiene la configuración del carrusel
   */
  productSlideConfig: any = {
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: false,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
      {
        breakpoint: 960,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 690,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 410,
        settings: {
          arrows: false,
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
