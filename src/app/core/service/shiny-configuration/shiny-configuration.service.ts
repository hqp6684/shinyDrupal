import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ShinyConfiguration } from '../../dataModel/data.model';
import { HandleHttpErrorService } from '../handle-http-error.service';
import { AppConfigService } from '../app-config.service';

@Injectable()
export class ShinyConfigurationService {

  // private config_id: number;

  private uid: number;
  constructor(
    // @Optional() config: ShinyConfigurationServiceConfig,
    private http: Http,
    private appConfigService: AppConfigService,
    // private dbService: DatablockService,
    private handleHttpErrorService: HandleHttpErrorService
  ) {
    // this.apiRootUrl = config.apiRootUrl;
    // this.dbService.url = this.appConfigService.apiRootUrl.concat('db/');
    // this.shinyConfig = new ShinyConfiguration(0);


  }
  setUid(id: number) {
    this.uid = id;
    // get data from monet
  }


  private getConfigByUid() {
    // TODO get config based on the user id

  }
}
