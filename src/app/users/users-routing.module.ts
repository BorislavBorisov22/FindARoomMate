import { UsersAllComponent } from './users-all/users-all.component';
import { LogoutGuardService } from './../services/guards/logout-guard.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'edit', component: EditProfileComponent, canActivate: [LogoutGuardService] },
    { path: 'all', component: UsersAllComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsersRoutingModule { }
