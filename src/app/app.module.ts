import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/module/core/core.module';
import { Material2Module } from './shared/module/material-2/material-2.module';
/**Root Routing Module */
import { AppRoutingModule } from './app-routing.module';
/** Feature Module */
import { DbSelectionModule } from './featureModule/db-selection/db-selection.module';
// import { LegacyShinyModule } from './featureModule/legacy-shiny/legacy-shiny.module';
// import { AdminModule } from './core/module/admin/admin.module';
import { MyDbConfigModule } from './featureModule/my-db-config/my-db-config.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/component/home/home.component';
import { LeftSidenavComponent } from './core/component/left-sidenav/left-sidenav.component';
import { PageNotFoundComponent } from './core/component/page-not-found/page-not-found.component';

import { BottomRightMenuComponent } from './core/component/bottom-right-menu/bottom-right-menu.component';
import { FixedTopToolbarComponent } from './core/component/fixed-top-toolbar/fixed-top-toolbar.component';
import { AccountMenuComponent } from './core/component/fixed-top-toolbar/account-menu/account-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftSidenavComponent,
    PageNotFoundComponent,
    BottomRightMenuComponent,
    FixedTopToolbarComponent,
    AccountMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Material2Module,
    DbSelectionModule,
    CoreModule.forRoot(),
    MyDbConfigModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
