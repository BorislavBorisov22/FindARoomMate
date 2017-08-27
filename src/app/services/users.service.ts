import { AuthService } from './auth.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './../models/user.model';
import { HttpRequesterService } from './http-requester.service';
import { Injectable } from '@angular/core';

const DOMAIN_URL = 'localhost:4200/api';
const REGISTER_USER_URL = DOMAIN_URL + '/auth/register';
const LOGIN_USER_URL = DOMAIN_URL + '/auth/login';

@Injectable()
export class UsersService {

  private requestHeaders;

  constructor(
    private httpRequester: HttpRequesterService) {
    this.requestHeaders = {
      'content-type': 'application/json',
    };
  }

  isUserLoggedIn() {
    return false;
  }

  registerUser(user: User): Observable<Response> {
    return this.httpRequester.post(REGISTER_USER_URL, user, {});
  }

  loginUser(user: User): Observable<Response> {
    return this.httpRequester.put(LOGIN_USER_URL, user, {});
  }
}
