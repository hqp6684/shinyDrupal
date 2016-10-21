/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IframeComService } from './iframe-com.service';

describe('Service: IframeCom', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IframeComService]
    });
  });

  it('should ...', inject([IframeComService], (service: IframeComService) => {
    expect(service).toBeTruthy();
  }));
});
