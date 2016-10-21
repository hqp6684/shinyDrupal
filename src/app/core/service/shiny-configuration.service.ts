import { Injectable, Optional } from '@angular/core';
import { Http } from '@angular/http';

// import { Observable } from 'rxjs/Observable';

// import { ShinyConfigurationServiceConfig } from './shiny-configuration-service-config';
import { DatablockService } from './datablock.service';
import { HandleHttpErrorService } from './handle-http-error.service';
import { AppConfigService } from './app-config.service';
import { ShinyConfiguration } from '../dataModel/data.model';

@Injectable()
export class ShinyConfigurationService {
  private shinyConfig: ShinyConfiguration;

  constructor(
    // @Optional() config: ShinyConfigurationServiceConfig,
    private http: Http,
    private appConfigService: AppConfigService,
    private dbService: DatablockService,
    private handleHttpErrorService: HandleHttpErrorService
  ) {
    // this.apiRootUrl = config.apiRootUrl;
    // this.dbService.url = this.appConfigService.apiRootUrl.concat('db/');
    // this.shinyConfig = new ShinyConfiguration(0);


  }

  getAllDatablocks() {
    return this.dbService.getAllDatablock();
  }



}
