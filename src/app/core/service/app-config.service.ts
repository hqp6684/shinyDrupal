import { Injectable } from '@angular/core';
import * as appConst from '../../app.config';
@Injectable()
export class AppConfigService {
  constructor() {
  }

  get legacyShinyUrl(): string {
    return appConst.legacyShinyUrl;
  }

  get apiRootUrl(): string {
    return appConst.apiRootUrl;
  }

  get allowedOrigins(): string[] { return; }

  get targetChildOrigin(): string { return appConst.targetChildOrigin; }

  get targetParentOrigin(): string { return appConst.targetParentOrigin; }


  get drupalAuthenticationPage(): string { return appConst.drupalAuthenticationPage; }




}
