import { Injectable, Optional } from '@angular/core';
import { Http } from '@angular/http';

import { ShinyConfigurationServiceConfig } from './shiny-configuration-service-config';

@Injectable()
export class ShinyConfigurationService {
  private apiRootUrl: string;
  constructor( @Optional() config: ShinyConfigurationServiceConfig, private http: Http) {
    this.apiRootUrl = config.apiRootUrl;
  }
}
