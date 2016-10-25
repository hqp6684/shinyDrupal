/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataBlockService } from './data-block.service';

describe('Service: DataBlock', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataBlockService]
    });
  });

  it('should ...', inject([DataBlockService], (service: DataBlockService) => {
    expect(service).toBeTruthy();
  }));
});
