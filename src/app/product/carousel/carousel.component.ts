import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides = ['assets/img/1.png', 'assets/img/2.png', 'assets/img/3.png', 'assets/img/4.png', 'assets/img/6.png', 'assets/img/7.png', 'assets/img/8.png', 'assets/img/9.png', 'assets/img/4.png', 'assets/img/3.png', 'assets/img/7.png', 'assets/img/2.png', 'assets/img/8.png', 'assets/img/espirales.png'];
  imgs = ['assets/img/1.png', 'assets/img/8.png'];

  productSlideConfig: any = {
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 7,
    swipeToSlide: true,
    focusOnSelect: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        }
      },
      {
        breakpoint: 1410,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
      breakpoint: 1170,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
      {
        breakpoint: 960,
        settings: {
          centerMode: true,
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 820,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 720,
        settings: {
          centerMode: true,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 570,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 470,
        settings: {
          infinite: false,
          arrows: false,
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 430,
        settings: {
          centerMode: true,
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          infinite: false,
          arrows: false,
          slidesToShow: 1.2,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
