import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { LoginComponent } from './component/login/login.component';
import { DrupalAuthenticationPageComponent } from './component/drupal-authentication-page/drupal-authentication-page.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'login', component: LoginComponent },
            { path: 'register', component: DrupalAuthenticationPageComponent }
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuardService,
        AuthService
    ]
})
export class AuthenticationRoutingModule { }
