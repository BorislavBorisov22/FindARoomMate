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
const UPDATE_USER_INFO_URL = DOMAIN_URL + '/users/update';
const GET_ALL_USERS_URL = DOMAIN_URL + '/users';

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

  getLoggedUserInfo(): Observable<Response> {
    const token = this.userStorageService.getLoggedUserToken();

    const headers = {
      token,
      'Content-Type': 'application/json',
    };

    const url = USER_PERSONAL_INFO_URL;
    return this.httpRequester.get(USER_PERSONAL_INFO_URL, headers);
  }

  getAllUsers(): Observable<Response> {
    return this.httpRequester.get(GET_ALL_USERS_URL, {});
  }

  updateUserInfo(user): Observable<Response> {
    const token = this.userStorageService.getLoggedUserToken();
    const headers = {
      token,
      'Content-Type': 'application/json',
    };

    return this.httpRequester.put(UPDATE_USER_INFO_URL, user, headers);
  }

  rateUser(userToRate: User, dislike: boolean): Observable<Response> {
    const token = this.userStorageService.getLoggedUserToken();
    const headers = {
      token,
      'Content-Type': 'application/json',
    };

    const body = {
      dislike,
    };

    const userId = userToRate._id;
    const url = DOMAIN_URL + '/users/' + userId + '/rate';

    return this.httpRequester.put(url, body, headers);
  }
}
