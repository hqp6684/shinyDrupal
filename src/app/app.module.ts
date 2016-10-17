import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/module/core/core.module';
import { Material2Module } from './shared/module/material-2/material-2.module';
/**Root Routing Module */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/component/home/home.component';
import { LeftSideNavComponent } from './core/component/left-side-nav/left-side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftSideNavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule.forRoot({ apiRootUrl: 'apiUrl' }),
    Material2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
