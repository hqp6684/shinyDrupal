import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Material2Module } from '../../shared/module/material-2/material-2.module';
import { LegacyShinyRoutingModule } from './legacy-shiny-routing.module';
import { LegacyShinyComponent } from './legacy-shiny.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    LegacyShinyRoutingModule,
    Material2Module

  ],
  declarations: [LegacyShinyComponent, HomeComponent]
})
export class LegacyShinyModule { }
