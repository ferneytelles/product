import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides = ['assets/img/1.png', 'assets/img/2.png', 'assets/img/3.png', 'assets/img/4.png', 'assets/img/6.png', 'assets/img/7.png', 'assets/img/8.png', 'assets/img/9.png', 'assets/img/4.png', 'assets/img/3.png', 'assets/img/7.png', 'assets/img/2.png', 'assets/img/8.png', 'assets/img/1.png'];
  imgs = ['assets/img/1.png', 'assets/img/8.png'];

  productSlideConfig: any = {
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipeToSlide: true,
    focusOnSelect: false,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
      {
        breakpoint: 960,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1.3,
          slidesToScroll: 0.5,
          swipeToSlide: true
        }
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
