import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'job-tile',
  templateUrl: './job-tile.component.html',
  styleUrls: ['./job-tile.component.scss']
})
export class JobTileComponent implements OnInit {
  @Input('type') type;
  imgIcon;

  typeMap = {
    'by': './assets/icons/Jobs by Location.svg',
    'for': './assets/icons/Jobs For You.svg',
    'near': './assets/icons/Jobs Near You.svg'
  }

  constructor() {
  
   }

  ngOnInit() {
      this.imgIcon = this.typeMap[this.type];
  }

}
