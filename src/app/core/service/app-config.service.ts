import { Injectable } from '@angular/core';
import * as appConst from '../../app.config';
@Injectable()
export class AppConfigService {
  constructor() {
  }

  get legacyShinyUrl(): string {
    return appConst.legacyShinyurl;
  }



}
