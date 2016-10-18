import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegacyShinyComponent } from './legacy-shiny.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
    { path: 'legacyShiny', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LegacyShinyRoutingModule { }

export const routedComponents = [LegacyShinyComponent];
