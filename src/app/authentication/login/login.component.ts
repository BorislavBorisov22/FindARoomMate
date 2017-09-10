import { UserStorageService } from './../../services/user-storage.service';
import { NotificationService } from './../../services/notification.service';
import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public user: User;

  constructor(
    private usersService: UsersService,
    private userStorageService: UserStorageService,
    private router: Router,
    private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.user = new User();
  }

  onLoginSubmit(): void {
    this.usersService.loginUser(this.user)
      .map((r) => r.json())
      .subscribe((response: any) => {
        const { username, token, message, profilePicture } = response;
        this.userStorageService.loginUser(username, token, profilePicture);

        this.notificationService.showSuccess(message);
        this.router.navigateByUrl('/');
      },
      (err) => {
        const { message } = err;
        this.notificationService.showError('Invalid username or password');
      });
  }
}
