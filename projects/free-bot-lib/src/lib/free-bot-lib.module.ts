import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FreeBotLibComponent } from './free-bot-lib.component';

import { NgxMqttChatModule } from 'ngx-mqtt-chat';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FreeBotLibComponent
  ],
  imports: [
    CommonModule,
    NgxMqttChatModule,
    FormsModule
  ],
  exports: [
    FreeBotLibComponent
  ]
})
export class FreeBotLibModule { }
