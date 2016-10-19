import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbSelectionRoutingModule } from './db-selection-routing.module';
import { Material2Module } from '../../shared/module/material-2/material-2.module';
import { DbSelectionComponent } from './db-selection.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    DbSelectionRoutingModule,
    Material2Module
  ],
  declarations: [DbSelectionComponent, HomeComponent]
})
export class DbSelectionModule { }
