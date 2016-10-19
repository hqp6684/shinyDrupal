import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Material2Module } from '../../shared/module/material-2/material-2.module';
import { LegacyShinyRoutingModule } from './legacy-shiny-routing.module';
import { LegacyShinyComponent } from './legacy-shiny.component';
import { LegacyShinyHomeComponent } from './component/legacy-shiny-home/legacy-shiny-home.component';

@NgModule({
  imports: [
    CommonModule,

    LegacyShinyRoutingModule,
    Material2Module,
  ],
  declarations: [LegacyShinyComponent, LegacyShinyHomeComponent]
})
export class LegacyShinyModule { }
