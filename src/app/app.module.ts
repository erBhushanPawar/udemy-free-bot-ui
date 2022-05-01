import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FreeBotLibModule } from 'projects/free-bot-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FreeBotLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
