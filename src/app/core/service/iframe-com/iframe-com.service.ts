import { Injectable } from '@angular/core';

import { AppConfigService } from '../app-config.service';
import { ShinyConfigurationService } from '../shiny-configuration/shiny-configuration.service';
import { AuthService } from '../../module/authentication/service/auth.service';
import { Message } from './message';

@Injectable()
export class IframeComService {

  private isConnectedToParent = false;
  private isConnectedToChild = false;

  constructor(
    private appConfigService: AppConfigService,
    private shinyConfigService: ShinyConfigurationService,
    private authSerivice: AuthService
  ) {
    window.addEventListener('load', this.connectToParent);
    // TODO add connectToChild on load 
    // But but shoud we run the method on load or manually trigger it later
    window.addEventListener('message', this.receiveMessage, false);
  }

  /**
   * Keep posting message until the connection is ebstablished. 
   */
  private connectToParent() {
    while (!this.isConnectedToParent) {
      let message = <Message>{ connectionStatus: { fromChildToParent: { isConnected: false } } };
      this.postMessageToParent(message, true);
    }
  }

  /** TODO check connection first */
  postMessageToChild(receiver: HTMLIFrameElement, message: Message) {
    let targetOrigin = this.appConfigService.targetChildOrigin;
    receiver.contentWindow.postMessage(JSON.stringify(message), targetOrigin);
  }
  /**
   * @force force to send message to parent window 
   */
  postMessageToParent(message: Message, force?: boolean) {
    if (force) {
      parent.postMessage(JSON.stringify(message), this.appConfigService.targetParentOrigin);
    } else {
      if (this.isConnectedToParent) {
        parent.postMessage(JSON.stringify(message), this.appConfigService.targetParentOrigin);
      } else {
        throw new Error('Connection to parent window is not ready');
      }
    }

  }

  private receiveMessage(event: MessageEvent) {
    if (this.appConfigService.allowedOrigins.indexOf(event.origin) > -1) {
      this.parseMessage(event.data);
    }
  }

  private parseMessage(message: string) {
    let _message = <Message>JSON.parse(message);
    if (_message.data) {
      this.extractMessageData(_message);
    } else if (_message.connectionStatus) {
      this.setConnectedToParent(_message);
      this.setConnectedToChild(_message);
    }
  }


  private setConnectedToParent(message: Message) {
    if (message.connectionStatus.fromParentToChild) {
      // To prevent error : property of a null/undefined object
      if (message.connectionStatus.fromParentToChild.isConnected) {
        // This also stops connectToParent()
        this.isConnectedToParent = true;
      }
    }
  }

  private setConnectedToChild(message: Message) {
    if (message.connectionStatus.fromChildToParent) {
      if (message.connectionStatus.fromChildToParent.isConnected) {
        this.isConnectedToChild = true;
      }
    }
  }

  private extractMessageData(message: Message) {
    if (message.data.node) {

      // This data was sent  from drupal
      // log user in and udpate shiny config
      // TODO redesign/more study to get ndoe uid 
      this.authSerivice.isLoggedIn = true;

      this.shinyConfigService.setUid(message.data.node.uid);
      // if (message.data.shinyConfiguration) {
      //   // if id is included, then data was sent from parent window (drupal)
      //   if (message.data.shinyConfiguration.id) {
      //     this.shinyConfigService.setId(message.data.shinyConfiguration.id);
      //   }
      // }
    }
  }
}
