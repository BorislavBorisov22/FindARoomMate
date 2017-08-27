import { UsersRoutingModule } from './users-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule,
  ],
  declarations: []
})
export class UsersModule { }
