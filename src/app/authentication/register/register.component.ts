import { NotificationService } from './../../services/notification.service';
import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  user: User;

  constructor(
    private readonly usersService: UsersService,
    private readonly router: Router,
    private readonly notificationService: NotificationService) { }

  ngOnInit() {
    this.user = new User();
  }

  onRegisterSubmit(): void {
    this.usersService.registerUser(this.user)
      .map(r => r.json())
      .subscribe((responseObject) => {
        const { message } = responseObject;

        this.notificationService.showSuccess(message);
        this.router.navigateByUrl('/auth/login');
      }, (err) => {
        const { message } = err;
        this.notificationService.showError(message);
      });
  }
}
