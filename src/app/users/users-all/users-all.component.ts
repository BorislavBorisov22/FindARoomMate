import { UserStorageService } from './../../services/user-storage.service';
import { UsersService } from './../../services/users.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-users-all',
  templateUrl: './users-all.component.html',
  styleUrls: ['./users-all.component.css']
})

export class UsersAllComponent implements OnInit {

  users: User[];

  constructor(private readonly usersService: UsersService,
    private readonly usersStorageService: UserStorageService) {
  }

  ngOnInit() {
    this.users = [];

    this.usersService.getAllUsers()
      .map(x => x.json())
      .subscribe((response) => {
        this.users = response;
      });
  }
}
