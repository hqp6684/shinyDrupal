import { Injectable, Optional } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { ShinyConfigurationServiceConfig } from './shiny-configuration-service-config';
import { DatablockService } from './datablock.service';
import { HandleHttpErrorService } from './handle-http-error.service';

import { ShinyConfiguration } from '../dataModel/data.model';

@Injectable()
export class ShinyConfigurationService {
  private apiRootUrl: string;
  private shinyConfig: ShinyConfiguration;

  constructor(
    @Optional() config: ShinyConfigurationServiceConfig,
    private http: Http,
    private dbService: DatablockService,
    private handleHttpErrorService: HandleHttpErrorService
  ) {
    this.apiRootUrl = config.apiRootUrl;
    this.dbService.url = this.apiRootUrl.concat('db/');
    this.shinyConfig = new ShinyConfiguration(0);


  }

  getAllDatablocks() {
    return this.dbService.getAllDatablock();
  }

}
