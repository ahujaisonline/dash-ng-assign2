import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input('data') data;
  constructor() { }

  ngOnInit() {
  }

}
