import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/module/core/core.module';
import { Material2Module } from './shared/module/material-2/material-2.module';
/**Root Routing Module */
import { AppRoutingModule } from './app-routing.module';
/** Feature Module */
import { DbSelectionModule } from './featureModule/db-selection/db-selection.module';
import { LegacyShinyModule } from './featureModule/legacy-shiny/legacy-shiny.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/component/home/home.component';
import { LeftSidenavComponent } from './core/component/left-sidenav/left-sidenav.component';
import { PageNotFoundComponent } from './core/component/page-not-found/page-not-found.component';

/**App config 
 * define api root url
*/
import { apiRootUrl } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftSidenavComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule.forRoot({ apiRootUrl: apiRootUrl, shinyConfigurationId: 0 }),
    Material2Module,

    DbSelectionModule,
    LegacyShinyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
