import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class CrossDomainMessagingService implements OnInit {
  domain = 'destination';
  private receivedMessage: string;
  ngOnInit() {
    window.addEventListener('message', (messageEvent) => {
      this.receivedMessage = messageEvent.data;
    });
  }
  constructor() { }

  listener(message: string) {
    // process message
    return;
  }
}

