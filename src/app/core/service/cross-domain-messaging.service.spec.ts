/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrossDomainMessagingService } from './cross-domain-messaging.service';

describe('Service: CrossDomainMessaging', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrossDomainMessagingService]
    });
  });

  it('should ...', inject([CrossDomainMessagingService], (service: CrossDomainMessagingService) => {
    expect(service).toBeTruthy();
  }));
});
