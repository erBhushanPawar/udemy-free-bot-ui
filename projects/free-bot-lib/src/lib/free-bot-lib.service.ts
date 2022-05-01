import { Injectable } from '@angular/core';
import { NgxMqttChatService } from 'ngx-mqtt-chat';

@Injectable({
  providedIn: 'root'
})
export class FreeBotLibService {
  browserId: string | null = null;
  topicId = 'free-bot-0310/'
  msgs: any = []
  constructor(private chattingService: NgxMqttChatService) {
    // this.browserId = localStorage.getItem('browserId')
    if (!this.browserId) {
      this.browserId = 'browserId_' + new Date().getTime()
      localStorage.setItem('browserId', this.browserId)
    }
    this.topicId = 'free-bot-0310/common-room'
    this.init()
  }
  init() {
    let mqtt = {
      manageConnectionManually: false, //this flag will prevent the service to connection automatically
      hostname: 'test.mosquitto.org',
      port: 8081,
      protocol: 'wss',
      path: ''
    } as any
    this.chattingService.connect(mqtt)

    this.chattingService.subscribeToTopic(this.topicId)?.subscribe((d) => {
      if (!d) { return }
      const m = new MessageModel(d)
      m.isSent = m.senderId == this.browserId
      this.msgs.push(m)
      console.log(d, this.msgs)
    })


  }

  sendMessage(msgObj: MessageModel) {
    console.log('Sending message to', this.topicId, msgObj)
    this.chattingService.publishToTopic(this.topicId, msgObj)

  }
  buildMessage(msg: string) {
    return new MessageModel({ msg, senderId: this.browserId, topicId: this.topicId })
  }



}


export class MessageModel {
  msg!: string;
  senderId!: string;
  receipientId!: string;
  topicId!: string;
  sentOn!: number;
  isSent: boolean = true;
  constructor(o?: any) {
    this.senderId = o.senderId
    this.msg = o.msg
    this.topicId = o.topicId

    this.receipientId = 'support001'
    this.sentOn = new Date().getTime()
  }
}