import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { FreeBotLibComponent, FreeBotLibModule } from 'free-bot-lib';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FreeBotLibModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    const element = createCustomElement(FreeBotLibComponent, { injector: this.injector })
    customElements.define("lib-free-bot", element);
  }
}
