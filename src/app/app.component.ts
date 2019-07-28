import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //defining properties as constant for demo only
  title = 'app';
  near = 'near';
  by = 'by';
  for = 'for'
  userType = 'user';
  dep = 'dep';
  whatsappData = {
    email: "xyz@whatsapp.com",
    location: { city: "Business Account" },
    name: {
      first: "Alert",
      last: "on Whatsapp",
      title: "Get"
    },
    picture: {
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/78.jpg"
    }
  }
  singleType = 'whatsapp';
  imgType = "image";
}
