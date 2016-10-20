import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';


@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [AuthenticationComponent, LoginComponent],
  providers: [AuthService, AuthGuardService]
})
export class AuthenticationModule { }
