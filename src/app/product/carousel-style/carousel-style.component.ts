import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-style',
  templateUrl: './carousel-style.component.html',
  styleUrls: ['./carousel-style.component.css']
})
export class CarouselStyleComponent implements OnInit {

  @Input() slides: Array<any>;

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
          slidesToShow: 2,
          slidesToScroll: 1
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
