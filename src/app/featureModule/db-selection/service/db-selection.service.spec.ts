/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DbSelectionService } from './db-selection.service';

describe('Service: DbSelection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbSelectionService]
    });
  });

  it('should ...', inject([DbSelectionService], (service: DbSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
