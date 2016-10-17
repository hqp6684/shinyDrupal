/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShinyConfigurationService } from './shiny-configuration.service';

describe('Service: ShinyConfiguration', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShinyConfigurationService]
    });
  });

  it('should ...', inject([ShinyConfigurationService], (service: ShinyConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
