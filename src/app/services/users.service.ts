import { UserStorageService } from './user-storage.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './../models/user.model';
import { HttpRequesterService } from './http-requester.service';
import { Injectable } from '@angular/core';

const DOMAIN_URL = 'http://localhost:4201/api';
const REGISTER_USER_URL = DOMAIN_URL + '/auth/register';
const LOGIN_USER_URL = DOMAIN_URL + '/auth/login';
const USER_PERSONAL_INFO_URL = DOMAIN_URL + '/users/profile';

@Injectable()
export class UsersService {

  constructor(
    private httpRequester: HttpRequesterService,
    private userStorageService: UserStorageService) {
  }

  isUserLoggedIn() {
    return this.userStorageService.isUserLogged();
  }

  registerUser(user: User): Observable<Response> {
    return this.httpRequester.post(REGISTER_USER_URL, user, {});
  }

  loginUser(user: User): Observable<Response> {
    return this.httpRequester.put(LOGIN_USER_URL, user, {});
  }

  getLoggedUserInfo() {
    const token = this.userStorageService.getLoggedUserToken();

    const headers = {
      token,
      'Content-Type': 'application/json',
    };

    const url = USER_PERSONAL_INFO_URL;
    console.log(url);
    return this.httpRequester.get(USER_PERSONAL_INFO_URL, headers);
  }
}
