import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyDbConfigRoutingModule } from './my-db-config-routing.module';
import { Material2Module } from '../../shared/module/material-2/material-2.module';

import { MyDbConfigViewComponent } from './component/my-db-config-view/my-db-config-view.component';
import { MyDbConfigViewListComponent } from './component/my-db-config-view-list/my-db-config-view-list.component';
import { MyDbConfigViewComfyComponent } from './component/my-db-config-view-comfy/my-db-config-view-comfy.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Material2Module,
    MyDbConfigRoutingModule

  ],
  declarations: [MyDbConfigViewComponent, MyDbConfigViewListComponent, MyDbConfigViewComfyComponent]
})
export class MyDbConfigModule { }
