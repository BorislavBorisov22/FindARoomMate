import { Subscription } from 'rxjs/Subscription';
import { NotificationService } from './../../services/notification.service';
import { UsersService } from './../../services/users.service';
import { UserStorageService } from './../../services/user-storage.service';
import { User } from './../../models/user.model';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit, OnDestroy {
  @Input()
  user: User;

  private rateUserSubscription: Subscription;

  constructor(private readonly usersStorageService: UserStorageService,
    private readonly usersService: UsersService,
    private readonly notificator: NotificationService) { }

  ngOnInit() {
    this.rateUserSubscription = new Subscription();
  }

  isUserRated(user: User): boolean {
    const loggedUsername = this.usersStorageService.getLoggedUserUsername();
    if (!this.usersStorageService.isUserLogged()) {
      return false;
    }

    return this.user.ratingUsers.some((u) => u === loggedUsername);
  }

  rateUser(): void {
    if (!this.usersStorageService.isUserLogged()) {
      this.notificator.showError('You must be logged in order to rate a user!');
      return;
    }

    const dislike = this.isUserRated(this.user);
    this.rateUserSubscription = this.usersService.rateUser(this.user, dislike)
      .map((r) => r.json())
      .subscribe((response) => {
        this.user = response.user;
      });
  }

  ngOnDestroy(): void {
    this.rateUserSubscription.unsubscribe();
  }
}
