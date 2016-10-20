import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuardService} from '../../core/module/authentication/service/auth-guard.service';
import { LegacyShinyComponent } from './legacy-shiny.component';
import { LegacyShinyHomeComponent } from './component/legacy-shiny-home/legacy-shiny-home.component';


const routes: Routes = [
    {
        path: '', component: LegacyShinyComponent,
        canActivate: [AuthGuardService],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: LegacyShinyHomeComponent },
            // { path: 'view', component: ViewComponent },
        ]
    },
    // { path: 'view', component: ViewComponent },
    // { path: 'homePage', component: HomePageComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LegacyShinyRoutingModule { }

export const routedComponents = [LegacyShinyComponent];
