import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbSelectionComponent } from './db-selection.component';

const routes: Routes = [
    { path: 'dbSelection', component: DbSelectionComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DbSelectionRoutingModule { }
