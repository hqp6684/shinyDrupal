import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Material2Module } from '../../shared/module/material-2/material-2.module';
import { DbSelectionComponent } from './db-selection.component';

import { DbSelectionRoutingModule } from './db-selection-routing.module';
import { DbSelectionHomeComponent } from './component/db-selection-home/db-selection-home.component';
import { DbSelectionLeftSidenavComponent } from './component/db-selection-left-sidenav/db-selection-left-sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DbSelectionRoutingModule,
    Material2Module,

  ],
  declarations: [DbSelectionComponent, DbSelectionHomeComponent, DbSelectionLeftSidenavComponent]
})
export class DbSelectionModule { }
