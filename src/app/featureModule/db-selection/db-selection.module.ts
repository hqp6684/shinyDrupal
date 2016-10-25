import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Material2Module } from '../../shared/module/material-2/material-2.module';
import { DbSelectionComponent } from './db-selection.component';

import { DbSelectionService } from './service/db-selection.service';

import { DbSelectionRoutingModule } from './db-selection-routing.module';
import { DbSelectionHomeComponent } from './component/db-selection-home/db-selection-home.component';
import { DbSelectionLeftSidenavComponent } from './component/db-selection-left-sidenav/db-selection-left-sidenav.component';
import { DbSelectionViewListComponent } from './component/db-selection-view-list/db-selection-view-list.component';
import { DbSelectionViewComponent } from './component/db-selection-view/db-selection-view.component';
import { DbSelectionViewLeftSidenavComponent } from './component/db-selection-view-left-sidenav/db-selection-view-left-sidenav.component';
import { DbSelectionViewComfyComponent } from './component/db-selection-view-comfy/db-selection-view-comfy.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DbSelectionRoutingModule,
    Material2Module,

  ],
  providers: [DbSelectionService],
  declarations: [DbSelectionComponent,
    DbSelectionHomeComponent,
    DbSelectionLeftSidenavComponent,
    DbSelectionViewListComponent,
    DbSelectionViewComponent, DbSelectionViewLeftSidenavComponent, DbSelectionViewComfyComponent]
})
export class DbSelectionModule { }
