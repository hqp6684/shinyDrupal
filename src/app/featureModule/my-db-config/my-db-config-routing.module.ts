import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyDbConfigViewComponent } from './component/my-db-config-view/my-db-config-view.component';

import { MyDbConfigViewListComponent } from './component/my-db-config-view-list/my-db-config-view-list.component';
import { MyDbConfigViewComfyComponent } from './component/my-db-config-view-comfy/my-db-config-view-comfy.component';

import { AuthGuardService } from '../../core/module/authentication/service/auth-guard.service';
const routes: Routes = [
    // { path: 'dbSelection', , pathMatch: 'full' },
    {
        path: 'dbConfig', redirectTo: 'dbConfig/view', pathMatch: 'full'
    },

    // { path: 'view', component: MyDbConfigViewComponent },
    {
        path: 'dbConfig/view', component: MyDbConfigViewComponent,
        canActivate: [AuthGuardService],
        children: [
            { path: '', redirectTo: 'view_list', pathMatch: 'full' },
            { path: 'view_list', component: MyDbConfigViewListComponent },
            { path: 'view_comfy', component: MyDbConfigViewComfyComponent }
        ]
    },



    // { path: 'dbSelection/home', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MyDbConfigRoutingModule { }
