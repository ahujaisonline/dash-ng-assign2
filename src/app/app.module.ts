import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { UserDataService } from './services/user-data.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { SearchComponent } from './components/search/search.component';
import { JobTileComponent } from './components/job-tile/job-tile.component';
import { ImgCardComponent } from './components/img-card/img-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    CardsComponent,
    UserComponent,
    SearchComponent,
    JobTileComponent,
    ImgCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
