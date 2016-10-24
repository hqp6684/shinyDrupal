import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';

import { Material2Module } from '../../../shared/module/material-2/material-2.module';
import { DrupalAuthenticationPageComponent } from './component/drupal-authentication-page/drupal-authentication-page.component';

@NgModule({
  imports: [
    CommonModule,
    Material2Module,
    AuthenticationRoutingModule,

  ],
  declarations: [AuthenticationComponent, LoginComponent, DrupalAuthenticationPageComponent],
  providers: [AuthService, AuthGuardService]
})
export class AuthenticationModule { }
