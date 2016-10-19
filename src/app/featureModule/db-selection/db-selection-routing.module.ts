import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbSelectionComponent } from './db-selection.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
    // { path: 'dbSelection', , pathMatch: 'full' },
    {
        path: 'dbSelection', component: DbSelectionComponent,
        children: [
            // { path: '', componenti: HomeComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
        ],
    }

    // { path: 'dbSelection/home', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DbSelectionRoutingModule { }

export const routedComponents = [DbSelectionComponent];
