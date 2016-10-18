/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HandleHttpErrorService } from './handle-http-error.service';

describe('Service: HandleHttpError', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandleHttpErrorService]
    });
  });

  it('should ...', inject([HandleHttpErrorService], (service: HandleHttpErrorService) => {
    expect(service).toBeTruthy();
  }));
});
