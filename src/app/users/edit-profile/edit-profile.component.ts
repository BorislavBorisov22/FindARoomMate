import { NotificationService } from './../../services/notification.service';
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
  public profilePictureUrl: string;

  constructor(
    private readonly router: Router,
    private readonly usersService: UsersService,
    private readonly fileUploader: FileUploaderService,
    private readonly notificationService: NotificationService) { }

  ngOnInit() {
    this.user = new User();

    this.usersService.getLoggedUserInfo()
      .map((r) => r.json())
      .subscribe((response) => {
        this.user = response.user;
      }, (err) => {
      });
  }

  onSubmit(): void {
  }

  onChange(files: File[]): void {
    this.fileUploader.uploadFile(files)
      .map(r => r.json())
      .subscribe((response: any) => {
        const { filesUrls } = response;
        this.user.profilePictureUrl = filesUrls[0];

        this.notificationService.showInfo('Click on save changes in order to save your work');
      }, (err) => {
        console.log(err);
      });
  }
}
