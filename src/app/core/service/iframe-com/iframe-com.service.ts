import { Injectable } from '@angular/core';

import { AppConfigService } from '../app-config.service';

import { Message } from './message';

@Injectable()
export class IframeComService {

  constructor(private appConfService: AppConfigService) {
    // window.addEventListener('load', this.onMessageReceive);
    window.addEventListener('message', this.receiveMessage, false);
  }


  onMessageReceive() {

  }

  postMessageToChild(receiver: HTMLIFrameElement, message: Message) {
    let childWindow = j
    receiver.contentWindow.postMessage(JSON.stringify(message), targetOrigin);
  }

  postMessageToParent(message: string) {
    parent.postMessage('message', 'parentDomain');
  }

  private receiveMessage(event: MessageEvent) {
    if (this.appConfService.allowedOrigins.indexOf(event.origin) > -1) {
      this.parseMessage(event.data);
    }
  }

  private parseMessage(message: string) {
    let _message = <Message>JSON.parse(message);
    if (_message.shinyConfiguration) {
      switch (_message.shinyConfiguration.method) {
        case 'GET': break;
        case 'PUT': break;
        case 'SEND': break;
      }

    }
  }
}
