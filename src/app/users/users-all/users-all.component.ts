import { Router, ActivatedRoute } from '@angular/router';
import { UserStorageService } from './../../services/user-storage.service';
import { UsersService } from './../../services/users.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

const USERS_ALL_URL = '/user/all';
const DEFAULT_PAGE_SIZE = 9;
const DEFAULT_PAGE = 1;

@Component({
  selector: 'app-users-all',
  templateUrl: './users-all.component.html',
  styleUrls: ['./users-all.component.css']
})

export class UsersAllComponent implements OnInit {

  users: User[];
  currentPage: number;
  pageSize: number;
  totalElementsCount: number;

  constructor(private readonly usersService: UsersService,
    private readonly usersStorageService: UserStorageService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.users = [];
    this.getUsersForCurrentPage();
    this.activatedRoute.queryParams
      .subscribe((params) => {
        this.currentPage = Number(params.page || DEFAULT_PAGE);
        this.pageSize = Number(params.size || DEFAULT_PAGE_SIZE);
        this.getUsersForCurrentPage();
      });
  }

  onPageChanged(page: number): void {
    this.currentPage = page;
    this.pageSize = this.pageSize === 0 ? DEFAULT_PAGE_SIZE : this.pageSize;
    const url = USERS_ALL_URL + '?page=' + this.currentPage + '&size=' + this.pageSize;
    this.router.navigateByUrl(url);
  }

  getUsersForCurrentPage() {
    this.users = [];
    this.usersService.getAllUsers()
      .map(x => x.json())
      .subscribe((responseUsers: any) => {
        this.totalElementsCount = responseUsers.length;

        const lastPage = Math.ceil(this.totalElementsCount / this.pageSize);
        if (this.currentPage > lastPage || this.currentPage < 1) {
          this.currentPage = 1;
        }

        this.users = responseUsers.reverse().splice((this.currentPage - 1) * this.pageSize, this.pageSize);
      });
  }
}

/*
constructor(
    private readonly offersService: OffersService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.getOffersForCurrentPage();
    this.activatedRoute.queryParams
      .subscribe((params) => {
        this.currentPage = Number(params.page || DEFAULT_PAGE);
        this.pageSize = Number(params.size || DEFAULT_PAGE_SIZE);
        this.getOffersForCurrentPage();
      });
  }

  onPageChanged(page: number): void {
    this.currentPage = page;
    this.pageSize = this.pageSize === 0 ? DEFAULT_PAGE_SIZE : this.pageSize;
    const url = ALL_OFFERS_URL + '?page=' + this.currentPage + '&size=' + this.pageSize;
    this.router.navigateByUrl(url);
  }

  getOffersForCurrentPage(): void {
    this.offers = new Array<Offer>();
    this.offersService.getAllOffers()
      .map((r) => r.json())
      .subscribe((response) => {
        this.totalElementsCount = response.offers.length;

        const lastPage = Math.ceil(this.totalElementsCount / this.pageSize);
        if (this.currentPage > lastPage || this.currentPage < 1) {
          this.currentPage = 1;
        }

        this.offers = response.offers.reverse().splice((this.currentPage - 1) * this.pageSize, this.pageSize);
      }, (err) => {
      });
  }
*/
