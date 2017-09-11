import { UserStorageService } from './../../services/user-storage.service';
import { NotificationService } from './../../services/notification.service';
import { Response, Http } from '@angular/http';
import { FileUploaderService } from './../../services/file-uploader.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { User } from './../../models/user.model';
import { Component, OnInit, Output, EventEmitter, AfterContentInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent implements OnInit, AfterContentInit, OnDestroy {
  public user: User;
  public profilePictureUrl: string;
  private subscriptions: Subscription[];

  constructor(
    private readonly router: Router,
    private readonly usersService: UsersService,
    private readonly fileUploader: FileUploaderService,
    private readonly notificationService: NotificationService,
    private readonly userStorageService: UserStorageService) {
    this.subscriptions = [];
  }

  ngOnInit() {
    this.user = new User();

    const subscription = this.usersService.getLoggedUserInfo()
      .map((r) => r.json())
      .subscribe((response) => {
        this.user = response.user;
      }, (err) => {
      });

    this.subscriptions.push(subscription);
  }

  onSubmit(): void {
    const sub = this.usersService.updateUserInfo(this.user)
      .map(r => r.json())
      .subscribe((response: any) => {
        this.userStorageService.setUserInfo(this.user);
        this.notificationService.showSuccess('Your profile changes have been saved!');
      }, (err) => {
      });

    this.subscriptions.push(sub);
  }

  onChange(files: File[]): void {
    const sub = this.fileUploader.uploadFile(files)
      .map(r => r.json())
      .subscribe((response: any) => {
        const { filesUrls } = response;
        this.user.profilePictureUrl = filesUrls[0];
        this.notificationService.showInfo('Click on save changes in order to save your work');
      }, (err) => { });

    this.subscriptions.push(sub);
  }

  ngAfterContentInit(): void {
    this.notificationService.showInfo('Please fill out all the fields in order to update your profile');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => {
      s.unsubscribe();
    });
  }
}
