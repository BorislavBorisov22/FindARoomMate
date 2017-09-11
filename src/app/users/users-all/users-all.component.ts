import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { UserStorageService } from './../../services/user-storage.service';
import { UsersService } from './../../services/users.service';
import { User } from './../../models/user.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/map';

const USERS_ALL_URL = '/user/all';
const DEFAULT_PAGE_SIZE = 9;
const DEFAULT_PAGE = 1;

@Component({
  selector: 'app-users-all',
  templateUrl: './users-all.component.html',
  styleUrls: ['./users-all.component.css']
})

export class UsersAllComponent implements OnInit, OnDestroy {
  users: User[];
  currentPage: number;
  pageSize: number;
  totalElementsCount: number;

  private subscriptions: Subscription[];

  constructor(private readonly usersService: UsersService,
    private readonly usersStorageService: UserStorageService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscriptions = [];
    this.users = [];
    this.getUsersForCurrentPage();
    const sub = this.activatedRoute.queryParams
      .subscribe((params) => {
        this.currentPage = Number(params.page || DEFAULT_PAGE);
        this.pageSize = Number(params.size || DEFAULT_PAGE_SIZE);
        this.getUsersForCurrentPage();
      });

    this.subscriptions.push(sub);
  }

  onPageChanged(page: number): void {
    this.currentPage = page;
    this.pageSize = this.pageSize === 0 ? DEFAULT_PAGE_SIZE : this.pageSize;
    const url = USERS_ALL_URL + '?page=' + this.currentPage + '&size=' + this.pageSize;
    this.router.navigateByUrl(url);
  }

  getUsersForCurrentPage() {
    this.users = [];
    const sub = this.usersService.getAllUsers()
      .map(x => x.json())
      .subscribe((responseUsers: any) => {
        this.totalElementsCount = responseUsers.length;

        const lastPage = Math.ceil(this.totalElementsCount / this.pageSize);
        if (this.currentPage > lastPage || this.currentPage < 1) {
          this.currentPage = 1;
        }

        this.users = responseUsers.reverse().splice((this.currentPage - 1) * this.pageSize, this.pageSize);
      });

    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
