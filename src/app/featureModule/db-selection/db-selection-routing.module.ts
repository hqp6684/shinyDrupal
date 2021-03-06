import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbSelectionComponent } from './db-selection.component';
import { DbSelectionHomeComponent } from './component/db-selection-home/db-selection-home.component';
import { DbSelectionViewComponent } from './component/db-selection-view/db-selection-view.component';
import { DbSelectionViewListComponent } from './component/db-selection-view-list/db-selection-view-list.component';

const routes: Routes = [
    // { path: 'dbSelection', , pathMatch: 'full' },
    {
        path: 'dbSelection', component: DbSelectionComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: DbSelectionHomeComponent },
            {
                path: 'view', component: DbSelectionViewComponent,
                children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'list', component: DbSelectionViewListComponent }
                ]
            },


        ],
    },

    // { path: 'dbSelection/home', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DbSelectionRoutingModule { }

export const routedComponents = [DbSelectionComponent];
