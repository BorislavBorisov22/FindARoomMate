import { NotificationService } from './../../services/notification.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly notificationService: NotificationService) { }

  ngOnInit() {
    this.authService.logoutUser();
    // this.notificationService.showSuccess('You have logged out successfully');
    this.router.navigateByUrl('/');
  }
}
