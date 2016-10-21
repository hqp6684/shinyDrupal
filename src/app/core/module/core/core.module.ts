import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AuthenticationModule } from '../authentication/authentication.module';
import { AdminModule } from '../admin/admin.module';


import { CoreComponent } from './core.component';
import * as coreService from '../../service/service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    AuthenticationModule,
    AdminModule
  ],
  declarations: [CoreComponent],
  providers: [
    coreService.ShinyConfigurationService,
    coreService.DatablockService,
    coreService.HandleHttpErrorService,
    coreService.AppConfigService

  ]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
      ]
    };
  }
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }


}
