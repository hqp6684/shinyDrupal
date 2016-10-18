import { Injectable, Optional } from '@angular/core';
import { Http } from '@angular/http';

import { ShinyConfigurationServiceConfig } from './shiny-configuration-service-config';

import { ShinyConfiguration } from '../dataModel/datamodel';

@Injectable()
export class ShinyConfigurationService {
  private apiRootUrl: string;
  private shinyConfig: ShinyConfiguration;

  constructor( @Optional() config: ShinyConfigurationServiceConfig, private http: Http) {
    this.apiRootUrl = config.apiRootUrl;
    this.shinyConfig = new ShinyConfiguration(config.shinyConfigurationId);
  }

}
