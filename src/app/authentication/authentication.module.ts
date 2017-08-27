import { LogoutGuardService } from './guards/logout-guard.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { FormsModule } from '@angular/forms/';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    AuthenticationRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [RegisterComponent, LoginComponent, LogoutComponent],
  providers: [AuthGuardService, LogoutGuardService]
})
export class AuthenticationModule { }
