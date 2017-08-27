import { FormsModule } from '@angular/forms/';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [RegisterComponent]
})
export class AuthenticationModule { }
