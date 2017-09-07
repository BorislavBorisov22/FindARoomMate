import { Response, Http } from '@angular/http';
import { FileUploaderService } from './../../services/file-uploader.service';
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
    private readonly usersService: UsersService,
    private readonly fileUploader: FileUploaderService,
    private readonly http: Http) { }

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

  onChange(files: File[]): void {
    console.log(files);
    const formData = new FormData();

    formData.append('uploads[]', files[0]);

    this.http.post('http://localhost:4201/upload', formData)
      .map(r => r.json())
      .subscribe((response) => {
        console.log(files, 'returned files');
      });
    //   const fileReader = new FileReader();

    //   fileReader.onload = (e: any) => {
    //     this.user.profilePictureUrl = e.target.result;
    //     console.log(this.user.profilePictureUrl);
    //   };

    //   fileReader.readAsDataURL(profilePicture);

    //   console.log(profilePicture, 'profilePicture');
  }
}
