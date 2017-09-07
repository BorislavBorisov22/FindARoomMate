import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent implements OnInit {

  public user: User;

  constructor(
    private readonly router: Router,
    private readonly usersService: UsersService) { }

  ngOnInit() {
    this.user = new User();

    this.usersService.getLoggedUserInfo()
      .map((r) => r.json())
      .subscribe((response) => {
        this.user = response.user;
      }, (err) => {
      });
  }

  onSubmit(profilePicture: File): void {
  }

  onChange(profilePicture: File): void {
    const fileReader = new FileReader();

    fileReader.onload = (e: any) => {
      this.user.profilePictureUrl = e.target.result;
    };

    fileReader.readAsDataURL(profilePicture);

    console.log(profilePicture, 'profilePicture');
  }
}
