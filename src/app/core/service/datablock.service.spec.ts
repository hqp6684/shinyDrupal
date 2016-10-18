/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatablockService } from './datablock.service';

describe('Service: Datablock', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatablockService]
    });
  });

  it('should ...', inject([DatablockService], (service: DatablockService) => {
    expect(service).toBeTruthy();
  }));
});
