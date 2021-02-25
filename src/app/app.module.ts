import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { BotmsgComponent } from './components/botmsg/botmsg.component';
import { UsermsgComponent } from './components/usermsg/usermsg.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateComponent } from './components/date/date.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SuggestionchipsComponent } from './components/suggestionchips/suggestionchips.component';
import { SimpleresponseComponent } from './components/simpleresponse/simpleresponse.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    BotmsgComponent,
    UsermsgComponent,
    ListComponent,
    DateComponent,
    CarouselComponent,
    SuggestionchipsComponent,
    SimpleresponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
