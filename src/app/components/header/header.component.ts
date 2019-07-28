import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data;
  constructor(private userData: UserDataService) { }

  ngOnInit() {
    this.userData.getData(1).subscribe(res => {
      
      this.data = res['results'][0];
      console.log(this.data);
    }, err => {

    })
  }

}
