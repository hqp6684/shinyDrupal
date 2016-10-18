import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf
} from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CoreComponent } from './core.component';
import * as coreService from '../../service/service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [CoreComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    coreService.ShinyConfigurationService,
    coreService.DatablockService,
    coreService.HandleHttpErrorService

  ]
})
export class CoreModule {
  static forRoot(config: coreService.ShinyConfigurationServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: coreService.ShinyConfigurationServiceConfig, useValue: config }
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
