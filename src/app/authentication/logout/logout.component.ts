import { UserStorageService } from './../../services/user-storage.service';
import { NotificationService } from './../../services/notification.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private readonly userStorageService: UserStorageService,
    private readonly router: Router,
    private readonly notificationService: NotificationService) { }

  ngOnInit() {
    this.userStorageService.logoutUser();
    this.notificationService.showSuccess('You have logged out successfully');
    this.router.navigateByUrl('/');
  }
}
