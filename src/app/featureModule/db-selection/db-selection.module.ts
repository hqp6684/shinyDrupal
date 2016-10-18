import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Material2Module } from '../../shared/module/material-2/material-2.module';
import { DbSelectionRoutingModule } from './db-selection-routing.module';
import { DbSelectionComponent } from './db-selection.component';

@NgModule({
  imports: [
    CommonModule,
    DbSelectionRoutingModule,
    Material2Module
  ],
  declarations: [DbSelectionComponent]
})
export class DbSelectionModule { }
