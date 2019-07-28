import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.scss']
})
export class ImgCardComponent implements OnInit {
  @Input('data') data;
  cityMap;
  constructor() { }

  ngOnInit() {
    this.cityMap = {
      'delhi': './assets/city_images/delhi.jpeg',
      'noida': './assets/city_images/noida.jpeg',
      'gurgaon': './assets/city_images/gurgaon.jpeg'
    }
  }

}
