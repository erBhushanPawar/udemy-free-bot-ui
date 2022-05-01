import { Component, OnInit } from '@angular/core';
import { NgxMqttChatService } from 'ngx-mqtt-chat';
import { FreeBotLibService } from './free-bot-lib.service';

@Component({
  selector: 'lib-free-bot-ui',
  templateUrl: './free-bot-lib.component.html',
  styleUrls: ['./free-bot-lib.component.css']
})
export class FreeBotLibComponent implements OnInit {
  chatView = false;
  msgText = ''
  isMinimized = true;
  constructor(public fbls: FreeBotLibService) { }

  ngOnInit(): void { }

  sendMessage() {
    const m = this.fbls.buildMessage(this.msgText)
    this.fbls.sendMessage(m)
    this.msgText = ''
  }


}
