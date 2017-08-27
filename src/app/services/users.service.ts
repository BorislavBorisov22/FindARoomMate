import { Injectable } from '@angular/core';

const users = [
  {
    username: 'Ivan'
  },
  {
    username: 'Asen',
  },
  {
    username: 'Todor',
  }
];

@Injectable()
export class UsersService {

  getUsers() {
    return users;
  }
}
