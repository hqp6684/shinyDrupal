import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// import { AppComponent } from '../../../app.component';dd
import { HomeComponent } from './core/component/home/home.component';
import { PageNotFoundComponent } from './core/component/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'dbSelection', loadChildren: './featureModule/db-selection/db-selection.module#DbSelectionModule' },
    { path: 'legacyShiny', loadChildren: './featureModule/legacy-shiny/legacy-shiny.module#LegacyShinyModule' },
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }


