import { NotificationService } from './../../services/notification.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { UsersService } from './../../services/users.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
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
        const { username, token, message } = response;
        this.authService.loginUser(username, token);

        this.notificationService.showSuccess(message);
        this.router.navigateByUrl('/');
      },
      (err) => {
        const { message } = err;
        this.notificationService.showError('Invalid username or password');
      });
  }
}
