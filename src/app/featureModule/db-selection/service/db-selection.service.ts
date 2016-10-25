import { Injectable } from '@angular/core';

import { AppConfigService, ShinyConfigurationService } from '../../../core/service/service';

@Injectable()
export class DbSelectionService {

  constructor(private appConfigService: AppConfigService,
    private shinyConfigService: ShinyConfigurationService
  ) { }

}
