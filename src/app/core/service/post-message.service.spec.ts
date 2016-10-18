/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostMessageService } from './post-message.service';

describe('Service: PostMessage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostMessageService]
    });
  });

  it('should ...', inject([PostMessageService], (service: PostMessageService) => {
    expect(service).toBeTruthy();
  }));
});
