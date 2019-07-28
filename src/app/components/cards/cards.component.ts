import { Component, OnInit, Input } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input('type') type;
  cards = 10;
  data = [];
  cityData = ['delhi', 'gurgaon', 'noida'];

  constructor(
    private _dataService: UserDataService
  ) { }

  ngOnInit() {
    if (this.type != 'image') {
      this._dataService.getData(this.cards).subscribe(res => {
        this.data = res['results'];
        console.log(this.data);
      }, err => {

      })
    }  }

}
