import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegacyShinyComponent } from './legacy-shiny.component';
import { HomeComponent } from './component/home/home.component';
import { ViewComponent } from './component/view/view.component';

const routes: Routes = [
    {
        path: '', component: LegacyShinyComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },

        ]
    }, { path: 'view', component: ViewComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LegacyShinyRoutingModule { }

export const routedComponents = [LegacyShinyComponent];
