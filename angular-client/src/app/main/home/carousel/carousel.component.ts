import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides = [
    {
      id: 1,
      src:'../../../../assets/img/banners-carrosel/horizon.png',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: 2,
      src:'../../../../assets/img/banners-carrosel/mine.png',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: 3,
      src:'../../../../assets/img/banners-carrosel/gta.png',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: 4,
      src:'../../../../assets/img/banners-carrosel/division.png',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 5,
      src:'../../../../assets/img/banners-carrosel/gta.png',
      alt:'Side 5',
      title:'Side 5'
    }
  ]

  constructor() { }
  
  ngOnInit(): void {
  }
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 10,
    autoHeight: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

}
