import { UsersRoutingModule } from './users-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UsersAllComponent } from './users-all/users-all.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule,
  ],
  declarations: [
    EditProfileComponent,
    UsersAllComponent,
    UserListComponent,
  ]
})
export class UsersModule { }
